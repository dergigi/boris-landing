# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People on nostr who read long-form writing and want to keep, highlight, and share what they read. They arrive from a nostr client, a zap, or a link a friend posted, mostly on a phone. Their job on this site: understand what Boris is in a few seconds and install the Android app (or, second choice, open the web app).

## Product Purpose

This is the marketing site for Boris, a nostr-native reading and highlighting app. Boris exists at `read.withboris.com` (web) and as a native Android app on Zapstore. The Android app is the better implementation and the lead offer. Success is an Android install; a web app visit is the fallback.

## Positioning

A reader where your highlights are nostr events: they travel with your npub, show up layered on the article (yours, friends, nostrverse), and carry zap splits to the author and curator. No account, no key handed to the app (Amber or bunker signs), no ads, trackers, paywalls, or subscriptions. Offline-first with a local relay (Citrine).

## Operating Context

- Android app: home (recently highlighted, most highlighted this week, random unreads), library (bookmarks, RSS feeds), reader with cover art, Source Serif body, swarm highlight panel, on-device TTS, settings with highlight colors and airplane mode. Bottom tabs: Home, Library, Feeds, Search, You.
- Web app: three-pane reader (bookmarks left, article center, highlights right), installable as PWA.
- Distribution: Zapstore (primary), GitHub releases. Support via zaps to the Boris npub.
- Site stack: Astro 5 + Tailwind 4, static, deployed on Vercel. Fonts via CDN (Inter from rsms.me). Font Awesome via CDN for icons.

## Capabilities and Constraints

- Existing copy is approved and stays largely as written: hero greeting, feature blurbs (Read Anywhere, Distraction-Free, Airplane Mode, Social Highlights, Lists/Libraries, Zap Splits, Comforting Colors, Peace of Mind, Free as in Freedom), the Zaps "pricing" tiers with their joke labels and amounts (0 / 2.1k / 69,420 sats), the three FAQ entries, "Standing on the Shoulders of Giants" credits, footer link groups.
- Feature copy may be reworded where it references the web app as the primary surface (for example the PWA sentence), so it reads Android-first.
- Web app appears as a secondary text link beside the Android CTA, not as an equal button.
- Zapstore link is `ZAPSTORE_ANDROID_URL` in `src/config/links.ts`. GitHub releases at `https://github.com/dergigi/boris-android/releases`.
- Dark and light follow the OS setting via a `dark` class on `<html>`; no manual toggle.
- No analytics, no tracking, no cookie banners.

## Brand Commitments

- Name: Boris. Greeting: "Hello! I'm Boris. I like to read."
- Voice: plain, short, first person, a little playful (the pricing jokes, "Why are you still here?"). No hype. Do not write like typical AI. No em-dashes.
- Highlight levels are the palette: yellow = mine, orange = friends, purple = nostrverse. These three must survive.
- Wordmark `public/boris-logo.svg` (purple "boris" with orange dot on the i, yellow underline, orange highlighter). Favicon is the orange highlighter.
- Two themes, OS-driven: ivory light and graphite/zinc dark.
- Type: Inter for UI chrome and navigation; a serif for editorial and reading moments, matching the Android reader (Source Serif 4). Serif reads, sans steers.
- Reference the Android app's design language (zinc surfaces, flat tonal depth, 8dp corners, yellow marks on copy) rather than inventing a separate marketing look.

## Evidence on Hand

- Real Android screenshots in `dergigi/boris-android` at `screenshots/*.png` (1008x2046): `read-1..4`, `dark-1..4`, `1-home`, `2-library`, `3-feeds`, `4-search`, `5-you`, `reader-art`, `reader-dark`, `reader-orange`, `settings-*`, `about-*`. Approved for use on this site; copy the needed ones into `public/`.
- "Get it on Zapstore" badge: `docs/badges/get-it-on-zapstore.svg` in the same repo.
- Web app screenshots: `public/screenshot.png`, `public/screenshot-dark.png` (browser window, 1181x940).
- Feature illustrations: `public/*.svg` (undraw style). Not required going forward.
- Credits logos: `public/applesauce.svg`, `citrine.png`, `highlighter.svg`, `kind9802.webp`, `lantern.png`, `nostr.jpg`, `prism.svg`, `ostrich-head.jpg`.
- Social image: `public/boris-social-1200.png`.
- No testimonials, download counts, or user numbers. Do not invent any.

## Product Principles

- Reading first: the site should feel like something a reader app would ship, not a SaaS template.
- Lowkey and modern: polish over spectacle; no gradients as decoration, no glass.
- Show the app, not metaphors: real phone screenshots carry the proof.
- Honest offer: free, open source, your data on your relays. Say it plainly.
- Keep it small and DRY: one page, few components, shared styles.

## Accessibility & Inclusion

Respect `prefers-color-scheme` and `prefers-reduced-motion`. Keep text contrast at WCAG AA in both themes. All screenshots need descriptive alt text.
