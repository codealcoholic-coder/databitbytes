# AI Bites website clone (Vercel-ready)

A Substack-style publication site that mirrors your screenshots and shifts content toward AI, Deep Learning, and Generative AI.

## Features
- Pixel-inspired layout matching your provided style (header, nav, cards, feed sections).
- Public routes:
  - `/` home
  - `/topics/[slug]` category pages (including `deep-learning` and `genai`)
  - `/admin` separate admin dashboard URL
- Backend APIs (Next.js Route Handlers):
  - `GET /api/posts`
  - `POST /api/posts`
  - `PATCH /api/posts/:id`
  - `GET /api/categories`

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. Build command: `npm run build`
4. Output: `.next` (auto-detected by Vercel)

> Note: data is in-memory for demo simplicity. For production, replace `lib/content.ts` store with Vercel Postgres/Neon/Supabase.
