import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://k0nci.me',
  integrations: [react(), sitemap()],
  vite: {
    // @ts-expect-error - Tailwind CSS Vite plugin type mismatch with latest Vite
    // Reference: https://github.com/tailwindlabs/tailwindcss/issues/18002
    plugins: [tailwindcss()],
  },
});
