import { cn } from "@/lib/cn";

export function Wrap({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
}) {
  return <Tag className={cn("wrap", className)}>{children}</Tag>;
}
