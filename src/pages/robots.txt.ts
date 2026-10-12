import type { APIRoute } from 'astro';
import { config } from '../content/site';

/**
 * robots.txt генерируется, а не лежит в public/ — потому что он обязан
 * согласовываться с режимом сайта. Статический файл легко забыть при продаже
 * клинике, и тогда получается разнобой: в head стоит noindex, а robots зовёт
 * обходить сайт целиком.
 *
 * isDemo: true  — обход запрещён (витрина портфолио).
 * isDemo: false — обход открыт, указана карта сайта.
 */
export const GET: APIRoute = ({ site }) => {
  const lines = config.isDemo
    ? ['User-agent: *', 'Disallow: /']
    : ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('sitemap-index.xml', site).href}`];

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
