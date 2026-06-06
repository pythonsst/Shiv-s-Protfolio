# Shiv's Portfolio

A modern, fully responsive **personal portfolio + blog** built with Next.js 15 and React 19 — with a light/dark theme, a data-driven blog, and a print-ready resume page. Open source and easy to fork as your own portfolio.

> **Live:** _add your deployed URL here (e.g. https://your-domain.com)_

---

## ✨ Features

- **Light & dark themes** — a brand-matched theme system with a no-flash toggle (remembers your choice, respects system preference).
- **Data-driven blog** — write posts as content components rendered through one dynamic `/blog/[slug]` route; the listing is generated from a single data file.
- **Print-ready resume** — a `/resume` page that's theme-aware on screen and automatically prints/exports to a clean white-paper PDF (`Cmd/Ctrl + P`).
- **Fully responsive** and accessible, with sensible SEO metadata.
- **Fast** — statically generated (SSG) pages, self-hosted fonts via `next/font`, no layout shift.

## 🧱 Tech stack

| | |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| UI | [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + CSS variables |
| Fonts | `next/font` (Instrument Sans, Delicious Handrawn, Roboto Mono) |
| Hosting | [Vercel](https://vercel.com) (recommended) |

## 🚀 Getting started

**Prerequisites:** Node.js **20+** and npm 10+.

```bash
# 1. Clone
git clone https://github.com/pythonsst/Shiv-s-Protfolio.git
cd Shiv-s-Protfolio

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open **http://localhost:3000** in your browser.

## 📂 Project structure

```
src/
├── app/                  # Routes (App Router)
│   ├── page.tsx          # Home
│   ├── blog/             # Blog index + dynamic [slug] route
│   ├── resume/           # Print-ready resume page
│   ├── privacy/          # Privacy policy
│   └── layout.tsx        # Root layout, fonts, theme bootstrap
├── components/
│   ├── ui/               # Navigation, ThemeToggle, CodeBlock
│   ├── blog/             # BlogCard, BlogPostLayout
│   └── resume/           # Resume sections
├── content/blog/         # One component per blog post + a slug→component registry
├── data/                 # Your content lives here (see below)
├── lib/                  # Helpers (blog queries)
└── hooks/
```

## 🛠 Make it your own

All the content you'd change is in **`src/data/`** — no need to touch components:

- **`resumeData.ts`** — name, title, contact, summary, projects, education, certifications.
- **`experiences.ts`** — work history shown on the resume.
- **`skillsData.ts`** — skill categories.
- **`blogPosts.ts`** — blog post metadata (title, excerpt, date, tags, `published` flag).

To **add a blog post**: create `src/content/blog/<your-slug>.tsx` (the article body), register it in `src/content/blog/index.ts`, and add a matching entry in `src/data/blogPosts.ts`.

Swap the logo/photos in **`public/`** (`logo.svg`, `favicon.svg`, `images/`). Theme colors and fonts live in **`src/app/globals.css`** and **`src/app/layout.tsx`**.

## 📜 Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## ☁️ Deployment

Deploy in one click with [Vercel](https://vercel.com/new): import the repo, accept the defaults (Next.js is auto-detected), and deploy. Every push to `main` then ships automatically.

## 🤝 Contributing

Contributions are welcome! Whether it's a bug fix, a new feature, or docs:

1. **Fork** the repo and create a branch: `git checkout -b feat/your-feature`.
2. Make your changes and run `npm run lint && npm run build` to verify.
3. Commit with a clear message (e.g. `fix: ...`, `feat: ...`).
4. **Push** and open a **Pull Request** describing what and why.

For larger changes, please open an issue first to discuss the direction. Be kind and constructive in reviews. 🙌

## 📄 License

Released under the [MIT License](./LICENSE) — free to use, modify, and distribute. If you build your portfolio from this, a link back is appreciated but not required.

## 👤 Author

**Shiv Shankar Tiwari** — Staff Mobile App Engineer
[GitHub](https://github.com/pythonsst) · [LinkedIn](https://www.linkedin.com/in/mobile-engineer/) · [Medium](https://medium.com/@pythonsst)
