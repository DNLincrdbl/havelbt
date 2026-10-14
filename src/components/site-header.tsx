"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

function Mark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5">
      <path
        d="M7 24V10.5h13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="20" cy="10.5" r="1.7" fill="currentColor" className="text-copper" />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-navy/80 text-navy">
            <Mark />
          </span>
          <span className="leading-none">
            <span className="block font-display text-[1.15rem] tracking-tight text-ink">
              Hável Bt.
            </span>
            <span className="mt-1 block text-[0.62rem] font-medium tracking-[0.18em] text-muted uppercase">
              Víz · gáz · fűtés
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Főmenü">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm tracking-wide ${
                  active
                    ? "text-ink underline decoration-copper decoration-2 underline-offset-8"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="#kapcsolat"
            className="text-sm tracking-wide text-muted hover:text-ink"
          >
            Kapcsolat
          </a>
        </nav>

        <a
          href={site.phoneHref}
          className="hidden text-sm font-medium tracking-wide text-navy lg:inline"
        >
          {site.phoneDisplay}
        </a>

        <button
          type="button"
          className="border border-line px-3 py-2 text-sm text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobil-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Bezár" : "Menü"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobil-menu"
          aria-label="Mobilmenü"
          className="border-t border-line bg-paper px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="block py-3 text-lg text-ink"
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a href="#kapcsolat" className="block py-3 text-lg text-ink" onClick={close}>
                Kapcsolat
              </a>
            </li>
            <li className="mt-2 border-t border-line pt-4">
              <a href={site.phoneHref} className="text-lg font-medium text-navy">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
