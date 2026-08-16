import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * A "content collection" is Astro's way of managing a folder of content files.
 * The `schema` below is the important part: it declares what frontmatter every
 * blog post must have. If you typo `pubDate` as `pubdate`, or forget a title,
 * the BUILD FAILS with a clear message naming the file — rather than the site
 * quietly deploying with a blank heading.
 */
const blog = defineCollection({
	// Read every .md and .mdx file under src/content/blog/.
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),

	schema: z.object({
		title: z.string(),
		description: z.string(),

		// `coerce` lets you write `pubDate: 2026-08-16` in the file and get a
		// real JavaScript Date object out.
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),

		tags: z.array(z.string()).default([]),

		// Set `draft: true` to keep a post out of the built site while you work
		// on it. Filtered out in src/pages/blog/index.astro.
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
