export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        openai: {
          green: '#10a37f',
          dark: '#343541',
          darker: '#202123',
          light: '#f7f7f8',
        }
      }
    },
  },
  plugins: [],
};
