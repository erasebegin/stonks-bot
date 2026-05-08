import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    date: z.date(),
    mode: z.enum(['quick', 'full']).default('quick'),
    sentiment: z.string().optional(),
    tickers: z.array(z.string()).optional(),
  }),
});

export const collections = { reports };
