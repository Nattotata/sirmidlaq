import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import chordPlugin from './src/plugins/chord-plugin.js'

/** @type {import('mdsvex').MdsvexOptions} */

const MdsvexOptions = {
	extensions: ['.md', '.mdx'],
    remarkPlugins: [chordPlugin]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.mdx'],
	layout: {
		_: './src/mdsvex-layout.svelte'
	},
	preprocess: [vitePreprocess(), mdsvex(MdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
