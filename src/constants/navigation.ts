import type { FooterColumn, NavLink } from "@/types/navigation.types";

export const MAIN_NAV: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV: readonly FooterColumn[] = [
  {
    heading: "Products",
    links: [
      { label: "Passenger lifts", href: "/products/passenger" },
      { label: "Capsule lifts", href: "/products/capsule" },
      { label: "Hospital lifts", href: "/products/hospital" },
      { label: "Cargo lifts", href: "/products/cargo" },
      { label: "Home lifts", href: "/products/home" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Installation", href: "/services#installation" },
      { label: "Annual maintenance", href: "/services#amc" },
      { label: "Modernization", href: "/services#modernization" },
      { label: "24×7 service", href: "/services#maintenance" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
