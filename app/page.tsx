"use client";

import { useState } from "react";
import Image from "next/image";
import { FLEET_DATA } from "./data";

const CATEGORIES = ["All", "Track Weapon", "Hypercar Hybrid", "Open-Top Exotic"] as const;

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(2);
  const [location, setLocation] = useState("Beverly Hills, CA (LAX Private)");
  const [pickDate, setPickDate] = useState("2026-11-10");
  const [dropDate, setDropDate] = useState("2026-11-13");
  const [booked, setBooked] = useState(false);

  // Filtered fleet or full fleet
  const filteredFleet = selectedCategory === "All"
    ? FLEET_DATA
    : FLEET_DATA.filter((c) => c.category === selectedCategory);

  // Safe active car index
  const safeIndex = currentIndex >= filteredFleet.length ? 0 : currentIndex;
  const car = filteredFleet[safeIndex] || FLEET_DATA[0];

  const prev = () => setCurrentIndex((i) => (i - 1 + filteredFleet.length) % filteredFleet.length);
  const next = () => setCurrentIndex((i) => (i + 1) % filteredFleet.length);

  const days = (() => {
    try {
      const d = Math.ceil(
        (new Date(dropDate).getTime() - new Date(pickDate).getTime()) / 86_400_000
      );
      return d > 0 ? d : 1;
    } catch {
      return 3;
    }
  })();

  const total = car.dailyPrice * days;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-[#FAF7F2] text-[#1E1B18] font-sans-clean">

      {/* ── TOP HEADER / NAVBAR ───────────────────────────────── */}
      <header className="flex-shrink-0 flex items-center justify-between px-8 lg:px-12 h-16 border-b border-[#E8DFC0]/70 bg-[#FAF7F2]/90 backdrop-blur-md z-30">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#1E1B18] text-[#FAF7F2] flex items-center justify-center font-black tracking-widest text-xs shadow-sm">
            AL
          </div>
          <div className="leading-tight">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1E1B18] block">
              Aura Luxe
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#938A82]">
              Supercar Reserve
            </span>
          </div>
        </div>

        {/* Central Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Rental", "Fleet", "Experiences", "Concierge"].map((link) => (
            <button
              key={link}
              className={`text-xs uppercase tracking-[0.18em] font-medium transition-all py-1 ${
                link === "Rental"
                  ? "text-[#C1572B] font-semibold nav-active"
                  : "text-[#756C64] hover:text-[#1E1B18]"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Right Status & Account */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#756C64] bg-white px-3.5 py-1.5 rounded-full border border-[#E8DFC0] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">{FLEET_DATA.length} Verified Vehicles</span>
          </div>
          <button className="w-8 h-8 rounded-full border border-[#1E1B18]/30 flex items-center justify-center text-[#1E1B18] hover:bg-[#1E1B18] hover:text-[#FAF7F2] transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── MAIN CONTENT WORKSPACE ────────────────────────────── */}
      <main className="flex-1 min-h-0 p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* ── LEFT PANEL (Natural Top-Down Hierarchy) ──────────────── */}
        <div className="lg:col-span-5 flex flex-col justify-between py-4 px-3 lg:px-6 overflow-hidden">
          
          {/* TOP: Bold Main Statement & Value Proposition */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C1572B]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C1572B] font-bold">
                Exclusive Supercar Reserve
              </span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.04] font-bold italic text-[#1E1B18] mb-4">
              Drive Beyond<br />Ordinary.
            </h1>

            <p className="text-xs sm:text-sm text-[#756C64] leading-relaxed max-w-md mb-8">
              Curated private supercar fleet delivered directly to your runway, private estate, or sanctuary with 24/7 bespoke concierge care.
            </p>

            {/* Category Filter Pills (Actionable & Distinct) */}
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#938A82] mb-3">
                Fleet Category
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => {
                  const active = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCurrentIndex(0);
                      }}
                      className={`text-xs font-medium px-4 py-2 rounded-full transition-all cursor-pointer ${
                        active
                          ? "bg-[#1E1B18] text-[#FAF7F2] shadow-sm font-semibold"
                          : "bg-white border border-[#E8DFC0] text-[#756C64] hover:border-[#1E1B18]/50 hover:text-[#1E1B18]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* BOTTOM: Minimal Connected 3-Step Milestone Pipeline */}
          <div className="bg-white/80 border border-[#E8DFC0] rounded-2xl p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#938A82]">
                Booking Journey
              </span>
              <span className="text-[10px] font-mono text-[#C1572B] font-semibold">
                Step 0{activeStep} / 03
              </span>
            </div>

            {/* Connected Step Track */}
            <div className="relative flex items-center justify-between">
              {/* Connecting line */}
              <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-[1px] bg-[#E8DFC0] z-0" />

              {[
                { step: 1, label: "01 Location", detail: "Beverly Hills" },
                { step: 2, label: "02 Select Car", detail: car.name.split(" ")[0] },
                { step: 3, label: "03 Delivery", detail: "White-Glove" },
              ].map((item) => {
                const isActive = activeStep === item.step;
                const isPassed = activeStep > item.step;
                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveStep(item.step as 1 | 2 | 3)}
                    className="relative z-10 flex flex-col items-center group cursor-pointer"
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all shadow-xs ${
                        isActive
                          ? "bg-[#C1572B] text-white scale-110 ring-4 ring-[#C1572B]/15"
                          : isPassed
                          ? "bg-[#1E1B18] text-white"
                          : "bg-white border border-[#E8DFC0] text-[#938A82] group-hover:border-[#1E1B18]"
                      }`}
                    >
                      {isPassed ? "✓" : item.step}
                    </div>
                    <span
                      className={`text-[10px] font-semibold mt-1.5 transition-colors ${
                        isActive ? "text-[#1E1B18]" : "text-[#938A82]"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="text-[9px] text-[#A0948A] hidden sm:block">
                      {item.detail}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ── RIGHT PANEL (Curved Showcase with Floating Spec Card) ─ */}
        <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-lg border border-[#E8DFC0] bg-[#141210] flex flex-col justify-between">
          
          {/* Main Car Image with Reveal Animation */}
          <div key={car.id} className="img-reveal absolute inset-0">
            <Image
              src={car.imageUrl}
              alt={car.name}
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>

          {/* Subtle Dynamic Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/35 pointer-events-none" />

          {/* Top Overlays: Badge & Interactive Pagination */}
          <div className="relative z-20 p-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full border border-white/20">
                {car.badge}
              </span>
              <span className="bg-white/10 backdrop-blur-md text-white/80 text-[10px] tracking-wide px-2.5 py-1.5 rounded-full border border-white/10 hidden sm:inline-block">
                {car.specs.engine}
              </span>
            </div>

            {/* Counter and Switcher Arrows */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-white/80 tracking-widest bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                {pad(safeIndex + 1)} / {pad(filteredFleet.length)}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prev}
                  className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition active:scale-95"
                  aria-label="Previous Vehicle"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition active:scale-95"
                  aria-label="Next Vehicle"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Floating Signature Spec Bar (Inspired by Reference Design) */}
          <div className="relative z-20 p-5 lg:p-6">
            
            {/* Car Name & Tagline */}
            <div className="mb-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C1572B] font-bold">
                {car.category}
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl italic font-bold text-white leading-tight">
                {car.name}
              </h2>
            </div>

            {/* Floating Integrated Specs Dock */}
            <div className="bg-[#181512]/90 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-xl">
              
              {/* Stat 1: 0-60 */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/90">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-white/50">0 — 60 MPH</p>
                  <p className="text-sm font-bold text-white">{car.specs.acceleration}</p>
                </div>
              </div>

              {/* Stat 2: Top Speed */}
              <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/90">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-white/50">Top Speed</p>
                  <p className="text-sm font-bold text-white">{car.specs.topSpeed}</p>
                </div>
              </div>

              {/* Stat 3: Power */}
              <div className="flex items-center gap-3 border-l border-white/10 pl-4 hidden sm:flex">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/90">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-white/50">Power</p>
                  <p className="text-sm font-bold text-white">{car.specs.horsepower}</p>
                </div>
              </div>

              {/* Rate & Quick Reserve Anchor */}
              <div className="border-l border-white/10 pl-4 flex items-center gap-4 ml-auto sm:ml-0">
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-white/50">Daily Rate</p>
                  <p className="text-base font-bold text-[#F39C12] leading-none">
                    ${car.dailyPrice.toLocaleString()}
                    <span className="text-[10px] text-white/50 font-normal"> / day</span>
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>

      {/* ── CLEAN BOTTOM BOOKING BAR ──────────────────────────── */}
      <footer className="flex-shrink-0 bg-white/80 backdrop-blur-md border-t border-[#E8DFC0] px-6 lg:px-12 py-3 z-30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Reservation Selectors */}
          <div className="flex flex-wrap items-center gap-6 text-xs w-full sm:w-auto">
            
            {/* Location */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C1572B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <span className="block text-[9px] uppercase tracking-wider font-semibold text-[#938A82]">
                  Location
                </span>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent font-semibold text-[#1E1B18] focus:outline-none cursor-pointer"
                >
                  <option value="Beverly Hills, CA (LAX Private)">Beverly Hills (LAX Private)</option>
                  <option value="Miami Beach, FL (Opa-Locka Exec)">Miami Beach (Executive)</option>
                  <option value="Monaco, MC (Helipad Concierge)">Monaco (Helipad)</option>
                  <option value="Dubai, UAE (Al Maktoum VIP)">Dubai (VIP Terminal)</option>
                </select>
              </div>
            </div>

            {/* Collect Date */}
            <div className="flex items-center gap-2 border-l border-[#E8DFC0] pl-6">
              <svg className="w-4 h-4 text-[#C1572B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <span className="block text-[9px] uppercase tracking-wider font-semibold text-[#938A82]">
                  Collect
                </span>
                <input
                  type="date"
                  value={pickDate}
                  onChange={(e) => setPickDate(e.target.value)}
                  className="bg-transparent font-semibold text-[#1E1B18] focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="flex items-center gap-2 border-l border-[#E8DFC0] pl-6">
              <svg className="w-4 h-4 text-[#C1572B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <span className="block text-[9px] uppercase tracking-wider font-semibold text-[#938A82]">
                  Return ({days}d)
                </span>
                <input
                  type="date"
                  value={dropDate}
                  onChange={(e) => setDropDate(e.target.value)}
                  className="bg-transparent font-semibold text-[#1E1B18] focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Total */}
            <div className="border-l border-[#E8DFC0] pl-6 hidden md:block">
              <span className="block text-[9px] uppercase tracking-wider font-semibold text-[#938A82]">
                Est. Total
              </span>
              <span className="font-bold text-[#C1572B] text-sm">
                ${total.toLocaleString()}
              </span>
            </div>

          </div>

          {/* Confirm Button */}
          <div className="w-full sm:w-auto">
            <button
              onClick={() => {
                setBooked(true);
                setTimeout(() => setBooked(false), 3500);
              }}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm ${
                booked
                  ? "bg-emerald-700 text-white"
                  : "bg-[#1E1B18] text-[#FAF7F2] hover:bg-[#C1572B]"
              }`}
            >
              {booked ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Reservation Confirmed
                </>
              ) : (
                <>
                  Reserve Key
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}
