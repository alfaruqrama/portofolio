# Portfolio Website - Muhammad Naufal Aqila

Website portofolio personal untuk Civil Engineer yang dibangun dengan Next.js 16, TypeScript, dan Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG
- **Theme**: Dark/Light mode dengan next-themes

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka [http://localhost:3000](http://localhost:3000) di browser

## Cara Mengisi Konten

Semua konten website terpusat di **`src/lib/data.ts`**. Edit file ini untuk mengubah:

- **Profile Info**: Nama, title, bio, kontak, sosial media
- **Skills & Pelatihan**: Daftar pelatihan teknik sipil
- **Experience**: Riwayat kerja dan internship
- **Organizations**: Pengalaman organisasi

Contoh:
```typescript
// src/lib/data.ts
export const profile = {
  name: "Muhammad Naufal Aqila",
  title: "Civil Engineer",
  bio: "Ganti dengan bio Anda...",
  // ...
}
```

## Struktur Project

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── skills.tsx          # Skills & Pelatihan
│   ├── experience.tsx      # Experience timeline
│   ├── organizations.tsx   # Organizations
│   ├── footer.tsx          # Footer
│   └── theme-provider.tsx  # Dark/light mode
└── lib/
    └── data.ts             # ⭐ EDIT FILE INI UNTUK KONTEN
```

## Deploy ke Vercel

1. Push code ke GitHub (sudah selesai ✅)
2. Buka [vercel.com](https://vercel.com)
3. Import repository `alfaruqrama/portofolio`
4. Klik "Deploy"

Vercel akan otomatis detect Next.js dan deploy website Anda.

## Build Production

```bash
npm run build
npm start
```
