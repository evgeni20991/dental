/**
 * Cloudflare Pages Function — receives the booking form and relays it to Telegram.
 *
 * The bot token NEVER reaches the browser: it lives as an encrypted secret on the
 * Cloudflare side. A static site cannot hold it safely — anyone could read it in
 * DevTools and hijack the bot.
 *
 * Set the secrets once:
 *   wrangler pages secret put TELEGRAM_BOT_TOKEN --project-name <slug>
 *   wrangler pages secret put TELEGRAM_CHAT_ID   --project-name <slug>
 */

interface Env {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
}

const esc = (s: unknown) =>
  String(s ?? '').replace(/[<>&]/g, (m) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[m] as string);

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response('bad request', { status: 400 });
  }

  // Honeypot: real people never fill a field they cannot see.
  if (body.website) return new Response('ok', { status: 200 });

  const name = String(body.name ?? '').trim().slice(0, 120);
  const phone = String(body.phone ?? '').trim().slice(0, 60);
  const comment = String(body.comment ?? '').trim().slice(0, 1000);
  const topic = String(body.topic ?? '').trim().slice(0, 60);

  if (!name || !phone) return new Response('missing fields', { status: 400 });

  // Оба значения — только из окружения. Раньше здесь стоял запасной chat id,
  // и это была не подстраховка, а утечка: при незаданной переменной заявки
  // с телефонами пациентов молча уходили в чужой чат, а форма отвечала «готово».
  // Лучше честная пятисотка в логе, чем тихая отправка не тому человеку.
  const chat = env.TELEGRAM_CHAT_ID;
  const token = env.TELEGRAM_BOT_TOKEN;

  if (!token || !chat) {
    console.error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set');
    return new Response('not configured', { status: 500 });
  }

  const lines = [
    '<b>Новая заявка с сайта</b>',
    '',
    `<b>Имя:</b> ${esc(name)}`,
    `<b>Телефон:</b> ${esc(phone)}`,
    topic ? `<b>Тема:</b> ${esc(topic)}` : '',
    comment ? `<b>Комментарий:</b> ${esc(comment)}` : '',
    '',
    `<i>${esc(body.lang)} · ${esc(body.page)}</i>`,
  ].filter(Boolean);

  const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chat,
      text: lines.join('\n'),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  if (!tg.ok) {
    console.error('Telegram rejected the message', tg.status);
    return new Response('upstream error', { status: 502 });
  }

  return new Response('ok', { status: 200 });
};
