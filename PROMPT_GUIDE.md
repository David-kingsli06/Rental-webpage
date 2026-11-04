# The Master Prompting Blueprint for Antigravity & LLM Coding Agents

If you had **no reference image or video**, here is the exact master prompt you could have provided to get this precise supercar rental hero section on the very first try.

---

## 📋 The Copy-Paste Master Prompt

```markdown
Create an ultra-luxurious, futuristic supercar rental Hero Section for a brand named "AURA LUXE". 
Strictly use Next.js (App Router), TypeScript, and Tailwind CSS only — no third-party UI component libraries or animation packages.

### 1. Theme, Mood & Color Palette
- **Cyberpunk / Stealth Dark Mode**: Deep obsidian background (#060709) with ambient blur orbs in Liquid Gold / Amber (#F59E0B / #FBBF24).
- **Glassmorphism**: Translucent floating cards with backdrop blur (`backdrop-blur-md` / `backdrop-blur-xl`), fine borders (`border-white/10`), and neon/gold accent glow effects.
- **Typography**: Clean, bold sans-serif with monospace accents for telemetry stats and serial numbers.

### 2. Layout Structure ("The Stealth Cockpit")
Build a single-viewport responsive hero section divided into:
1. **Top Floating Navigation Pill**:
   - Brand logo: `// AURA LUXE` (Private Fleet Group) with gold badge glow.
   - Centered nav links: Fleet, Experiences, Concierge, Locations.
   - Right cluster: Live unit availability pill ("12 Units On-Standby" with pulsing green beacon) + Gold "Reserve Key" CTA button.

2. **Left Telemetry Cockpit (5 cols)**:
   - Dynamic asset badge and serial reference (e.g. `SYS.REF: 01 / 04`).
   - High-impact headline: "VELOCITY REDEFINED." with liquid gold gradient text.
   - Tagline tailored to the selected car and private delivery (tarmac/estate/yacht).
   - Category filter chips: "All", "Track Weapon", "Hypercar Hybrid", "Open-Top Exotic".
   - Live Telemetry HUD Grid (4 spec tiles that update reactively when a vehicle is switched):
     - 0-60 MPH time
     - Top Speed
     - Horsepower
     - Gearbox / Transmission
   - Feature pills checklist (e.g. DRS Active Aero, Carbon Monofuselage, etc.).

3. **Center-Right Supercar Stage & Switcher (7 cols)**:
   - Large stage card displaying the active car photo with a ground ambient reflection glow.
   - Floating Prev and Next chevron buttons.
   - Top badges indicating car category and engine type.
   - Floating bottom text displaying car model name and daily rate.
   - Multi-car selector thumbnail row at the bottom showing:
     1. Porsche 911 GT3 RS ($1,450/day)
     2. Lamborghini Revuelto V12 ($2,850/day)
     3. McLaren 720S Spider ($1,750/day)
     4. Ferrari SF90 Stradale ($2,600/day)
   - Clicking any car switches the image, telemetry HUD, pricing, and features synchronously.

4. **Docked Bottom Reservation Console**:
   - Integrated floating dock with 4 modules:
     - 01: Pick-Up Concierge dropdown (Beverly Hills Private LAX, Miami Beach Opa-Locka, Monaco Port Hercule, Dubai Al Maktoum).
     - 02 & 03: Pick-up and Return date inputs.
     - 04: Real-time dynamic calculation of total price (Daily Rate × Days selected) with "Full Insurance Included" badge.
     - 05: Primary Gold CTA: "Confirm Priority Hold" with click confirmation state ("Concierge Dispatched!").

### 3. Technical Constraints
- Everything must be fully functional and interactive in client-side React (`use client`).
- Must pass `npm run build` and `tsc` with zero errors.
- Image domains must be properly configured in `next.config.ts`.
```

---

## 🧠 Why This Prompt Structure Works (The Framework)

When prompting an AI to generate production-quality frontend layouts from scratch without visual assets, use the **C.A.L.T. Framework**:

| Section | Purpose | Example from this Project |
| :--- | :--- | :--- |
| **C - Constraints** | Eliminates unwanted dependencies upfront. | *"Next.js, TypeScript, Tailwind CSS only — no third-party libraries"* |
| **A - Aesthetic & Mood** | Defines exact color hex codes, surface treatments, and typography. | *"Cyberpunk dark mode, #060709 obsidian, liquid gold #F59E0B glow, glassmorphism"* |
| **L - Layout & Spatial Grid** | Breaks down screen zones so the AI does not guess placement. | *"Top floating pill, Left 5-col HUD, Right 7-col stage, Bottom reservation dock"* |
| **T - Telemetry & Interactivity** | Specifies what data exists and how state changes when clicking. | *"Switching cars reactively updates 0-60, HP, top speed, and total calculated price"* |
