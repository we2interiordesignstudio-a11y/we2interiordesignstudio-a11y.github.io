# we2 interior design studio

An editorial, cinematic luxury website for **we2 interior design studio**, Vadodara.
Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion and Lenis smooth scroll.

## Design system

| Token | Value | Use |
| --- | --- | --- |
| Canvas | `#FAF8F4` | Warm white background |
| Ink | `#1C1C1C` | Charcoal text |
| Bronze | `#9A7B4F` | Primary accent |
| Olive / Stone / Beige / Sand | muted naturals | Placeholders & detail |
| Display | Fraunces (serif) | Headings, editorial |
| Body | Inter (sans) | Copy, labels |

No gradients, no bright colour, generous whitespace, magazine-scale type.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build a static site (for Hostinger, same as Reva)

```bash
npm run build
```

This outputs a fully static site into the `out/` folder (`output: "export"` in
`next.config.mjs`). Upload the contents of `out/` to your host, or point your
GitHub → Hostinger pipeline at it exactly like the Reva Diagnostics site.

## Adding real photography

Every image is currently a warm placeholder frame. To use real photos:

1. Drop images into `public/projects/…`
2. In `components/ui/Photo.tsx`, replace the coloured block with:
   ```tsx
   <Image src={src} alt={caption} fill className="object-cover" />
   ```
3. Update the `tone` fields in `lib/projects.ts` to `src` image paths.

For the homepage and project hero films, add `public/hero.mp4` and swap the
placeholder in `components/home/Hero.tsx` for the commented `<video>` tag.

## Structure

- `app/` — pages (Home, About, Projects, Services, Process, Journal, Testimonials, Contact, 404)
- `app/projects/[slug]` — cinematic project detail with lightbox gallery
- `components/` — layout, home sections, UI (cursor, loader, reveal, magnetic button)
- `lib/` — site config, project data, editorial content

## What's included

Custom cursor · luxury loading screen · Lenis smooth scroll · scroll progress ·
magnetic buttons · scroll-reveal animations · dark mode toggle · lightbox gallery ·
JSON-LD (InteriorDesignService) schema · sitemap · robots · full responsive layout.
