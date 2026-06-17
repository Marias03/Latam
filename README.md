# ASOPAIS LATAM 🌎

Official web platform for the **Association of Latin American Countries in Kazan, Russia**.

## What is it?

A web application for the Latin American community in Kazan that allows:

- Consulting representatives by country and university
- Viewing upcoming association events
- Getting information on migration procedures (visa, registration, fingerprinting, RVPO, medical exams)
- AI chatbot that answers questions in Spanish, English and Russian

## Stack

- **Next.js 15** — main framework
- **TypeScript** — typing
- **Tailwind CSS** — styling
- **Supabase** — PostgreSQL database
- **next-intl** — internationalization (ES / EN / RU)
- **Cloudflare Workers AI** — chatbot powered by Llama 3.1
- **Vercel** — deployment

## Features

- 🌐 Multilingual: Spanish, English and Russian
- 🤖 AI chatbot connected to Supabase in real time
- 📅 Admin panel to manage events and representatives
- 📱 Responsive design

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
CLOUDFLARE_API_TOKEN=
CLOUDFLARE_ACCOUNT_ID=
```

## Live

Deployed at [asopaislatam.vercel.app](https://asopaislatam.vercel.app)

---

Developed by: MARIA JULIANA A.
