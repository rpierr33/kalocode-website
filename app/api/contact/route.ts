import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  projectType: z.string().min(1),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    const { allowed, remaining, resetAt } = checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    const body = await request.json();
    const data = contactSchema.parse(body);

    // Honeypot check — if filled, silently accept but discard
    if (data.website) {
      return NextResponse.json({ success: true });
    }

    // Try to save to database if Prisma is available
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.contactSubmission.create({
        data: {
          name: data.name,
          email: data.email,
          company: data.company ?? null,
          projectType: data.projectType,
          message: data.message,
        },
      });
    } catch {
      // Database not connected — log instead
      console.log("Contact submission (no DB):", data);
    }

    // Optional: send email via Brevo
    const brevoKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    if (brevoKey && toEmail && fromEmail) {
      try {
        const resp = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "api-key": brevoKey,
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            sender: { name: "Kalocode", email: fromEmail },
            to: [{ email: toEmail }],
            replyTo: { email: data.email, name: data.name },
            subject: `New inquiry from ${data.name} — ${data.projectType}`,
            textContent: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "N/A"}\nType: ${data.projectType}\n\n${data.message}`,
          }),
        });
        if (!resp.ok) {
          const body = await resp.text().catch(() => "");
          console.error(`Brevo send failed: ${resp.status} ${body}`);
        }
      } catch (err) {
        console.error("Brevo send threw:", err);
      }
    }

    return NextResponse.json(
      { success: true },
      {
        headers: {
          "X-RateLimit-Remaining": String(remaining),
        },
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
