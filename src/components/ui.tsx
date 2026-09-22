import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ButtonLink({ to, children, variant = "primary", className }: { to: "/" | "/about" | "/expertise" | "/services" | "/methodology" | "/references" | "/contact"; children: ReactNode; variant?: "primary" | "outline" | "light"; className?: string }) {
 return <Link to={to} className={cn("inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", variant === "primary" && "bg-primary text-primary-foreground shadow-button hover:-translate-y-0.5 hover:bg-primary-hover", variant === "outline" && "border border-brand bg-transparent text-brand hover:bg-brand hover:text-brand-foreground", variant === "light" && "bg-surface text-brand hover:-translate-y-0.5 hover:bg-surface-muted", className)}>{children}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
}
export function SectionHeading({ eyebrow, title, subtitle, align = "left", light = false }: { eyebrow: string; title: string; subtitle?: string; align?: "left" | "center"; light?: boolean }) {
 return <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}><p className="mb-4 text-xs font-extrabold uppercase tracking-label text-primary">{eyebrow}</p><h2 className={cn("text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl", light ? "text-brand-foreground" : "text-brand")}>{title}</h2>{subtitle && <p className={cn("mt-5 text-base leading-7 sm:text-lg", light ? "text-brand-foreground/75" : "text-muted-foreground")}>{subtitle}</p>}</div>
}
export function IconCard({ icon: Icon, title, children, href }: { icon: LucideIcon; title: string; children?: ReactNode; href?: "/expertise" }) {
 const content = <><span className="mb-6 grid h-12 w-12 place-items-center rounded-md bg-primary-soft text-primary"><Icon className="h-6 w-6" strokeWidth={1.8} /></span><h3 className="text-xl font-extrabold text-brand">{title}</h3>{children && <div className="mt-3 text-sm leading-6 text-muted-foreground">{children}</div>}</>;
 return href ? <Link to={href} className="group flex h-full flex-col rounded-md border border-border bg-card p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">{content}<ArrowRight className="mt-6 h-5 w-5 text-primary transition-transform group-hover:translate-x-1" /></Link> : <article className="flex h-full flex-col rounded-md border border-border bg-card p-6 shadow-card">{content}</article>;
}
export function PageIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
 return <section className="relative overflow-hidden bg-brand py-16 sm:py-20 lg:py-24"><div className="absolute inset-y-0 right-0 w-1/3 border-l border-brand-foreground/10 bg-brand-light/20 [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]"/><div className="container-shell relative"><SectionHeading eyebrow={eyebrow} title={title} light /></div></section>;
}
export function CtaBand({ title, button }: { title: string; button: string }) { return <section className="bg-primary py-10 sm:py-12"><div className="container-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><h2 className="max-w-2xl text-2xl font-extrabold text-primary-foreground sm:text-3xl">{title}</h2><ButtonLink to="/contact" variant="light">{button}</ButtonLink></div></section>; }
