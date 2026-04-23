import type { Metadata } from "next";
import { ProjectsContent } from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of AI, robotics, VR/XR, web, mobile, and cloud projects built by Kalocode.",
  openGraph: {
    title: "Projects | Kalocode",
    description:
      "Explore our portfolio of AI, robotics, VR/XR, web, mobile, and cloud projects.",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
