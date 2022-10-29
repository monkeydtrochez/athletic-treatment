import preprocess from "svelte-preprocess";
// import adapter from '@sveltejs/adapter-static';

import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: {
			server: {
				fs: {
					allow: ['locales']
				}
			}
		}
	},
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,

			edge: false,
			split: false
		})
	},

	preprocess: [preprocess({
		"postcss": true
	})]

};

export default config;
