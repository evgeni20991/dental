// ─────────────────────────────────────────────────────────────────────────────
//  ВСЁ СОДЕРЖИМОЕ САЙТА — ТОЛЬКО ЗДЕСЬ. В разметке текста быть не должно.
//
//  ⚠️  ЗАМЕНИТЬ ПЕРЕД ЗАПУСКОМ РЕАЛЬНОЙ КЛИНИКИ
//  Помечено «ВЫМЫШЛЕНО» — придумано для вёрстки и фактом не является:
//  название, адрес, метро, часы, цены, цифры, имена и портреты врачей, реквизиты.
//  Отзывы намеренно НЕ выдуманы — их даёт только клиника.
// ─────────────────────────────────────────────────────────────────────────────

export type Lang = 'ru' | 'en';

export const brand = {
  name: 'АПЕКС',                     // ВЫМЫШЛЕНО
  nameEn: 'Apex Dental',             // ВЫМЫШЛЕНО
  phone: '+7 (000) 000-00-00',       // НЕ ВЫДУМАН: случайный номер принадлежит живому человеку
  phoneHref: 'tel:+70000000000',
  telegram: 'https://t.me/',         // ЗАМЕНИТЬ на аккаунт клиники
  email: 'hello@example.com',        // ВЫМЫШЛЕНО: example.com зарезервирован, чужой ящик не задет
  address: 'Москва, ул. Большая Никитская, 24, стр. 1',  // ВЫМЫШЛЕНО
  addressEn: 'Moscow, Bolshaya Nikitskaya St 24/1',      // ВЫМЫШЛЕНО
  metro: 'м. Арбатская — 4 минуты пешком',               // ВЫМЫШЛЕНО
  metroEn: 'Arbatskaya metro — 4 min walk',              // ВЫМЫШЛЕНО
  mapUrl: 'https://yandex.ru/maps/?text=Москва%2C%20Большая%20Никитская%2024',
  hours: 'Пн–Пт 09:00–21:00 · Сб–Вс 10:00–18:00',
  hoursEn: 'Mon–Fri 09:00–21:00 · Sat–Sun 10:00–18:00',
  // Те же адрес и часы, но по частям — для разметки schema.org. Человеку
  // строку выше читать удобнее, поисковику нужны отдельные поля.
  city: 'Москва',                                  // ВЫМЫШЛЕНО
  street: 'ул. Большая Никитская, 24, стр. 1',     // ВЫМЫШЛЕНО
  geo: { lat: 55.7539, lon: 37.6006 },             // ВЫМЫШЛЕНО
  openingHours: ['Mo-Fr 09:00-21:00', 'Sa-Su 10:00-18:00'],
  // Реквизиты ВЫМЫШЛЕНЫ. Медицинская деятельность лицензируется,
  // и сведения о лицензии обязаны быть опубликованы на сайте.
  legalName: 'ООО «Апекс Клиник»',
  inn: '7700000000',
  ogrn: '1157700000000',
  licence: 'ЛО-77-01-000000 от 00.00.0000',
};

// ─────────────────────────────────────────────────────────────────────────────
//  РЕЖИМ САЙТА — один выключатель на всё.
//
//  isDemo: true  — витрина портфолио. Страницы закрыты от индексации, robots.txt
//                  запрещает обход, в подвале стоит честная пометка «демо».
//                  Так и должно быть, пока клиника вымышлена: настоящий пациент
//                  не должен найти в поиске клинику с телефоном из нулей.
//  isDemo: false — сайт живой клиники. Индексация открыта, robots отдаёт sitemap,
//                  пометка исчезает. Меняется ОДНО значение, больше ничего.
// ─────────────────────────────────────────────────────────────────────────────
export const config = {
  isDemo: true,
  // Картинка для превью в мессенджерах и соцсетях, 1200×630.
  ogImage: '/og.png',
  // Номер счётчика Яндекс.Метрики. Пусто — счётчик не подключается вовсе,
  // чтобы демо не собирало ничьи данные. Заводится на аккаунт клиники.
  metrikaId: '',
};

export const site = {
  ru: {
    code: 'ru',
    altHref: '/en/',
    altLabel: 'EN',
    meta: {
      title: 'АПЕКС — стоматология в Москве',
      description:
        'Смета до начала лечения, цена в договоре не меняется. Осмотр, снимок и план лечения — 1 500 ₽. м. Арбатская.',
    },
    nav: [
      { label: 'Услуги и цены', href: '#services' },
      { label: 'Почему мы', href: '#why' },
      { label: 'Как проходит', href: '#process' },
      { label: 'Врачи', href: '#doctors' },
      { label: 'Вопросы', href: '#faq' },
    ],
    navCta: 'Записаться',
    callLabel: 'Позвонить',
    hero: {
      label: 'Стоматология · м. Арбатская',
      title: 'Смета до лечения. Цена в договоре не меняется',
      lead:
        'Осмотр, снимок и письменный план с ценами — 1 500 ₽. Если лечитесь у нас, эта сумма вычитается из счёта.',
      ctaPrimary: 'Записаться на осмотр',
      ctaSecondary: 'Услуги и цены',
      badge: { value: '1 500 ₽', text: 'осмотр, снимок и план лечения с ценами' },
      scroll: 'Листайте вниз',
    },
    stats: [
      { value: 12, suffix: '+', label: 'лет клинике' },              // ВЫМЫШЛЕНО
      { value: 8, suffix: ' 500+', label: 'пролеченных пациентов' },  // ВЫМЫШЛЕНО
      { value: 6, suffix: '', label: 'направлений' },
      { value: 2, suffix: ' года', label: 'гарантия на работы' },     // ВЫМЫШЛЕНО
    ],
    services: {
      label: 'Услуги и цены',
      title: 'Шесть направлений с понятной стартовой ценой',
      lead:
        'Цены ниже — стартовые, за единицу работы. Точная сумма фиксируется в смете после осмотра и в ходе лечения не растёт.',
      priceNote: 'Полный прайс пришлём в ответ на заявку',
      items: [
        { n: '01', title: 'Терапия', price: 'от 4 900 ₽', text: 'Лечение кариеса и каналов под микроскопом. Анестезия подбирается по весу и состоянию.' },
        { n: '02', title: 'Профгигиена', price: '6 500 ₽', text: 'Ультразвук, Air Flow, полировка, фторирование. Один визит, 60 минут.' },
        { n: '03', title: 'Имплантация', price: 'от 39 000 ₽', text: 'Имплант, установка и коронка. 3D-снимок и планирование до операции.' },
        { n: '04', title: 'Ортодонтия', price: 'от 90 000 ₽', text: 'Брекеты или элайнеры за весь курс. Прогноз положения зубов показываем до старта.' },
        { n: '05', title: 'Протезирование', price: 'от 24 000 ₽', text: 'Коронки и виниры. Примерка до постоянной фиксации, переделка бесплатно.' },
        { n: '06', title: 'Детский приём', price: 'от 3 200 ₽', text: 'Отдельный кабинет и врач, который работает с детьми от трёх лет.' },
      ],
    },
    why: {
      label: 'Почему к нам',
      title: 'Четыре вещи, которые можно проверить',
      items: [
        { n: '01', title: 'Смета в договоре', text: 'Сумма фиксируется до начала лечения. Если работы оказалось больше — доплаты нет: это наш просчёт, а не ваша проблема.' },
        { n: '02', title: 'Гарантия 2 года', text: 'На пломбы, коронки и импланты. Гарантийный случай переделываем бесплатно — и работу, и материалы.' },
        { n: '03', title: 'Остановка по руке', text: 'Поднимаете руку — врач останавливается немедленно, на любом этапе. Это правило клиники, а не любезность.' },
        { n: '04', title: 'Один врач до конца', text: 'Вас не передают между специалистами. За результат отвечает конкретный доктор, его имя стоит в договоре.' },
      ],
    },
    process: {
      label: 'Как проходит',
      title: 'Четыре шага от заявки до результата',
      items: [
        { n: '01', title: 'Заявка', text: 'Оставляете номер — перезваниваем в течение часа в рабочее время и подбираем время визита.' },
        { n: '02', title: 'Осмотр — 1 500 ₽', text: 'Осмотр, снимок и разбор того, что беспокоит. Занимает около 40 минут.' },
        { n: '03', title: 'План и смета', text: 'Варианты, сроки и итоговая сумма на бумаге. Решение принимаете дома, без давления.' },
        { n: '04', title: 'Лечение', text: 'Работаем по подписанной смете. О любом изменении сообщаем до, а не после.' },
      ],
    },
    doctors: {
      label: 'Команда',
      title: 'Врачи',
      lead: 'Врачи, которые ведут приём. Записаться можно к конкретному доктору.',
      // Имена, стаж и портреты ВЫМЫШЛЕНЫ. Заменить на настоящих:
      // пациент выбирает врача по лицу и имени, подмена вводит его в заблуждение.
      items: [
        { role: 'Стоматолог-терапевт', name: 'Анна Ковалёва', exp: 'в профессии 11 лет', photo: '/img/doc-1.webp' },
        { role: 'Хирург-имплантолог', name: 'Дмитрий Соколов', exp: 'в профессии 16 лет', photo: '/img/doc-2.webp' },
        { role: 'Ортодонт', name: 'Мария Левина', exp: 'в профессии 8 лет', photo: '/img/doc-3.webp' },
        { role: 'Детский стоматолог', name: 'Игорь Бельский', exp: 'в профессии 12 лет', photo: '/img/doc-4.webp' },
      ],
    },
    faq: {
      label: 'Вопросы',
      title: 'Что спрашивают чаще всего',
      items: [
        { q: 'Сколько стоит первый приём?', a: '1 500 ₽ — осмотр, прицельный снимок и письменный план лечения с ценами. Если начинаете лечение у нас, эти 1 500 ₽ вычитаются из счёта. Лечиться в тот же день не обязательно.' },
        { q: 'Может ли смета вырасти по ходу лечения?', a: 'Нет. Сумма фиксируется в договоре до начала работ. Если объём оказался больше, чем мы оценили, разницу берём на себя — ошибка в планировании наша.' },
        { q: 'Будет ли больно?', a: 'Лечение идёт под анестезией, её подбирают по весу и состоянию. Действует правило: поднимаете руку — врач останавливается немедленно, на любом этапе.' },
        { q: 'Что входит в гарантию?', a: 'Два года на пломбы, коронки и импланты. При гарантийном случае переделываем бесплатно, включая материалы. Нужен только договор — он остаётся у вас.' },
        { q: 'Как быстро можно попасть?', a: 'Обычно в течение двух-трёх дней. При острой боли принимаем в день обращения — скажите об этом при звонке.' },
        { q: 'Я давно не был у стоматолога, и мне неловко.', a: 'Это самая частая причина откладывать, и мы слышим её каждый день. Никаких комментариев о состоянии зубов вы не услышите — только план: что и в каком порядке делать.' },
      ],
    },
    reviews: {
      label: 'Отзывы',
      title: 'Отзывы читайте не у нас',
      // Отзывы намеренно НЕ выдуманы: сочинённый отзыв — это подделка,
      // и пациенты её чувствуют. Ведём на площадку, где отзывы настоящие.
      lead: 'Мы не публикуем отзывы на своём сайте — их слишком легко написать самому. Смотрите там, где их оставляют пациенты и где мы не можем ничего удалить.',
      cta: 'Отзывы на Яндекс.Картах',
    },
    booking: {
      label: 'Запись',
      title: 'Оставьте номер — перезвоним в течение часа',
      lead: 'В рабочее время перезваниваем за час. Без рассылок и звонков «просто так».',
      topicLabel: 'С чем обращаетесь',
      topics: ['Болит зуб', 'Гигиена', 'Имплант', 'Брекеты', 'Ребёнку', 'Консультация'],
      fields: { name: 'Как к вам обращаться', phone: 'Телефон', comment: 'Что-то важное (необязательно)' },
      submit: 'Отправить заявку',
      sending: 'Отправляем…',
      ok: 'Готово — заявка у нас. Перезвоним в течение часа в рабочее время.',
      err: 'Не отправилось — похоже, пропала связь. Попробуйте ещё раз или позвоните нам.',
      retry: 'Отправить снова',
      orCall: 'Не любите формы? Позвоните — ответим сразу',
      consent: 'Я согласен(а) с',
      consentLink: 'политикой обработки персональных данных',
    },
    notFound: {
      label: 'Страница не найдена',
      title: 'Такой страницы у нас нет',
      text: 'Возможно, адрес набран с опечаткой или страницу перенесли. Записаться можно с главной или по телефону.',
      cta: 'На главную',
    },
    footer: {
      rights: 'Все права защищены.',
      privacy: 'Политика обработки персональных данных',
      licenceLabel: 'Лицензия',
      demoNotice:
        'Демонстрационный проект. Клиника, врачи, цены и реквизиты вымышлены — сайт сделан как образец работы.',
    },
  },

  en: {
    code: 'en',
    altHref: '/',
    altLabel: 'RU',
    meta: {
      title: 'Apex Dental — clear prices, Moscow',
      description:
        'A written estimate before treatment and a price fixed in the contract. Examination, X-ray and plan for 1,500 ₽.',
    },
    nav: [
      { label: 'Services & prices', href: '#services' },
      { label: 'Why us', href: '#why' },
      { label: 'How it works', href: '#process' },
      { label: 'Doctors', href: '#doctors' },
      { label: 'FAQ', href: '#faq' },
    ],
    navCta: 'Book',
    callLabel: 'Call',
    hero: {
      label: 'Dental care · Arbatskaya',
      title: 'An estimate first. The price in the contract does not move',
      lead:
        'Examination, X-ray and a written plan with prices — 1,500 ₽, deducted from your bill if you are treated here.',
      ctaPrimary: 'Book an examination',
      ctaSecondary: 'Services & prices',
      badge: { value: '1,500 ₽', text: 'examination, X-ray and a costed treatment plan' },
      scroll: 'Scroll down',
    },
    stats: [
      { value: 12, suffix: '+', label: 'years open' },
      { value: 8, suffix: ',500+', label: 'patients treated' },
      { value: 6, suffix: '', label: 'specialities' },
      { value: 2, suffix: ' years', label: 'guarantee on our work' },
    ],
    services: {
      label: 'Services & prices',
      title: 'Six specialities, each with a starting price',
      lead:
        'The prices below are starting prices per unit of work. The exact sum is fixed in the estimate after the examination and does not grow.',
      priceNote: 'Full price list sent with our reply',
      items: [
        { n: '01', title: 'General dentistry', price: 'from 4,900 ₽', text: 'Fillings and root canals under a microscope, with anaesthesia matched to you.' },
        { n: '02', title: 'Hygiene', price: '6,500 ₽', text: 'Ultrasonic, Air Flow, polishing, fluoride. One visit, 60 minutes.' },
        { n: '03', title: 'Implants', price: 'from 39,000 ₽', text: 'Implant, placement and crown. 3D scan and planning before surgery.' },
        { n: '04', title: 'Orthodontics', price: 'from 90,000 ₽', text: 'Braces or aligners for the whole course, with the predicted result shown first.' },
        { n: '05', title: 'Prosthetics', price: 'from 24,000 ₽', text: 'Crowns and veneers. You try them before they are fixed; remakes are free.' },
        { n: '06', title: 'Children', price: 'from 3,200 ₽', text: 'A separate room and a dentist who works with children from age three.' },
      ],
    },
    why: {
      label: 'Why us',
      title: 'Four things you can hold us to',
      items: [
        { n: '01', title: 'The estimate is in the contract', text: 'Fixed before treatment starts. If the work turns out larger, there is no surcharge — that was our miscalculation, not your problem.' },
        { n: '02', title: 'Two-year guarantee', text: 'On fillings, crowns and implants. A guarantee case is redone free, materials and labour included.' },
        { n: '03', title: 'Raise your hand and we stop', text: 'Immediately, at any stage. It is a clinic rule, not a courtesy.' },
        { n: '04', title: 'One doctor, start to finish', text: 'You are not passed around. A named dentist owns the result, and the name is in your contract.' },
      ],
    },
    process: {
      label: 'How it works',
      title: 'Four steps from enquiry to result',
      items: [
        { n: '01', title: 'Enquiry', text: 'Leave a number. We call back within the hour during working hours.' },
        { n: '02', title: 'Examination — 1,500 ₽', text: 'Check-up, X-ray and a conversation about what troubles you. Around forty minutes.' },
        { n: '03', title: 'Plan and price', text: 'Options, timeline and the final sum on paper. You decide at home, with no pressure.' },
        { n: '04', title: 'Treatment', text: 'We work to the signed estimate. Any change is agreed before, not after.' },
      ],
    },
    doctors: {
      label: 'Team',
      title: 'Doctors',
      lead: 'The doctors who see patients here. You can ask for a specific one.',
      items: [
        { role: 'General dentist', name: 'Anna Kovalyova', exp: '11 years in practice', photo: '/img/doc-1.webp' },
        { role: 'Implant surgeon', name: 'Dmitry Sokolov', exp: '16 years in practice', photo: '/img/doc-2.webp' },
        { role: 'Orthodontist', name: 'Maria Levina', exp: '8 years in practice', photo: '/img/doc-3.webp' },
        { role: "Children's dentist", name: 'Igor Belsky', exp: '12 years in practice', photo: '/img/doc-4.webp' },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'The questions we hear most',
      items: [
        { q: 'What does the first visit cost?', a: '1,500 ₽ — examination, X-ray and a written plan with prices. If you are treated here, that sum comes off your bill. You are not obliged to start the same day.' },
        { q: 'Can the estimate grow during treatment?', a: 'No. The sum is fixed in the contract before work begins. If the job turns out larger than we judged, we absorb the difference — the planning error was ours.' },
        { q: 'Will it hurt?', a: 'Treatment is done under anaesthesia matched to you. One rule always applies: raise your hand and the dentist stops immediately, at any stage.' },
        { q: 'What does the guarantee cover?', a: 'Two years on fillings, crowns and implants, redone free including materials. You only need the contract, which stays with you.' },
        { q: 'How soon can I be seen?', a: 'Usually within two or three days. With acute pain we see you the same day — say so when you call.' },
        { q: 'I have not been to a dentist in years.', a: 'It is the most common reason people put this off, and we hear it daily. You will get no remarks about the state of your teeth — only a plan and an order of work.' },
      ],
    },
    reviews: {
      label: 'Reviews',
      title: 'Read the reviews somewhere else',
      lead: 'We do not host reviews on our own site — they are far too easy to write yourself. Read them where patients leave them and where we cannot delete anything.',
      cta: 'Reviews on Yandex Maps',
    },
    booking: {
      label: 'Booking',
      title: 'Leave a number — we call back within the hour',
      lead: 'During working hours we call back within the hour. No newsletters, no cold calls.',
      topicLabel: 'What brings you in',
      topics: ['Toothache', 'Hygiene', 'Implant', 'Braces', 'For a child', 'Consultation'],
      fields: { name: 'Your name', phone: 'Phone', comment: 'Anything important (optional)' },
      submit: 'Send request',
      sending: 'Sending…',
      ok: 'Done — we have your request and will call within the hour during working hours.',
      err: 'That did not send — the connection seems to have dropped. Try again, or call us.',
      retry: 'Send again',
      orCall: 'Not a fan of forms? Call and we answer straight away',
      consent: 'I agree to the',
      consentLink: 'personal data policy',
    },
    notFound: {
      label: 'Page not found',
      title: 'We do not have that page',
      text: 'The address may have a typo, or the page has moved. You can book from the home page or by phone.',
      cta: 'Go to home page',
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Personal data policy',
      licenceLabel: 'Licence',
      demoNotice:
        'Demonstration project. The clinic, its doctors, prices and registration details are fictional — this site is a work sample.',
    },
  },
} as const;

export type Content = (typeof site)['ru'];
