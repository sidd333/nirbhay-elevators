import type { Project } from "@/types/project.types";

export const PROJECTS: readonly Project[] = [
  {
    slug: "lodha-azur-mumbai",
    title: "Lodha Azur Tower",
    location: "Worli, Mumbai",
    category: "residential",
    summary:
      "Eight high-speed MRL elevators serving a 42-storey luxury residential tower. Destination-control dispatching halved average wait time.",
    image: "/images/projects/lodha-azur.svg",
    imageAlt: "Glass facade of Lodha Azur residential tower at dusk",
    stats: [
      { label: "Lifts", value: "8" },
      { label: "Speed", value: "2.5 m/s" },
      { label: "Floors", value: "42" },
    ],
  },
  {
    slug: "kokilaben-hospital-wing",
    title: "Kokilaben Hospital — North Wing",
    location: "Andheri, Mumbai",
    category: "hospital",
    summary:
      "Four stretcher-class hospital lifts with anti-bacterial cabins, priority-call hardware, and 24×7 service SLA.",
    image: "/images/projects/kokilaben.svg",
    imageAlt: "Hospital atrium with stainless-steel stretcher elevator doors",
    stats: [
      { label: "Lifts", value: "4" },
      { label: "Capacity", value: "2500 kg" },
      { label: "Uptime SLA", value: "99.9%" },
    ],
  },
  {
    slug: "phoenix-marketcity-pune",
    title: "Phoenix Marketcity",
    location: "Viman Nagar, Pune",
    category: "commercial",
    summary:
      "Six panoramic capsule elevators across the central atrium, plus twelve passenger lifts in retail wings.",
    image: "/images/projects/phoenix.svg",
    imageAlt: "Shopping mall atrium with panoramic capsule elevators",
    stats: [
      { label: "Capsules", value: "6" },
      { label: "Passenger lifts", value: "12" },
      { label: "Annual footfall", value: "11 M" },
    ],
  },
  {
    slug: "tata-steel-jamshedpur",
    title: "Tata Steel — Long Products Mill",
    location: "Jamshedpur, Jharkhand",
    category: "industrial",
    summary:
      "Heavy-duty 5-tonne cargo lifts with checker-plate platforms and bi-parting vertical doors for billet transport.",
    image: "/images/projects/tata-steel.svg",
    imageAlt: "Industrial cargo elevator on a steel-mill mezzanine",
    stats: [
      { label: "Cargo lifts", value: "3" },
      { label: "Capacity", value: "5000 kg" },
      { label: "Duty cycle", value: "240/hr" },
    ],
  },
  {
    slug: "embassy-tech-village",
    title: "Embassy TechVillage — Block 4",
    location: "Outer Ring Road, Bengaluru",
    category: "commercial",
    summary:
      "Twelve MRL elevators with regenerative drives across two office blocks. Estimated 360 MWh saved per year.",
    image: "/images/projects/embassy.svg",
    imageAlt: "Corporate office lobby with sleek MRL elevator doors",
    stats: [
      { label: "Lifts", value: "12" },
      { label: "Energy saved", value: "360 MWh/yr" },
      { label: "Floors", value: "28" },
    ],
  },
  {
    slug: "godrej-emerald-thane",
    title: "Godrej Emerald Villas",
    location: "Ghodbunder Road, Thane",
    category: "residential",
    summary:
      "Twenty-four home lifts installed across a duplex-villa community — low-pit, retrofit-friendly, with veneer interiors.",
    image: "/images/projects/godrej.svg",
    imageAlt: "Premium home lift inside a duplex foyer",
    stats: [
      { label: "Home lifts", value: "24" },
      { label: "Pit depth", value: "50 mm" },
      { label: "Capacity", value: "320 kg" },
    ],
  },
];
