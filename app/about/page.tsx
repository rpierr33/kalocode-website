import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kalocode — a software development agency specializing in AI, robotics, and VR solutions.",
};

export default function AboutPage() {
  return <AboutContent />;
}
