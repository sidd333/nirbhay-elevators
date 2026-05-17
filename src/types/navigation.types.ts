import type { Route } from "next";

export interface NavLink {
  readonly label: string;
  readonly href: Route;
}

export interface FooterColumn {
  readonly heading: string;
  readonly links: readonly NavLink[];
}
