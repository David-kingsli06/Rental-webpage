export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  category: "Track Weapon" | "Hypercar Hybrid" | "Open-Top Exotic" | "V8 Twin-Turbo";
  dailyPrice: number;
  specs: {
    acceleration: string; // e.g. "2.7s"
    topSpeed: string;      // e.g. "296 km/h"
    horsepower: string;    // e.g. "518 hp"
    transmission: string;  // e.g. "7-Spd PDK"
    engine: string;        // e.g. "4.0L Boxer"
  };
  features: string[];
  imageUrl: string;
}

export const FLEET_DATA: Vehicle[] = [
  {
    id: "porsche-911-gt3rs",
    name: "Porsche 911 GT3 RS",
    tagline: "Pure Motorsport DNA engineered for absolute track supremacy.",
    badge: "Most Requested",
    category: "Track Weapon",
    dailyPrice: 1450,
    specs: {
      acceleration: "2.9s",
      topSpeed: "296 km/h",
      horsepower: "518 HP",
      transmission: "7-Speed PDK",
      engine: "4.0L Naturally Aspirated",
    },
    features: ["DRS Active Aero", "Carbon Bucket Seats", "Sport Chrono Telemetry"],
    imageUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "lamborghini-revuelto",
    name: "Lamborghini Revuelto V12",
    tagline: "The first High Performance Electrified V12 flagship in history.",
    badge: "Flagship Arrival",
    category: "Hypercar Hybrid",
    dailyPrice: 2850,
    specs: {
      acceleration: "2.5s",
      topSpeed: "350 km/h",
      horsepower: "1,001 HP",
      transmission: "8-Speed Dual Clutch",
      engine: "6.5L V12 + 3 Tri-Motors",
    },
    features: ["Carbon Monofuselage", "All-Wheel Vectoring", "Stealth EV Mode"],
    imageUrl: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "mclaren-720s",
    name: "McLaren 720S Spider",
    tagline: "Aerodynamic perfection meets exhilarating open-air performance.",
    badge: "Supercar Icon",
    category: "Open-Top Exotic",
    dailyPrice: 1750,
    specs: {
      acceleration: "2.8s",
      topSpeed: "341 km/h",
      horsepower: "710 HP",
      transmission: "7-Speed Seamless Shift",
      engine: "4.0L Twin-Turbo V8",
    },
    features: ["11-Second Retractable Hardtop", "Proactive Chassis II", "Dihedral Doors"],
    imageUrl: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "ferrari-sf90",
    name: "Ferrari SF90 Stradale",
    tagline: "Extreme hypercar capabilities with revolutionary plug-in hybrid architecture.",
    badge: "Scuderia Heritage",
    category: "Hypercar Hybrid",
    dailyPrice: 2600,
    specs: {
      acceleration: "2.5s",
      topSpeed: "340 km/h",
      horsepower: "986 HP",
      transmission: "8-Speed F1 Dual-Clutch",
      engine: "4.0L Twin-Turbo + 3 Motors",
    },
    features: ["eManettino Modes", "e4WD System", "Assetto Fiorano Trim"],
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85",
  },
];
