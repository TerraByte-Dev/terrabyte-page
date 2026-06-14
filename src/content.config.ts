import { defineCollection, z } from 'astro:content';

// Downloadable guides/field-cards. Drop a JSON here + a PDF and thumbnail in
// public/guides/ to add one. Flip `draft: true` to pull a guide from the hub
// without deleting it — that's the "rotate what's live" lever.
const guides = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    type: z.enum(['field-card', 'guide']),
    pdf: z.string(),
    thumbnail: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { guides };
