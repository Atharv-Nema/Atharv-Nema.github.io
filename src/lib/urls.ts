/**
 * Helpers for building internal links.
 *
 * Right now the site is served from the domain root, so `href('/blog')` simply
 * returns '/blog' and this file is doing very little. It stays because it is
 * the single place that would need to change if the site ever moved under a
 * subpath (e.g. github.io/My_Website/) — set `base` in astro.config.mjs and
 * every link in the project adjusts by itself. Hardcoded links would each need
 * finding and fixing instead.
 *
 * `BASE_URL` is supplied by Astro: '/' by default, or whatever `base` is set to.
 */

// '/' -> ''   and   '/My_Website/' -> '/My_Website'
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Turn a site-root path into a real URL. href('/blog') -> '/blog' */
export function href(path = '/'): string {
	const clean = '/' + path.replace(/^\/+/, '');
	return clean === '/' ? `${BASE}/` : BASE + clean;
}

/**
 * True if `path` is the page currently being viewed — used to mark the active
 * nav link. `current` is Astro.url.pathname, which may or may not carry a
 * trailing slash, so we normalise both sides before comparing.
 */
export function isCurrent(current: string, path: string): boolean {
	const strip = (s: string) => s.replace(/\/+$/, '') || '/';
	return strip(current) === strip(href(path));
}
