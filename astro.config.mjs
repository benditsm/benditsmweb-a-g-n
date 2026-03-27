// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: 'https://benditsm.github.io/benditsmweb-a-g-n/', //absolute path for github pages
  vite: {
    plugins: [tailwindcss()]
  },
  build: {outDir: 'dist'}
});