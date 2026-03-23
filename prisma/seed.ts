import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const projects = [
    {
      slug: "patreon-clone",
      title: "Patreon Clone",
      description:
        "Full-stack creator monetization platform with subscription tiers, content gating, and Stripe payments.",
      longDesc:
        "A complete Patreon-style platform built from the ground up. Features include creator profiles, tiered subscription plans with Stripe integration, gated content delivery, real-time notifications, and a comprehensive dashboard for creators to manage their audience and earnings.",
      tags: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
      demoUrl: "https://www.kalocode.com/project/patreon-clone",
      imageUrl: "/images/patreon-logo.jpg",
      featured: true,
      order: 1,
    },
    {
      slug: "linktree-clone",
      title: "Linktree Clone",
      description:
        "Customizable bio link platform with analytics, custom themes, and drag-and-drop link management.",
      longDesc:
        "A feature-rich bio link platform that lets users create beautiful, customizable link pages. Includes drag-and-drop reordering, custom themes and backgrounds, click analytics with geographic data, and social media integrations.",
      tags: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      demoUrl: "https://www.kalocode.com/project/linktree-clone",
      imageUrl: "/images/linktree-logo.png",
      featured: true,
      order: 2,
    },
    {
      slug: "ai-robotics-dashboard",
      title: "AI Robotics Dashboard",
      description:
        "Real-time telemetry and control interface for autonomous robot fleets using ROS2 and WebSockets.",
      longDesc:
        "A mission-critical dashboard for monitoring and controlling autonomous robot fleets. Features real-time telemetry visualization, WebSocket-based live data streaming, fleet management tools, path planning interfaces, and automated alert systems for anomaly detection.",
      tags: ["ROS2", "WebSockets", "React", "Python"],
      featured: true,
      order: 3,
    },
    {
      slug: "vr-training-platform",
      title: "VR Training Platform",
      description:
        "Immersive enterprise training simulations in Unity with multiplayer support and progress tracking.",
      longDesc:
        "An enterprise-grade VR training platform built in Unity. Supports multiplayer training sessions, detailed progress tracking and analytics, scenario branching, haptic feedback integration, and compliance reporting for regulated industries.",
      tags: ["Unity", "C#", "WebXR", "Firebase"],
      featured: false,
      order: 4,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }

  console.log("Seed completed successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
