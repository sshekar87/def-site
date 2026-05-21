"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/site";
import { cn } from "@/lib/cn";

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
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.href} className="nav-dropdown">
                  <Link
                    href={link.href}
                    className={cn(isActive(link.href) && "active", "nav-dropdown-trigger")}
                    aria-haspopup="menu"
                  >
                    {link.label}
                    <ChevronDown size={14} className="nav-caret" aria-hidden="true" />
                  </Link>
                  <div className="nav-dropdown-panel" role="menu">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className={cn(pathname === child.href && "active")}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(isActive(link.href) && "active")}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
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
        {navLinks.map((link) =>
          link.children ? (
            <details key={link.href} className="mobile-menu-accordion">
              <summary>
                {link.label}
                <ChevronDown size={16} className="mobile-menu-caret" aria-hidden="true" />
              </summary>
              <div className="mobile-menu-children">
                {link.children.map((child) => (
                  <Link key={child.href + child.label} href={child.href}>
                    {child.label}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link key={link.href} href={link.href} className="mobile-menu-item">
              {link.label}
            </Link>
          ),
        )}
        <Link href="/donate" className="mobile-menu-item mobile-menu-donate">
          Donate
        </Link>
      </div>
    </>
  );
}
