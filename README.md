# CasaNova Real Estate — Premium PropTech Editorial Platform

CasaNova Real Estate is a sophisticated, light editorial luxury proptech platform built with Next.js 14 App Router, TypeScript, and Tailwind CSS. It offers an immersive browsing experience for high-end residential properties, private penthouses, coastal sanctuaries, and alpine chalets.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18, TypeScript, Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Notifications:** Sonner
- **Data Persistence:** MongoDB & JWT Zero-Dependency Auth (`@/lib/auth`)

## Project Folder Tree
```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── properties/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── agents/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PropertyCard.tsx
│   ├── SearchFilterBar.tsx
│   ├── MortgageCalculator.tsx
│   └── InquiryModal.tsx
├── data/
│   └── mockData.ts
└── lib/
    ├── assets.ts
    ├── auth.ts
    ├── theme.ts
    └── db/
        └── connection.ts
```

## Local Setup Steps
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
3. Run development server on port 3100:
   ```bash
   npm run dev
   ```
4. Access the application at:
   `http://localhost:3100`

## Available Scripts
- `npm run dev`: Start development server on port 3100
- `npm run build`: Build production bundle
- `npm run start`: Start production server on port 3100
- `npm run lint`: Run ESLint checks