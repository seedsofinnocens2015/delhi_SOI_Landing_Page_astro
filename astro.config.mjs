// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/gads/nov25/delhi/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro'
  }
});