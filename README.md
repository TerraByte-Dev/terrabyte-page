# terrabyte.page

The TerraByte **link-in-bio hub** — one short URL (`https://terrabyte.page`) that every
`@terrabyte.dev` social bio points to. Fans out to TerraByte's links, hosts downloadable
guides, and collects newsletter signups.

Built with **Astro 5** + deployed on **Vercel**, mirroring the
[`terrabytesolutions.com`](https://terrabytesolutions.com) toolchain and the **TERRABYTE.SYS**
Y2K terminal design system (mint phosphor `#00FF88` on black, CRT overlay, VT323 + IBM Plex Mono).

## Sections

1. **Links** — Book a call (cal.com) · Website · GitHub · Discord
2. **Guides** — direct-download PDFs (Astro content collection; flip `draft` to rotate)
3. **Newsletter** — weekly "transmission" signup (Buttondown)
4. **Footer** — Instagram + Threads icons

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
```

## Configuration to finish wiring

| What | Where | Note |
|------|-------|------|
| GA4 Measurement ID | `src/layouts/Layout.astro` → `GA_MEASUREMENT_ID` | Empty = analytics off. Paste `G-…` for the new terrabyte.page property. |
| Buttondown username | `src/components/Newsletter.astro` → `BUTTONDOWN_USERNAME` | Currently `terrabyte` (placeholder) — confirm the real handle. |

## Rotate guides

Each guide = a JSON in `src/content/guides/` + a PDF and thumbnail in `public/guides/`.
Add files to publish; set `"draft": true` to pull one from the hub without deleting it.
