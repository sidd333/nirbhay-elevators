import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { FOOTER_NAV } from "@/constants/navigation";
import { COMPANY } from "@/constants/company";
import { COMMON_COPY } from "@/copies/common";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const phoneHref = `tel:${COMPANY.phonePrimary.replace(/\s+/g, "")}`;

  return (
    <footer className="bg-steel-950 text-steel-300">
      <Container width="xl" className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo tone="inverse" />
            <p className="max-w-xs text-sm leading-relaxed text-steel-400">
              {COMPANY.tagline} {COMPANY.legalName} — engineering passenger, cargo and industrial lifts since {COMPANY.foundedYear}.
            </p>
            <address className="not-italic text-sm text-steel-400">
              {COMPANY.address.street}
              <br />
              {COMPANY.address.locality}, {COMPANY.address.city} {COMPANY.address.postalCode}
              <br />
              <a href={phoneHref} className="text-steel-200 hover:text-brass-300">
                {COMPANY.phonePrimary}
              </a>
              <br />
              <a href={`mailto:${COMPANY.email}`} className="text-steel-200 hover:text-brass-300">
                {COMPANY.email}
              </a>
            </address>
          </div>

          <nav aria-label={COMMON_COPY.footerNavLabel} className="contents">
            {FOOTER_NAV.map((column) => (
              <div key={column.heading}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-steel-200">{column.heading}</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-steel-400 transition-colors hover:text-brass-300">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-steel-800 pt-6 text-xs text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.legalName}. {COMMON_COPY.footer.rights}
          </p>
          <p>{COMMON_COPY.footer.builtWith}</p>
        </div>
      </Container>
    </footer>
  );
}
