import * as React from "react";
import { cn } from "@/lib/utils";
export function Card({ className, ...p }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card/88 text-card-foreground shadow-[0_18px_60px_-52px_#000] backdrop-blur-sm",
        className,
      )}
      {...p}
    />
  );
}
export function CardHeader({ className, ...p }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-1.5 p-5", className)} {...p} />;
}
export function CardTitle({ className, ...p }: React.ComponentProps<"h3">) {
  return (
    <h3 className={cn("font-semibold tracking-tight", className)} {...p} />
  );
}
export function CardDescription({
  className,
  ...p
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...p} />
  );
}
export function CardContent({ className, ...p }: React.ComponentProps<"div">) {
  return <div className={cn("p-5 pt-0", className)} {...p} />;
}
export function CardFooter({ className, ...p }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center p-5 pt-0", className)} {...p} />;
}
