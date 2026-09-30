# Design System Master File — BoiBazar (Education & Student Learning Theme)

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** BoiBazar
**Category:** Education / Student Classifieds & Peer Learning
**Theme Inspiration:** Khan Academy, Duolingo, Notion for Students (Friendly, Playful, Approachable, Clean)

---

## Global Rules

### Visual Tone & Aesthetic
- **Vibe:** Warm, welcoming, encouraging, student-first, approachable (never cold, corporate, or cluttered).
- **Shapes:** Chunky rounded corners (`16px–24px` / `rounded-2xl` & `rounded-3xl`), pill badges (`rounded-full`), tactile buttons with subtle 3D drop depth.
- **Lighting:** Warm light backgrounds only (no dark mode), soft organic shadows, clean borders.
- **Visual Elements:** Friendly SVG illustrations (open books, cheerful pencil with eraser, celebration stars), vibrant CSS book covers.

### Color Palette

| Role | Hex | Tailwind / CSS Variable | Description |
|------|-----|-------------------------|-------------|
| **Primary (Deep Indigo / Teal)** | `#4338CA` / `#312E81` | `--color-primary` | Main brand color, trustworthy & academic |
| **Primary Light Tint** | `#EEF2FF` / `#E0E7FF` | `--color-primary-light` | Section backgrounds, badges, icon containers |
| **Accent / CTA (Energetic Amber / Orange)** | `#EA580C` / `#F97316` | `--color-accent` | High-conversion action buttons & highlight badges |
| **Secondary Accent (Student Green)** | `#16A34A` / `#22C55E` | `--color-secondary` | "Sell a book", verified badges, pricing |
| **Background Neutral** | `#FAFBFD` / `#FFFFFF` | `--color-background` | Crisp, warm, spacious reading background |
| **Card Surface** | `#FFFFFF` | `--color-card` | Clean white cards with gentle borders & soft shadow |
| **Text (Headings & Body)** | `#0F172A` / `#1E1B4B` | `--color-foreground` | High-contrast ($\ge 7:1$) deep slate-navy |
| **Muted Text** | `#475569` / `#64748B` | `--color-muted-foreground` | Subtitles, helper text, captions |
| **Border** | `#E2E8F0` / `#C7D2FE` | `--color-border` | Soft structural divider lines |

### Typography

- **Heading Font (English):** `Outfit` / `Plus Jakarta Sans` (Round, bold, friendly, modern)
- **Bangla Font (বাংলা):** `Noto Sans Bengali` (Clean, natural Bengali typography with excellent readability on all screen densities)
- **Weight Hierarchy:** `800` (Hero headlines), `700` (Section titles & CTAs), `600` (Card titles & labels), `400/500` (Body & descriptions)

### Button & Card Specs

- **Primary Hero Button ("Find a book"):** Deep Indigo (`#4338CA`) or Amber-Orange (`#EA580C`), chunky padding (`px-7 py-4`), `rounded-2xl`, tactile bottom border (`border-b-4 border-indigo-900` or `border-orange-700`) for friendly Duolingo-style click feel.
- **Secondary Hero Button ("Sell your old book"):** Clean white with emerald border (`border-2 border-emerald-600`), text emerald-700, `rounded-2xl`, `border-b-4 border-emerald-700`.
- **Search Bar:** Prominent floating rounded pill/capsule container with subtle shadow, category selector, district selector, and clear search input.

### Anti-Patterns to Avoid
- ❌ No corporate dark/gray themes
- ❌ No AI purple/pink neon gradient overlays
- ❌ No rigid sharp corners (avoid `rounded-none` or `rounded-xs`)
- ❌ No emojis as functional icons (use crisp Lucide SVGs)
- ❌ No heavy continuous animations that distract or drain mobile battery
