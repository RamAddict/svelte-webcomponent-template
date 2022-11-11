import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        postcss: true
    })],

	compilerOptions: {customElement: true}
};

export default config;