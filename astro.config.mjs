import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://liandongjie.vercel.app',
  i18n: {
    locales: ['zh-cn', 'en'],
    defaultLocale: 'zh-cn',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
