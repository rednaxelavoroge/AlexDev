import {
  Bot, Layers, Building2, ShoppingBag, Send, Workflow, ShieldCheck, Cloud, Wallet,
  Compass, PenTool, Boxes, GitBranch, Rocket,
  UserCheck, MessagesSquare, MonitorPlay, Network, Gauge, Sparkles,
  type LucideProps,
} from "lucide-react";

const MAP = {
  Bot, Layers, Building2, ShoppingBag, Send, Workflow, ShieldCheck, Cloud, Wallet,
  Compass, PenTool, Boxes, GitBranch, Rocket,
  UserCheck, MessagesSquare, MonitorPlay, Network, Gauge, Sparkles,
} as const;

export type IconName = keyof typeof MAP;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = MAP[name as IconName] ?? Sparkles;
  return <Cmp {...props} />;
}
