"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { MAIN_NAV } from "@/constants/navigation";
import { COMMON_COPY } from "@/copies/common";
import { COMPANY } from "@/constants/company";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-steel-100 bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <Container width="xl" className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label={COMMON_COPY.navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {MAIN_NAV.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-steel-900"
                        : "text-steel-600 hover:bg-steel-50 hover:text-steel-900",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <a href={`tel:${COMPANY.phonePrimary.replace(/\s+/g, "")}`}>
              <Phone aria-hidden className="size-4" />
              {COMPANY.phonePrimary}
            </a>
          </Button>
          <Button asChild size="default">
            <Link href="/contact">{COMMON_COPY.ctaQuote}</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label={COMMON_COPY.openMenu}>
              <Menu aria-hidden className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-background p-0">
            <SheetHeader className="border-b border-steel-100 px-6 py-5">
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
              <SheetDescription className="sr-only">{COMMON_COPY.navLabel}</SheetDescription>
            </SheetHeader>
            <nav aria-label={COMMON_COPY.navLabel} className="flex flex-col gap-1 p-4">
              {MAIN_NAV.map((link) => {
                const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-md px-3 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-steel-900 text-steel-50"
                          : "text-steel-700 hover:bg-steel-50 hover:text-steel-900",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
            <div className="border-t border-steel-100 p-4">
              <SheetClose asChild>
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">{COMMON_COPY.ctaQuote}</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
