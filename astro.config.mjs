import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// terrabyte.page — the link-in-bio hub. Single-page Astro site, mirrors the
// TerraSite toolchain (../TerraSite/02-development) so deploy + design carry over.
export default defineConfig({
  site: 'https://terrabyte.page',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
