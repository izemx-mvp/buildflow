import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/build-flow-logo.png.asset.json";
import { common, contact, navItems, serviceItems } from "@/content/site";
import { useLanguage } from "@/context/language";
import { ButtonLink } from "./ui";

export function SiteHeader() {
 const { language, setLanguage } = useLanguage(); const [open, setOpen] = useState(false);
 useEffect(() => { if (!open) return; const close = () => setOpen(false); window.addEventListener("resize", close); return () => window.removeEventListener("resize", close); }, [open]);
 return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 shadow-sm backdrop-blur">
  <div className="container-shell grid min-h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:flex">
   <Link to="/" onClick={() => setOpen(false)} className="min-w-0 shrink-0" aria-label="Build Flow by AG — Home"><img src={logoAsset.url} alt="Build Flow by AG" className="h-auto w-44 max-w-full sm:w-52" width="1024" height="280" /></Link>
   <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-5 lg:flex">{navItems.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="whitespace-nowrap text-[0.72rem] font-bold text-brand transition hover:text-primary" activeProps={{ className: "text-primary" }}>{item.label[language]}</Link>)}</nav>
   <div className="hidden shrink-0 items-center gap-3 lg:flex"><div className="flex items-center text-xs font-extrabold" aria-label="Language"><button type="button" className={language === "fr" ? "text-primary" : "text-muted-foreground hover:text-brand"} onClick={() => setLanguage("fr")}>FR</button><span className="mx-2 text-border">|</span><button type="button" className={language === "en" ? "text-primary" : "text-muted-foreground hover:text-brand"} onClick={() => setLanguage("en")}>EN</button></div><ButtonLink to="/contact" className="min-h-10 px-4 py-2">Contact</ButtonLink></div>
   <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border text-brand transition hover:bg-muted lg:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
  </div>
  {open && <div className="border-t border-border bg-background lg:hidden"><nav className="container-shell flex flex-col py-4">{navItems.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="border-b border-border/60 py-3 text-sm font-bold text-brand" activeProps={{ className: "text-primary" }}>{item.label[language]}</Link>)}<div className="flex items-center justify-between gap-4 pt-5"><div className="flex text-sm font-extrabold"><button type="button" className={language === "fr" ? "text-primary" : "text-muted-foreground"} onClick={() => setLanguage("fr")}>FR</button><span className="mx-3 text-border">|</span><button type="button" className={language === "en" ? "text-primary" : "text-muted-foreground"} onClick={() => setLanguage("en")}>EN</button></div><ButtonLink to="/contact" className="min-h-10 px-4 py-2">Contact</ButtonLink></div></nav></div>}
 </header>;
}

export function SiteFooter() {
 const { language } = useLanguage();
 return <footer className="bg-brand text-brand-foreground"><div className="container-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.15fr] lg:py-20"><div><img src={logoAsset.url} alt="Build Flow by AG" className="w-52 rounded-sm bg-surface p-2" width="1024" height="280" loading="lazy"/><p className="mt-5 max-w-xs text-sm leading-6 text-brand-foreground/75">{common.tagline[language]}</p></div><div><FooterTitle>{common.quickLinks[language]}</FooterTitle><ul className="space-y-2.5">{navItems.slice(0,6).map(item => <li key={item.to}><Link to={item.to} className="text-sm text-brand-foreground/75 hover:text-primary">{item.label[language]}</Link></li>)}</ul></div><div><FooterTitle>{common.services[language]}</FooterTitle><ul className="space-y-2.5">{serviceItems.slice(0,5).map((item,i) => <li key={i} className="text-sm leading-5 text-brand-foreground/75">{item[language]}</li>)}</ul></div><div><FooterTitle>{common.contactTitle[language]}</FooterTitle><ul className="space-y-4 text-sm text-brand-foreground/75"><li><a className="flex gap-3 hover:text-primary" href="tel:+212662716472"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary"/>+212 662 716 472</a></li><li><a className="flex gap-3 break-all hover:text-primary" href="mailto:aadnanimane3@gmail.com"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary"/>aadnanimane3@gmail.com</a></li><li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary"/><span>{contact.address[language]}</span></li></ul></div></div><div className="border-t border-brand-foreground/15"><div className="container-shell py-5 text-xs text-brand-foreground/60">{common.copyright[language]}</div></div></footer>;
}
function FooterTitle({ children }: { children: React.ReactNode }) { return <h2 className="mb-5 text-xs font-extrabold uppercase tracking-label text-brand-foreground">{children}</h2>; }
