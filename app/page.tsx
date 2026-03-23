import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <ProjectsGrid />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
