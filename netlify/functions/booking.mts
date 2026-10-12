// Netlify: тот же обработчик, что functions/api/booking.ts для Cloudflare Pages.
// С 11.10.2026 pages.dev из России открывается в 2 из 8 сетей, поэтому сайт
// выкладываем на Netlify. Код обработчика не копируем, а вызываем как есть:
// Netlify передает стандартный Request, переменные окружения берем из process.env.
// Методы как у Pages: нет обработчика для метода - 405.
// Проверка: node --test tools/netlify/adaptery.test.mjs
import { onRequestPost } from '../../functions/api/booking.ts';

type Handler = (ctx: { request: Request; env: NodeJS.ProcessEnv }) => Response | Promise<Response>;
const handlers: Record<string, Handler> = { POST: onRequestPost } as unknown as Record<string, Handler>;

export default async (request: Request): Promise<Response> => {
  const h = handlers[request.method];
  if (!h) {
    return new Response('Method Not Allowed', { status: 405, headers: { Allow: Object.keys(handlers).join(', ') } });
  }
  return h({ request, env: process.env });
};

export const config = { path: '/api/booking' };
