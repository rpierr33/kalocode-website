import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kalocode. Tell us about your AI, robotics, or VR project.",
};

export default function ContactPage() {
  return <ContactForm />;
}
