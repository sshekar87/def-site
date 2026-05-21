"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/site";
import { cn } from "@/lib/cn";
import { DashLogo } from "@/components/brand/DashLogo";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Close the mobile menu when navigation happens (covers both link clicks
    // and browser back/forward). The lint rule discourages setState-in-effect
    // for derived state, but here the menu's open state is genuinely external
    // to render — it needs to react to pathname changes from any source.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <nav className="site-nav" aria-label="Primary">
        <div className="nav-inner">
          <Link href="/" className="logo" aria-label={`${siteConfig.name} — Home`}>
            <div className="logo-mark" aria-hidden="true">
              D
            </div>
            <div className="logo-text">
              <span className="logo-name">{siteConfig.name}</span>
              <span className="logo-sub">Established 1995 · 501(c)(3)</span>
            </div>
          </Link>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    isActive(link.href) && "active",
                    link.href === "/events/dash" && "nav-link-with-mark",
                  )}
                >
                  {link.href === "/events/dash" && (
                    <DashLogo size={20} className="nav-mark" />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/donate" className="nav-cta">
            Donate
          </Link>
          <button
            className="mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className={cn("mobile-menu", open && "open")}
        aria-hidden={!open}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link-with-mark">
            {link.href === "/events/dash" && (
              <DashLogo size={20} className="nav-mark" />
            )}
            {link.label}
          </Link>
        ))}
        <Link href="/donate">Donate</Link>
      </div>
    </>
  );
}
