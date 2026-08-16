// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://atharv-nema.github.io',

	integrations: [mdx()],

	markdown: {
		// remark plugins run on the Markdown; rehype plugins run on the HTML it
		// becomes. remark-math spots $inline$ and $$display$$ maths and tags it,
		// then rehype-katex turns those tags into real equations — at BUILD time,
		// so the browser downloads zero JavaScript to render them.
		processor: unified({
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex],
		}),
	},
});
