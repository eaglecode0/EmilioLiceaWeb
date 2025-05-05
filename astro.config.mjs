// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';


export default defineConfig({
  site: 'https://emiliolicea.netlify.app',
  integrations: [preact()],
  markdown: {
    // 💡 Built-in Markdown rendering with Shiki
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'nord', // Try 'nord', 'dracula', etc.
    },
  },
});

