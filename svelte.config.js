//https://github.com/TorstenDittmann/svelte-adapter-static-digitalocean
//import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from 'svelte-adapter-static-digitalocean';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		//adapter: adapter()
		adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            spec: '.do/spec.yaml',
            name: ''
        })


	},

};

export default config;
