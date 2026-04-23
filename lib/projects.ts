export type ProjectCategory = "AI" | "Healthcare" | "Finance" | "Web" | "E-Commerce";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDesc?: string;
  category: ProjectCategory;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    slug: "shiftcura",
    title: "ShiftCura",
    description:
      "Enterprise healthcare shift fulfillment marketplace with real-time matching, Stripe Connect payments, geofenced clock-in/out, and role-based dashboards for workers and providers.",
    longDesc:
      "A production-grade healthcare workforce platform competing with Clipboard Health and ShiftKey. Features include shift posting and acceptance, credential management, geofenced attendance verification, Stripe Connect payouts, real-time notifications, provider and worker dashboards, compliance tracking, and a rating system.",
    category: "Healthcare",
    tags: ["Next.js", "Prisma", "Stripe Connect", "Leaflet", "Web Push", "Sentry"],
    demoUrl: "https://shiftcura.com",
    imageUrl: "/images/projects/shiftcura.png",
    featured: true,
    order: 1,
  },
  {
    slug: "ledgr",
    title: "Ledgr",
    description:
      "AI-powered accounting platform with double-entry bookkeeping, GPT-4o Vision receipt scanning, financial forecasting, 1099 generation, and 7+ automated financial reports.",
    longDesc:
      "A QuickBooks-competitive accounting SaaS built for small businesses and freelancers. Features full double-entry accounting, AI-powered receipt scanning via GPT-4o Vision, smart transaction categorization, profit & loss reports, balance sheets, cash flow analysis, tax summaries, budget tracking, and natural language financial queries.",
    category: "Finance",
    tags: ["Next.js 16", "OpenAI Vision", "Recharts", "Stripe", "Playwright"],
    demoUrl: "https://quickbooks-ai-sigma.vercel.app",
    imageUrl: "/images/projects/quickbooks-ai.png",
    featured: true,
    order: 2,
  },
  {
    slug: "carecircle",
    title: "CareCircle",
    description:
      "Nurse workforce management platform with credential tracking, AI-powered matching, shift marketplace, compliance automation, and agency dashboards.",
    longDesc:
      "A comprehensive healthcare staffing SaaS for agencies managing nurse workforces. Features include credential wallet management, AI-powered worker-shift matching using Claude, interactive shift marketplace with map views, compliance tracking with automated alerts, analytics dashboards, and multi-role access control.",
    category: "Healthcare",
    tags: ["Next.js 15", "Claude API", "Prisma", "Stripe", "Leaflet", "Recharts"],
    demoUrl: "https://nurse-workforce-platform.vercel.app",
    imageUrl: "/images/projects/nurse-workforce-platform.png",
    featured: true,
    order: 3,
  },
  {
    slug: "notesai",
    title: "AudioNotes",
    description:
      "Audio transcription and AI note generation PWA with Whisper speech-to-text, intelligent summarization, and cross-platform support via Capacitor.",
    longDesc:
      "A voice-first note-taking application that records audio, transcribes it using OpenAI Whisper, and generates structured notes with AI. Supports multiple export formats, tag-based organization, and runs as a PWA with native iOS/Android builds via Capacitor.",
    category: "AI",
    tags: ["Next.js 16", "OpenAI Whisper", "Capacitor", "NextAuth v5", "Prisma"],
    demoUrl: "https://notesai-eta.vercel.app",
    imageUrl: "/images/projects/notesai.png",
    featured: true,
    order: 4,
  },
  {
    slug: "mailflow-ai",
    title: "MailFlow AI",
    description:
      "AI-powered email marketing and campaign management platform with smart content generation, audience segmentation, and analytics.",
    longDesc:
      "An email marketing SaaS that leverages Anthropic Claude for intelligent email content generation, subject line optimization, and audience segmentation. Features include campaign builder, template library, delivery analytics, and integration with Resend for transactional email delivery.",
    category: "AI",
    tags: ["Next.js 15", "Claude API", "Resend", "NextAuth v5", "Prisma"],
    demoUrl: "https://mailflow-ai-azure.vercel.app",
    imageUrl: "/images/projects/mailflow-ai.png",
    featured: false,
    order: 6,
  },
  {
    slug: "marketplace",
    title: "Marketplace",
    description:
      "Multi-vendor e-commerce marketplace with real-time messaging via Pusher, Stripe payments, vendor dashboards, and product management.",
    longDesc:
      "A full-featured multi-vendor marketplace platform supporting vendor onboarding, product listings with image uploads, real-time buyer-seller messaging via Pusher, Stripe payment processing, order management, and analytics dashboards for both vendors and platform admins.",
    category: "E-Commerce",
    tags: ["Next.js 16", "Prisma", "Supabase Auth", "Stripe", "Pusher"],
    demoUrl: "https://marketplace-mvp-six.vercel.app",
    imageUrl: "/images/projects/marketplace.png",
    featured: false,
    order: 7,
  },
  {
    slug: "mindcare",
    title: "MindCare",
    description:
      "Mental health and wellness platform connecting patients with providers, featuring appointment scheduling, resource library, and secure messaging.",
    longDesc:
      "A healthcare platform focused on mental wellness that connects patients with mental health providers. Features include provider directory, appointment scheduling, secure messaging, wellness resource library, and progress tracking tools.",
    category: "Healthcare",
    tags: ["Next.js 16", "PostgreSQL", "Resend", "Tailwind CSS v4"],
    demoUrl: "https://healthcare-platform-nu.vercel.app",
    imageUrl: "/images/projects/healthcare-platform.png",
    featured: false,
    order: 8,
  },
  {
    slug: "budget-app",
    title: "Budget App",
    description:
      "Personal finance and budget management application with transaction tracking, category breakdowns, and visual spending analytics.",
    longDesc:
      "A clean, intuitive personal finance tool for tracking income and expenses, setting budget goals, and visualizing spending patterns. Features include transaction categorization, monthly comparisons, and interactive charts for financial insights.",
    category: "Finance",
    tags: ["Next.js 16", "Prisma", "TanStack Query", "Recharts", "Tailwind CSS v4"],
    demoUrl: "https://budget-app-drab-eta.vercel.app",
    imageUrl: "/images/projects/budget-app.png",
    featured: false,
    order: 9,
  },
  {
    slug: "through-the-vine",
    title: "Through the Vine",
    description:
      "Wine discovery and subscription platform with curated selections, tasting notes, and Stripe-powered subscription management.",
    longDesc:
      "An elegant wine commerce platform featuring curated wine collections, detailed tasting notes and pairing suggestions, subscription box management with Stripe billing, user reviews, and a sommelier-guided discovery experience.",
    category: "E-Commerce",
    tags: ["Next.js 14", "Prisma", "Stripe", "NextAuth", "Resend"],
    demoUrl: "https://through-the-vine.vercel.app",
    imageUrl: "/images/projects/through-the-vine.png",
    featured: false,
    order: 10,
  },
  {
    slug: "selta-magic",
    title: "Selta Magic",
    description:
      "Luxury hair and beauty e-commerce store with live Stripe payments, product catalog, and customer account management.",
    longDesc:
      "A premium e-commerce storefront for luxury hair and beauty products. Features include a beautifully designed product catalog, live Stripe payment processing, customer accounts, order tracking, and a responsive shopping experience optimized for mobile.",
    category: "E-Commerce",
    tags: ["React 18", "Express.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://seltamagic.com",
    imageUrl: "/images/projects/selta-magic.png",
    featured: false,
    order: 11,
  },
  {
    slug: "marcs-cuisine",
    title: "Marc's Cuisine",
    description:
      "Restaurant ordering and management platform with menu management, online ordering, and Stripe payment processing.",
    longDesc:
      "A restaurant-focused web application with digital menu management, online ordering with real-time status updates, Stripe payment integration, reservation management, and an admin dashboard for restaurant operations.",
    category: "Web",
    tags: ["Next.js 14", "Drizzle ORM", "Stripe", "NextAuth v5", "Neon PostgreSQL"],
    demoUrl: "https://marcs-cuisine.vercel.app",
    imageUrl: "/images/projects/marcs-cuisine.png",
    featured: false,
    order: 12,
  },
  {
    slug: "hb-homehealth",
    title: "HB Home Health",
    description:
      "Home health agency management platform with patient tracking, caregiver scheduling, and compliance documentation.",
    longDesc:
      "A management platform built for Humanity & Blessings home health agency. Features include patient record management, caregiver scheduling and assignment, visit documentation, compliance tracking, and administrative dashboards.",
    category: "Healthcare",
    tags: ["Next.js 16", "Drizzle ORM", "NextAuth v5", "Sentry", "Neon PostgreSQL"],
    demoUrl: "https://humanityandblessings.com",
    imageUrl: "/images/projects/hb-homehealth.png",
    featured: false,
    order: 13,
  },
  {
    slug: "ben-ulysse-realtor",
    title: "Ben Ulysse Realtor",
    description:
      "Real estate platform for agents with property listings, Mapbox-powered map search, and lead capture for buyer/seller inquiries.",
    longDesc:
      "A professional real estate website for agents featuring MLS-style property listings, interactive map search powered by Mapbox GL, advanced filtering, lead capture forms, neighborhood guides, and agent profile pages.",
    category: "Web",
    tags: ["Next.js 16", "Drizzle ORM", "Mapbox GL", "NextAuth v5", "Playwright"],
    demoUrl: "https://ben-ulysse-realtor.vercel.app",
    imageUrl: "/images/projects/ben-ulysse-realtor.png",
    featured: false,
    order: 14,
  },
  {
    slug: "youre-invited",
    title: "You're Invited",
    description:
      "Event planning and invitation management platform with RSVP tracking, event pages, and guest list management.",
    longDesc:
      "A modern event planning platform where hosts can create beautiful event pages, send digital invitations, track RSVPs in real-time, manage guest lists, and coordinate event details all in one place.",
    category: "Web",
    tags: ["Express.js", "React", "Drizzle ORM", "JWT", "Neon PostgreSQL"],
    demoUrl: "https://youreinvited-three.vercel.app",
    imageUrl: "/images/projects/youre-invited.png",
    featured: false,
    order: 15,
  },
  {
    slug: "andrewlefkowitz",
    title: "Andrew Lefkowitz",
    description:
      "Professional portfolio website for a lawyer-turned-biotech CEO, showcasing career transitions, publications, and advisory roles.",
    longDesc:
      "A cinematic professional website designed for Andrew Lefkowitz, highlighting his journey from law to biotech leadership. Features include career timeline, publications showcase, advisory board positions, and a contact system.",
    category: "Web",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    demoUrl: "https://andrewlefkowitz.vercel.app",
    imageUrl: "/images/projects/andrewlefkowitz.png",
    featured: false,
    order: 16,
  },
  {
    slug: "horeb-church",
    title: "Horeb Church",
    description:
      "Church community platform with event management, member directory, donation processing via Stripe, and media gallery.",
    longDesc:
      "A community-focused church platform featuring event calendars, sermon archives, member directory, online donation processing via Stripe, photo/video galleries, and announcement management with Cloudinary media hosting.",
    category: "Web",
    tags: ["Next.js 16", "Prisma", "Stripe", "NextAuth v5", "Cloudinary"],
    demoUrl: "https://horeb-church-app.vercel.app",
    imageUrl: "/images/projects/horeb-church.png",
    featured: false,
    order: 17,
  },
  {
    slug: "tpm-app",
    title: "TPM App",
    description:
      "Technical Program Management tool for project tracking, milestone management, team coordination, and AI-powered status reporting.",
    longDesc:
      "A purpose-built TPM tool that streamlines technical program management with project tracking, milestone management, dependency mapping, team coordination, and AI-powered status report generation using Claude. Features Clerk authentication and a clean dashboard interface.",
    category: "AI",
    tags: ["React", "Vite", "Express.js", "Claude API", "Clerk", "Drizzle ORM"],
    demoUrl: "https://tpm-app-opal.vercel.app",
    imageUrl: "/images/projects/tpm-app.png",
    featured: false,
    order: 18,
  },
  {
    slug: "brawdposts",
    title: "BrawdPosts",
    description:
      "AI-powered social media management platform with 8-platform publishing, content repurposing, AI image/video/voice generation, 55+ templates, and agency workspaces.",
    longDesc:
      "A comprehensive social media content creation and scheduling SaaS supporting 8 platforms (X, Instagram, LinkedIn, TikTok, YouTube, Facebook, Pinterest, Threads). Features AI content generation with OpenAI, AI image generation via Replicate, AI voiceovers via ElevenLabs, content repurposing from URLs/PDFs/YouTube/podcasts, a viral vault, carousel builder, team workspaces, white-label agency mode, REST API, and tiered subscription billing via Stripe.",
    category: "AI",
    tags: ["Next.js 14", "BullMQ", "Redis", "OpenAI", "Replicate", "ElevenLabs", "Stripe"],
    demoUrl: "https://brawdposts.vercel.app",
    imageUrl: "/images/projects/brawdposts.png",
    featured: true,
    order: 2,
  },
  {
    slug: "kalcoins",
    title: "KalCoins",
    description:
      "Cryptocurrency token trading and management platform with real-time market data, portfolio tracking, and transaction management.",
    longDesc:
      "A crypto trading platform built as a Turborepo monorepo with a Next.js web app and WebSocket server. Features include real-time token price feeds, portfolio management, transaction history, wallet integration, and market analytics dashboards.",
    category: "Finance",
    tags: ["Next.js 14", "Turborepo", "Prisma", "PostgreSQL", "WebSockets", "TypeScript"],
    imageUrl: "/images/projects/kalcoins.png",
    featured: false,
    order: 19,
  },
  {
    slug: "tradebot",
    title: "TradeBot",
    description:
      "Real-time trading automation platform with algorithmic strategy execution, WebSocket market feeds, Redis caching, and portfolio analytics.",
    longDesc:
      "A sophisticated trading automation system built with a NestJS microservices backend and Next.js frontend. Features real-time market data via WebSocket feeds, algorithmic trading strategy configuration and execution, portfolio performance analytics with lightweight-charts, Redis-powered caching for high-frequency data, and automated order management.",
    category: "Finance",
    tags: ["NestJS", "Next.js 14", "Socket.io", "Redis", "PostgreSQL", "lightweight-charts"],
    imageUrl: "/images/projects/tradebot.png",
    featured: true,
    order: 5,
  },
  {
    slug: "paper-printer",
    title: "Paper Printer",
    description:
      "Autonomous AI-powered publishing platform with news aggregation from multiple sources, AI article generation, story clustering, and scheduled publishing.",
    longDesc:
      "An autonomous content publishing engine that aggregates news from NewsAPI, RSS feeds, and GDELT, clusters stories by topic, generates original articles using OpenAI, scores them for virality, and publishes on a configurable schedule. Features include an admin dashboard for editorial control, SEO optimization, and a public-facing media website.",
    category: "AI",
    tags: ["Next.js 14", "OpenAI", "Prisma", "NewsAPI", "node-cron", "Zod"],
    imageUrl: "/images/projects/paper-printer.png",
    featured: false,
    order: 20,
  },
  {
    slug: "creditlift-ai",
    title: "CreditLift AI",
    description:
      "AI-powered credit repair SaaS with dispute letter generation via Claude, credit score tracking, document management, and guided repair workflows.",
    longDesc:
      "A credit repair platform that uses Anthropic Claude to generate personalized dispute letters, track credit score improvements, manage uploaded documents, and guide users through the credit repair process step-by-step. Features include onboarding wizard, Stripe subscription billing, and a comprehensive dashboard.",
    category: "Finance",
    tags: ["Next.js 16", "Claude API", "Prisma", "Stripe", "NextAuth v5", "UploadThing"],
    demoUrl: "https://creditlift-ai.vercel.app",
    imageUrl: "/images/projects/creditlift-ai.png",
    featured: false,
    order: 21,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getCategories(): ProjectCategory[] {
  return ["AI", "Healthcare", "Finance", "Web", "E-Commerce"];
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category).sort((a, b) => a.order - b.order);
}
