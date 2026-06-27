export interface TechGroup {
  group: string;
  items: TechItem[];
}
export interface TechItem {
  name: string;
  /** simpleicons slug для логотипа */
  slug: string;
  /** бренд-цвет hex (без #) */
  color: string;
}

export const TECH_GROUPS: TechGroup[] = [
  {
    group: "AI & ML",
    items: [
      { name: "OpenAI", slug: "openai", color: "ffffff" },
      { name: "Anthropic", slug: "anthropic", color: "ffffff" },
      { name: "Claude", slug: "claude", color: "D97757" },
      { name: "LangChain", slug: "langchain", color: "1C3C3C" },
    ],
  },
  {
    group: "Frontend & Backend",
    items: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
      { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
    ],
  },
  {
    group: "Data & Infra",
    items: [
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "Supabase", slug: "supabase", color: "3FCF8E" },
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "AWS", slug: "amazonwebservices", color: "FF9900" },
      { name: "Google Cloud", slug: "googlecloud", color: "4285F4" },
      { name: "Cloudflare", slug: "cloudflare", color: "F38020" },
      { name: "Vercel", slug: "vercel", color: "ffffff" },
      { name: "Stripe", slug: "stripe", color: "635BFF" },
    ],
  },
  {
    group: "Web3",
    items: [
      { name: "Solidity", slug: "solidity", color: "ffffff" },
      { name: "Ethereum", slug: "ethereum", color: "ffffff" },
      { name: "Polygon", slug: "polygon", color: "8247E5" },
      { name: "Solana", slug: "solana", color: "9945FF" },
    ],
  },
];

export const ALL_TECH = TECH_GROUPS.flatMap((g) => g.items);
