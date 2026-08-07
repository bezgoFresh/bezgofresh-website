# bezgoFresh

Fresh fish & meat delivery for Palakkad — rebuilt from the Wix site as a Nuxt 4 app, deployed free on Cloudflare Pages.

## Tech

- **Nuxt 4** (Vue 3, Nitro) with the `cloudflare-pages` preset
- Fonts: Anton, Montserrat, Questrial (Google Fonts)
- Assets live in `public/` and are served from Cloudflare's CDN

## Local development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run typecheck
```

## Build & preview

```bash
npm run build       # outputs the deployable site to dist/
npx wrangler pages dev dist
```

## Deploy to Cloudflare Pages

Via the Cloudflare dashboard or CLI, connect this Git repo:

- Build command: `npm run build`
- Output directory: `dist`

Or deploy directly:

```bash
npx wrangler pages deploy dist
```

## Assets

Place downloaded images in `public/images/`:

- `logo.png` — site logo
- `hero-butcher.png` — hero image
- `about-poster.jpg` + `about-video.mp4` — about section media
- `mutton.png`, `chicken.png`, `buffalo.png`, `prawns.png`, `sardine.png` — category cards
- `whatsapp-phone.jpg` — how-to-order phone mockup
- `community.jpg` — community banner image
- `og.png` — social share image
