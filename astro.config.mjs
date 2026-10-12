import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// site — боевой адрес. Из него собираются canonical, og:url, hreflang и sitemap.
// Ошибка здесь не ломает вёрстку, поэтому её легко не заметить: страницы
// открываются как ни в чём не бывало, а поисковик и мессенджеры уводят на
// чужой домен. Менять здесь при покупке домена — и больше нигде.
export default defineConfig({
  site: 'https://dental-studio-ru.pages.dev',
  integrations: [sitemap()],
  vite: { plugins: [tailwind()] },
  build: { inlineStylesheets: 'auto' },
});
