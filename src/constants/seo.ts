export const SEO = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sidd333.github.io/nirbhay-elevators",
  siteName: "Nirbhay Elevators",
  defaultTitle: "Nirbhay Elevators | Passenger, Cargo & Industrial Lifts in India",
  defaultDescription:
    "Nirbhay Elevators designs, manufactures and services passenger, capsule, hospital, cargo and home lifts across India — backed by 20+ years of engineering and 24×7 AMC.",
  titleTemplate: "%s | Nirbhay Elevators",
  ogImagePath: "/opengraph-image",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  locale: "en_IN",
  htmlLang: "en-IN",
  twitterHandle: "@nirbhayelevators",
  themeColor: "#1d242e",
} as const;
