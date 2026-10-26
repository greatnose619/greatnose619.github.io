export type Project = {
  slug: string
  title: string
  year: string
  image: string
  category: string
  services: string
  client: string
  summary: string
  description: [string, string]
}

export const projects: Project[] = [
  {
    slug: "appflowy-official-website",
    title: "AppFlowy Official Website",
    year: "2026",
    image: "project-1.png",
    category: "Official Website",
    services: "Product Design",
    client: "AppFlowy",
    summary: "A clear and flexible official website experience created to communicate AppFlowy’s open-source vision, product value, and growing ecosystem.",
    description: [
      "The project focuses on translating a complex productivity platform into a clear digital story. A modular visual system helps different audiences quickly understand the product while giving the team room to expand the website over time.",
      "The experience balances brand expression with practical product communication across desktop and mobile, creating a consistent foundation for launches, feature updates, community content, and future campaigns.",
    ],
  },
  {
    slug: "appflowy-design-guideline",
    title: "AppFlowy Design Guideline",
    year: "2025",
    image: "project-2.png",
    category: "Design System",
    services: "Design Guidelines",
    client: "AppFlowy",
    summary: "A unified design guideline that brings AppFlowy’s product principles, visual language, and interaction patterns into one scalable system.",
    description: [
      "The guideline establishes shared foundations for typography, color, layout, components, and interaction behavior. It gives designers and engineers a common language for making consistent product decisions.",
      "Built to evolve alongside the platform, the system supports customization without losing clarity or brand recognition, improving collaboration and reducing inconsistencies across features.",
    ],
  },
  {
    slug: "appflowy-io",
    title: "AppFlowy.IO",
    year: "2025",
    image: "project-3.png",
    category: "Productivity Platform",
    services: "Product Design",
    client: "AppFlowy",
    summary: "A customizable open-source productivity platform designed to help individuals and teams organize knowledge, projects, and everyday work.",
    description: [
      "The product experience turns powerful functionality into approachable workflows while preserving the flexibility expected from an open-source platform. Clear hierarchy and reusable patterns help people stay focused as their workspace grows.",
      "Continuous user feedback informed improvements across navigation, editing, customization, and collaboration, resulting in a more coherent experience across the product.",
    ],
  },
  {
    slug: "synology-account-6",
    title: "Synology Account 6.0",
    year: "2023",
    image: "project-1.png",
    category: "Account System",
    services: "UI/UX Design",
    client: "Synology",
    summary: "A redesigned account experience that simplifies access to Synology services, subscriptions, devices, and personal information.",
    description: [
      "The redesign brings fragmented account tasks into a unified information architecture. Clear navigation and status communication help users understand their services and complete important actions with confidence.",
      "A consistent visual system supports a wide range of account scenarios while improving usability across desktop and responsive layouts.",
    ],
  },
  {
    slug: "synology-workplus",
    title: "Synology WorkPlus",
    year: "2020",
    image: "project-2.png",
    category: "Collaboration Platform",
    services: "Product Design",
    client: "Synology",
    summary: "A connected workplace experience that brings communication, productivity, and team collaboration into one cohesive platform.",
    description: [
      "WorkPlus explores how multiple workplace tools can feel like one product. Shared interaction patterns and a clear navigation model reduce context switching and make everyday collaboration more efficient.",
      "The design balances information density with approachability, helping teams move between conversations, files, tasks, and meetings without losing context.",
    ],
  },
  {
    slug: "ductech-brand-identity",
    title: "DUCTECH Brand Identity",
    year: "2018",
    image: "project-3.png",
    category: "Brand Identity",
    services: "Brand Design",
    client: "DUCTECH",
    summary: "A complete brand identity created to connect DUCTECH’s smart-home technology with a clear, approachable vision for modern living.",
    description: [
      "The identity translates complex connected-home technology into a simple and recognizable brand system. Visual foundations were designed to work consistently across digital products, websites, marketing, and exhibitions.",
      "By connecting product experience with brand expression, the system helped DUCTECH present a coherent vision across both physical and digital touchpoints.",
    ],
  },
]
