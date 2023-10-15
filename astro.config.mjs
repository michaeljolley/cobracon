import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import preact from '@astrojs/preact';

export default defineConfig({
	output: 'server',
	adapter: netlify({
		functionPerRoute: true,
	}),
	integrations: [preact()],
});
