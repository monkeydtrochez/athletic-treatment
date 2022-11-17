import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	// vite: {
	// 	resolve: {
	// 	  alias: {
	// 		$houdini: path.resolve('.', '$houdini'),
	// 	  },
	// 	},
	// 	server: {
	// 	  fs: {
	// 		// Allow serving files from one level up to the project root
	// 		allow: ['..'],
	// 	  },
	// 	},
	//   },
	plugins: [sveltekit()]
};

export default config;
