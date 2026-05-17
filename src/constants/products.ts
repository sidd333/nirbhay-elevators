import type { Product, ProductSlug } from "@/types/product.types";

export const PRODUCTS: readonly Product[] = [
  {
    slug: "passenger",
    name: "Passenger Elevators",
    shortName: "Passenger",
    category: "commercial",
    tagline: "Smooth, silent and efficient vertical transport for every building.",
    description:
      "Engineered for apartments, offices and retail towers. Variable-frequency drives, micro-leveling, and energy-saving standby keep ride quality high and bills low.",
    heroImage: "/images/products/passenger.svg",
    heroImageAlt: "Brushed-steel passenger elevator cabin interior",
    applications: ["Apartments", "Offices", "Retail", "Mixed-use towers"],
    specs: [
      { label: "Capacity", value: "4 – 26 persons (272 – 1768 kg)" },
      { label: "Speed", value: "1.0 / 1.5 / 1.75 m/s" },
      { label: "Travel height", value: "Up to 75 m" },
      { label: "Drive", value: "Gearless MRL VVVF" },
      { label: "Door type", value: "Center or side opening, 700 – 1100 mm" },
    ],
    features: [
      { title: "Micro-leveling", description: "±3 mm floor accuracy for safer boarding." },
      { title: "Energy-saving standby", description: "Cabin lights and ventilation power down after idle minutes." },
      { title: "Voice + Braille hardware", description: "Compliant with Indian accessibility codes (HARMONIZED Guidelines 2021)." },
    ],
    seoTitle: "Passenger Elevators",
    seoDescription:
      "Gearless MRL passenger elevators for apartments, offices and retail — 4 to 26 persons, up to 1.75 m/s, with micro-leveling and energy-saving standby.",
  },
  {
    slug: "capsule",
    name: "Capsule Elevators",
    shortName: "Capsule",
    category: "specialty",
    tagline: "Panoramic glass cabins that turn every floor into a moment.",
    description:
      "Curved-glass capsules with stainless steel or brass trim. Built for atriums, malls and luxury hotels where the lift is part of the architecture.",
    heroImage: "/images/products/capsule.svg",
    heroImageAlt: "Glass capsule elevator inside a hotel atrium",
    applications: ["Hotels", "Malls", "Atriums", "Showrooms"],
    specs: [
      { label: "Capacity", value: "6 – 13 persons (408 – 884 kg)" },
      { label: "Speed", value: "1.0 / 1.5 m/s" },
      { label: "Glass", value: "Tempered laminated 10 + 10 mm" },
      { label: "Finishes", value: "SS 304 hairline · brass · powder-coat" },
    ],
    features: [],
    seoTitle: "Capsule Elevators",
    seoDescription:
      "Panoramic glass capsule elevators for hotels, malls and atriums — tempered laminated glass, SS 304 or brass trim, 6 to 13 person cabins.",
  },
  {
    slug: "hospital",
    name: "Hospital Elevators",
    shortName: "Hospital",
    category: "specialty",
    tagline: "Stretcher-class lifts engineered for critical-care reliability.",
    description:
      "Wide-clear-opening cabins with anti-bacterial finishes, ultra-smooth start/stop, and priority-call hardware. Designed to IS 14665 and EN 81-20.",
    heroImage: "/images/products/hospital.svg",
    heroImageAlt: "Stainless steel hospital stretcher elevator interior",
    applications: ["Hospitals", "Trauma centers", "Diagnostic labs", "Senior living"],
    specs: [
      { label: "Capacity", value: "1600 / 2000 / 2500 kg" },
      { label: "Cabin depth", value: "Up to 2400 mm (stretcher-class)" },
      { label: "Door opening", value: "1100 / 1300 mm telescopic" },
      { label: "Finish", value: "Anti-bacterial powder-coat / SS 304" },
    ],
    features: [],
    seoTitle: "Hospital Elevators",
    seoDescription:
      "Stretcher-class hospital lifts with anti-bacterial cabins, wide telescopic doors, and IS 14665 / EN 81-20 compliance.",
  },
  {
    slug: "cargo",
    name: "Cargo & Freight Elevators",
    shortName: "Cargo",
    category: "industrial",
    tagline: "Heavy-duty lifts that move pallets, machinery and inventory.",
    description:
      "Reinforced platforms with checker-plate flooring and industrial-grade VVVF drives. Available with collapsible gates, vertical bi-parting doors, or full automatic doors.",
    heroImage: "/images/products/cargo.svg",
    heroImageAlt: "Industrial freight elevator with checker-plate flooring",
    applications: ["Warehouses", "Factories", "Cold storage", "Logistics hubs"],
    specs: [
      { label: "Capacity", value: "500 – 5000 kg" },
      { label: "Speed", value: "0.3 / 0.5 / 1.0 m/s" },
      { label: "Door type", value: "Collapsible · vertical bi-parting · automatic" },
      { label: "Flooring", value: "Checker-plate / anti-skid epoxy" },
    ],
    features: [],
    seoTitle: "Cargo & Freight Elevators",
    seoDescription:
      "Industrial cargo lifts from 500 kg to 5 tonnes — checker-plate platforms, VVVF drives, and door options for warehouses, factories and cold storage.",
  },
  {
    slug: "hydraulic",
    name: "Hydraulic Elevators",
    shortName: "Hydraulic",
    category: "specialty",
    tagline: "Compact lifts for low-rise buildings with no machine room.",
    description:
      "Submerged hydraulic power packs make these ideal for villas and 2 – 5 storey buildings. Whisper-quiet operation and a flat-bottom pit.",
    heroImage: "/images/products/hydraulic.svg",
    heroImageAlt: "Hydraulic villa elevator with wood-finish cabin",
    applications: ["Villas", "Boutiques", "Heritage retrofits", "Showrooms"],
    specs: [
      { label: "Capacity", value: "320 – 1600 kg" },
      { label: "Travel height", value: "Up to 18 m" },
      { label: "Speed", value: "0.3 / 0.4 / 0.63 m/s" },
      { label: "Pit depth", value: "From 200 mm (low-pit)" },
    ],
    features: [],
    seoTitle: "Hydraulic Elevators",
    seoDescription:
      "Compact hydraulic lifts for villas and low-rise buildings — no machine room, low-pit, whisper-quiet operation.",
  },
  {
    slug: "mrl",
    name: "Machine-Room-Less (MRL) Elevators",
    shortName: "MRL",
    category: "commercial",
    tagline: "Gearless drives that recover floor space and energy.",
    description:
      "Permanent-magnet gearless machines mounted in the shaft — no machine room overhead. Regenerative drives feed energy back into your building.",
    heroImage: "/images/products/mrl.svg",
    heroImageAlt: "Machine-room-less elevator hoistway with gearless motor",
    applications: ["Apartments", "Offices", "Boutique hotels", "Schools"],
    specs: [
      { label: "Capacity", value: "320 – 1600 kg" },
      { label: "Speed", value: "1.0 / 1.5 / 1.75 / 2.0 m/s" },
      { label: "Drive", value: "PM gearless · regenerative inverter" },
      { label: "Energy saving", value: "Up to 35% vs geared traction" },
    ],
    features: [],
    seoTitle: "MRL Elevators",
    seoDescription:
      "Machine-room-less elevators with permanent-magnet gearless drives and regenerative inverters — up to 35% energy savings.",
  },
  {
    slug: "home",
    name: "Home Lifts",
    shortName: "Home",
    category: "residential",
    tagline: "Boutique lifts for private residences and small staircases.",
    description:
      "Self-supporting screw-drive or hydraulic home lifts. Fit into an existing stairwell with minimal civil work. Premium veneer, glass, and brushed-metal interiors.",
    heroImage: "/images/products/home.svg",
    heroImageAlt: "Glass-and-veneer home lift in a residential foyer",
    applications: ["Bungalows", "Duplexes", "Villas", "Retrofits"],
    specs: [
      { label: "Capacity", value: "240 – 400 kg (3 – 5 persons)" },
      { label: "Travel height", value: "Up to 14 m (6 stops)" },
      { label: "Drive", value: "Screw · hydraulic · gearless" },
      { label: "Pit", value: "From 50 mm" },
    ],
    features: [],
    seoTitle: "Home Lifts",
    seoDescription:
      "Boutique home lifts for villas and duplexes — low-pit, retrofit-friendly, with premium veneer and glass interiors.",
  },
];

export const PRODUCT_SLUGS: readonly ProductSlug[] = PRODUCTS.map((p) => p.slug);

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
