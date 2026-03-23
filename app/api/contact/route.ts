import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  projectType: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Try to save to database if Prisma is available
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.contactSubmission.create({
        data: {
          name: data.name,
          email: data.email,
          company: data.company ?? null,
          message: `[${data.projectType}] ${data.message}`,
        },
      });
    } catch {
      // Database not connected — log instead
      console.log("Contact submission (no DB):", data);
    }

    // Optional: send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && !resendKey.includes("placeholder")) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Kalocode <noreply@kalocode.com>",
            to: ["contact@kalocode.com"],
            subject: `New inquiry from ${data.name} — ${data.projectType}`,
            text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "N/A"}\nType: ${data.projectType}\n\n${data.message}`,
          }),
        });
      } catch {
        console.log("Email send failed — Resend not configured");
      }
    }

    return NextResponse.json({ success: true });
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
