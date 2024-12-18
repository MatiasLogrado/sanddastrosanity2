import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
    projectId: "3etbwnl5",
    dataset: "production",
    useCdn: false, // for static builds
    })
]
});