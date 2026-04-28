<div align="center">

# 🏨 Online Booking Platform

### A Modern, Responsive Travel & Stay Booking Experience built with Next.js 13+

[![Next.js](https://img.shields.io/badge/Next.js-13.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.12-EF476F?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[🚀 Live Demo](#) · [📖 Features](#-features) · [🛠️ Getting Started](#-getting-started) · [🎨 Theming](#-theming--dark-mode)

</div>

---

## ✨ Overview

Welcome to the **Online Booking Platform** — a sleek, high-performance landing page designed for travel, hotel, and experience bookings. Built with the latest web technologies, it features smooth animations, a fully responsive layout, dark mode support, and a modular component architecture that makes customization a breeze.

Whether you are showcasing stays, experiences, or car rentals, this project provides a polished foundation for any booking-related web application.

---

## 🎬 Preview

> 💡 **Tip:** Add your own screenshots to the `/public/screenshots/` folder and update the image paths below.

<div align="center">

|                                         🌞 Light Mode                                         |                                        🌙 Dark Mode                                         |
| :-------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| ![Light Mode Preview](https://via.placeholder.com/600x400/f5f5f5/333?text=Light+Mode+Preview) | ![Dark Mode Preview](https://via.placeholder.com/600x400/1a1a1a/fff?text=Dark+Mode+Preview) |

</div>

---

## 🚀 Features

### 🎨 UI / UX

- **Fully Responsive** — Optimized for mobile, tablet, and desktop breakpoints
- **Dark Mode Support** — Seamless light/dark theme switching with CSS variables
- **Smooth Animations** — Powered by Framer Motion for carousel transitions and micro-interactions
- **Touch Gestures** — Swipeable carousels via `react-swipeable`
- **Custom Theming** — Dynamic color system using CSS custom properties (Orange-Grey theme by default)
- **Poppins Typography** — Clean, modern font weights from 300 to 700

### 🧩 Sections & Components

The homepage is composed of **11 interactive sections**:

| Section                    | Description                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| 🦸 **Hero Section**        | Eye-catching hero with search form tabs (Stays, Experiences, Flights) and animated image grids |
| 🏙️ **Category Slider**     | Horizontally swipeable category cards with auto-responsive item counts                         |
| ⭐ **Our Features**        | Split-layout feature showcase with benefit badges                                              |
| 🏡 **Featured Places**     | Grid of stay listings with tab filters and card variants                                       |
| 🛠️ **How It Works**        | 3-step visual process guide with vector illustrations                                          |
| 💌 **Newsletter**          | Subscription section with email input and benefit list                                         |
| 🗺️ **Explore Nearby**      | Grid of location-based category boxes                                                          |
| ✍️ **Become an Author**    | Call-to-action section for hosts and content creators                                          |
| 🎬 **Video Gallery**       | YouTube-integrated video player with thumbnail grid                                            |
| 💬 **Testimonials**        | Animated client review carousel with avatar decorations                                        |
| 🔲 **Background Sections** | Decorative full-bleed background panels with rounded corners                                   |

### ⚡ Performance & DX

- **Next.js 13 App Router** — Server Components + Client Components architecture
- **TypeScript** — Strict type safety across all interfaces
- **Tailwind CSS** — Custom design system with CSS variable-based colors
- **Modular Components** — Reusable, composable section components
- **Optimized Images** — Next.js Image component with remote pattern support (Pexels, Unsplash, etc.)

---

## 🛠️ Tech Stack

| Technology                                                                                                             | Version | Purpose                         |
| :--------------------------------------------------------------------------------------------------------------------- | :-----: | :------------------------------ |
| ![Next.js](https://img.shields.io/badge/-Next.js-000?logo=next.js&logoColor=white&style=flat-square)                   |  13.4+  | React framework with App Router |
| ![React](https://img.shields.io/badge/-React-20232A?logo=react&logoColor=61DAFB&style=flat-square)                     |  18.2+  | UI library                      |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square)       |  5.0+   | Type safety                     |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white&style=flat-square) |  3.3+   | Utility-first CSS               |
| ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-EF476F?logo=framer&logoColor=white&style=flat-square)     | 10.12+  | Animations                      |
| ![Sass](https://img.shields.io/badge/-Sass-CC6699?logo=sass&logoColor=white&style=flat-square)                         |  1.62+  | SCSS stylesheets                |
| ![Heroicons](https://img.shields.io/badge/-Heroicons-8B5CF6?logo=heroicons&logoColor=white&style=flat-square)          |  2.0+   | Icon library                    |
| ![Headless UI](https://img.shields.io/badge/-Headless_UI-66E3FF?logo=headlessui&logoColor=black&style=flat-square)     |  1.7+   | Accessible UI primitives        |

### 🔌 Tailwind Plugins

- `@tailwindcss/typography` — Prose content styling
- `@tailwindcss/forms` — Form element normalization
- `@tailwindcss/aspect-ratio` — Aspect ratio utilities

---

## 📦 Installation

### Prerequisites

- **Node.js** 16.x or higher
- **npm** 8.x or higher (or **yarn** / **pnpm**)

### Clone & Install

```bash
# Clone the repository
git clone <repository-url>
cd online-booking-new

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at [`http://localhost:3000`](http://localhost:3000).

---

## 🎨 Theming & Dark Mode

The project uses a **CSS variable-based color system** defined in `src/styles/__theme_colors.scss`. Switch themes by changing the body class:

| Theme                 | Class Name              |
| --------------------- | ----------------------- |
| Orange-Grey (Default) | `theme-orange-grey`     |
| Purple-Blue Grey      | `theme-purple-blueGrey` |
| Cyan-Blue Grey        | `theme-cyan-blueGrey`   |

Dark mode is toggled automatically via the `dark` class on the `<html>` element, managed by the `useThemeMode` utility in `src/utils/useThemeMode.ts`.

---

## 📁 Project Structure

```
online-booking-new/
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js 13 App Router
│   │   ├── (client-components)/  # Client-side interactive components
│   │   │   └── (HeroSearchForm)/ # Hero search form with tabs
│   │   ├── (server-components)/  # Server-rendered sections
│   │   │   └── SectionHero.tsx
│   │   ├── ClientCommons.tsx   # Theme & client-side utilities
│   │   ├── globals.css         # Tailwind directives & global styles
│   │   ├── layout.tsx          # Root layout with fonts & header/footer
│   │   └── page.tsx            # 🏠 Homepage — main landing page
│   ├── components/            # Reusable UI section components
│   │   ├── SectionSliderNewCategories.tsx
│   │   ├── SectionOurFeatures.tsx
│   │   ├── SectionGridFeaturePlaces.tsx
│   │   ├── SectionHowItWork.tsx
│   │   ├── SectionSubscribe2.tsx
│   │   ├── SectionGridCategoryBox.tsx
│   │   ├── SectionBecomeAnAuthor.tsx
│   │   ├── SectionVideos.tsx
│   │   ├── SectionClientSay.tsx
│   │   ├── BgGlassmorphism.tsx
│   │   ├── BackgroundSection.tsx
│   │   └── ... (cards, buttons, sliders)
│   ├── shared/                # Shared atomic UI components
│   │   ├── Button.tsx
│   │   ├── ButtonPrimary.tsx
│   │   ├── Heading.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Logo.tsx
│   ├── data/                  # Type definitions & demo data
│   │   ├── types.ts           # Core TypeScript interfaces
│   │   ├── listings.ts        # Stay/experience listings
│   │   ├── authors.ts         # Author/user data
│   │   └── taxonomies.ts      # Category taxonomy data
│   ├── utils/                 # Utility functions & hooks
│   │   ├── animationVariants.ts
│   │   ├── useThemeMode.ts
│   │   └── twFocusClass.ts
│   ├── styles/                # SCSS stylesheets
│   │   ├── __theme_colors.scss
│   │   ├── __theme_custom.scss
│   │   ├── __theme_font.scss
│   │   ├── __dates_picker.scss
│   │   ├── _header.scss
│   │   └── index.scss
│   ├── fonts/                 # Line Awesome icon font
│   └── images/                # Static image assets
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies & scripts
```

---

## 🔧 Available Scripts

| Command         | Description                              |
| :-------------- | :--------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Create optimized production build        |
| `npm run start` | Start production server                  |
| `npm run lint`  | Run ESLint code linting                  |

---

## 🧩 Key Components Breakdown

### Page Sections (`src/app/page.tsx`)

1. **Hero Section** — Full-width hero with animated image grid and multi-tab search form
2. **Category Slider** — Framer Motion-powered horizontal slider with responsive item counts
3. **Our Features** — Split-screen layout showcasing platform benefits
4. **Featured Places** — Filterable grid of stay cards with "Show more" loading state
5. **How It Works** — 3-step illustrated process with SVG vector decorations
6. **Newsletter** — Email subscription with animated badge list
7. **Explore Nearby** — Grid of location-based category boxes
8. **Become an Author** — Host acquisition CTA with brand logo
9. **Video Gallery** — YouTube embed with thumbnail navigation
10. **Testimonials** — Swipeable client reviews with decorative avatar orbits
11. **Glassmorphism Background** — Frosted-glass blur effects for visual depth

### Shared UI Components (`src/shared/`)

- `Button` / `ButtonPrimary` / `ButtonCircle` — Customizable button variants
- `Heading` — Consistent section headings with optional description
- `Badge` — Color-coded label badges
- `Input` — Styled form inputs with size variants
- `Logo` — Brand logo component

---

## 🌐 Remote Image Support

The project is configured to load images from trusted external sources:

- **Pexels** — `images.pexels.com`
- **Unsplash** — `images.unsplash.com`
- **Airbnb CDN** — `a0.muscache.com`
- **Google Static** — `www.gstatic.com`

Defined in `next.config.js` via `images.remotePatterns`.

---

## 📝 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute.

---

<div align="center">

### 💙 Built with passion for modern web experiences

[![Made with React](https://img.shields.io/badge/Made_with-React-61DAFB?style=flat-square&logo=react&logoColor=black)]()
[![Powered by Next.js](https://img.shields.io/badge/Powered_by-Next.js-black?style=flat-square&logo=next.js&logoColor=white)]()
[![Styled with Tailwind](https://img.shields.io/badge/Styled_with-Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)]()

</div>
