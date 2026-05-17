import type { Service } from "@/types/service.types";

export const SERVICES: readonly Service[] = [
  {
    slug: "installation",
    name: "New Installation",
    tagline: "Turnkey elevator delivery — from civil drawings to commissioning.",
    description:
      "Our project teams partner with architects and consultants from the structural-drawing stage. We handle shaft assessment, hoist setup, electrical, finish, certification and handover.",
    bullets: [
      "Site survey and shaft assessment",
      "Hoistway and pit civil drawings",
      "Cabin and lobby finish customization",
      "Inspector liaison and statutory clearance",
    ],
    icon: "wrench",
  },
  {
    slug: "maintenance",
    name: "24×7 Service Helpline",
    tagline: "Trained engineers across 60+ Indian cities, on call round the clock.",
    description:
      "Dedicated service vans, original spares, and remote diagnostics. Average response time inside our service zones: 90 minutes.",
    bullets: [
      "90-minute response inside service zones",
      "Pan-India spares depot in Pune",
      "IoT-based remote diagnostics",
      "Trapped-passenger priority dispatch",
    ],
    icon: "shield",
  },
  {
    slug: "modernization",
    name: "Modernization & Retrofits",
    tagline: "Upgrade old elevators with new drives, controllers and cabins.",
    description:
      "Replace 1990s-era relay panels with VVVF inverters, add destination-control dispatching, or retrofit a regenerative drive. We work with any OEM make.",
    bullets: [
      "VVVF inverter retrofit on any OEM",
      "Cabin and lobby aesthetic upgrades",
      "Regenerative-drive energy retrofits",
      "Door operator and safety-edge upgrades",
    ],
    icon: "refresh",
  },
  {
    slug: "amc",
    name: "Annual Maintenance Contracts",
    tagline: "Comprehensive or non-comprehensive AMCs with monthly checklists.",
    description:
      "Choose semi-annual visits, monthly visits, or a fully comprehensive contract that includes wear parts. Every visit logs to a checklist your facility team can audit.",
    bullets: [
      "Monthly or quarterly preventive visits",
      "Wear-parts inclusion (comprehensive plan)",
      "Digital service log + WhatsApp updates",
      "Annual safety audit included",
    ],
    icon: "calendar",
  },
];

