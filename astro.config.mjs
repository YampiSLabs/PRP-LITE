import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yampislabs.github.io',
  base: '/PRP-LITE',
  integrations: [tailwind()],
});
