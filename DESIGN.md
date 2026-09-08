---
name: Boris
description: A page that is itself a page of highlights. Ivory paper, dark ink, three marks, nothing else.
colors:
  paper: "#fffff0"
  paper-2: "#f7f6e8"
  ink: "#1c1917"
  ink-2: "#57534e"
  ink-3: "#78716c"
  rule: "#e2e0d0"
  mark-mine: "#fde047"
  mark-mine-edge: "#eab308"
  mark-friends: "#fdba74"
  mark-friends-edge: "#f97316"
  mark-nostrverse: "#d8b4fe"
  mark-nostrverse-edge: "#9333ea"
  paper-dark: "#18181b"
  paper-2-dark: "#1f1f23"
  ink-dark: "#f4f4f5"
  ink-2-dark: "#a1a1aa"
  ink-3-dark: "#8e8e97"
  rule-dark: "#2e2e33"
  mark-mine-dark: "color-mix(in srgb, #fde047 34%, transparent)"
  mark-mine-edge-dark: "#facc15"
  mark-friends-dark: "color-mix(in srgb, #fb923c 36%, transparent)"
  mark-friends-edge-dark: "#fb923c"
  mark-nostrverse-dark: "color-mix(in srgb, #c084fc 38%, transparent)"
  mark-nostrverse-edge-dark: "#c084fc"
  device-bezel: "#0c0c0e"
  device-camera-ring: "#2a2a30"
  device-bar: "#f3edf8"
  device-bar-dark: "#18181a"
typography:
  display:
    fontSize: "4.25rem"
    fontFamily: "Source Serif 4 Variable, Georgia, Times New Roman, serif"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display-sm:
    fontSize: "3.75rem"
    fontFamily: "Source Serif 4 Variable, Georgia, Times New Roman, serif"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display-mobile:
    fontSize: "2.5rem"
    fontFamily: "Source Serif 4 Variable, Georgia, Times New Roman, serif"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontSize: "2.25rem"
    fontFamily: "Source Serif 4 Variable, Georgia, Times New Roman, serif"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  headline-mobile:
    fontSize: "1.875rem"
    fontFamily: "Source Serif 4 Variable, Georgia, Times New Roman, serif"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  passage:
    fontSize: "1.75rem"
    fontFamily: "Source Serif 4 Variable, Georgia, Times New Roman, serif"
    fontWeight: 400
    lineHeight: 1.55
  passage-mobile:
    fontSize: "1.25rem"
    fontFamily: "Source Serif 4 Variable, Georgia, Times New Roman, serif"
    fontWeight: 400
    lineHeight: 1.55
  title:
    fontFamily: "Source Serif 4 Variable, Georgia, Times New Roman, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  body-lead:
    fontSize: "1.25rem"
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.625
  body-lead-mobile:
    fontSize: "1.125rem"
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
  caption:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.025em"
  price:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 500
    letterSpacing: "-0.025em"
    fontFeature: "tabular-nums"
rounded:
  mark: "2px"
  swatch: "3px"
  lg: "8px"
  device: "2.5rem"
  device-screen: "1.9rem"
spacing:
  sm: "8px"
  md: "12px"
  lg: "16px"
  gutter-mobile: "20px"
  gutter: "32px"
  row: "32px"
  block: "40px"
  column-gap: "48px"
  section-mobile: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  button-primary-compact:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0 14px"
    height: "36px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  mark-mine:
    backgroundColor: "{colors.mark-mine}"
    textColor: "{colors.ink}"
    rounded: "{rounded.mark}"
    padding: "0.05em 0.15em"
  mark-friends:
    backgroundColor: "{colors.mark-friends}"
    textColor: "{colors.ink}"
    rounded: "{rounded.mark}"
    padding: "0.05em 0.15em"
  mark-nostrverse:
    backgroundColor: "{colors.mark-nostrverse}"
    textColor: "{colors.ink}"
    rounded: "{rounded.mark}"
    padding: "0.05em 0.15em"
  phone:
    backgroundColor: "{colors.paper-2}"
    rounded: "{rounded.lg}"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: Boris

## Overview

**Creative North Star: "Popular Highlights"**

The page behaves like a page someone has already read and marked. Ink on ivory paper, a serif for anything meant to be read, a sans for anything meant to be operated, and three highlighter colors that appear only as marks on text (or as the legend swatches that explain them). The app proves itself by its output: a real passage carrying yellow, orange, and purple marks sits beside a real Android screenshot. Nothing on the page decorates; every colored pixel is either a highlight or a brand asset.

Density is editorial and generous. Sections are separated by hairline rules rather than backgrounds, lists are rows divided by the same rule, and the largest type is a serif greeting at 4.25rem. There are no cards, no shadows, no gradients as decoration, no icons. Dark mode is graphite (zinc) and follows the operating system; the marks turn translucent over it the way the Android app renders them.

Lineage: Kindle popular highlights and the Readwise daily review. Chosen as IMPECCABLE'S PICK over the assigned "Paperback Series" direction (seed key d20a4c30), built code-led with no comp. The rejected devices are the centered device-mockup hero and the icon-card feature grid.

**Key Characteristics:**
- Ivory paper and stone ink in light; zinc graphite and near-white ink in dark, OS-driven
- Three highlight levels (yellow mine, orange friends, purple nostrverse) are the only chroma the page adds
- Serif reads, sans steers: Source Serif 4 for headlines and passages, Inter for chrome, labels, and body
- Hairline rules structure everything; flat surfaces; 8px corners on the few boxes that exist
- Motion is drawing, never sliding: hero marks draw in once, the phone cross-dissolves its screens, and each feature illustration sketches its outline and fills in when it scrolls into view

## Colors

A two-tone paper-and-ink page with three highlighter hues that never leave the text.

### Primary
- **Mine Yellow** (`mark-mine`, edge `mark-mine-edge`): the highlight level "you". Also the page's single accent when only one mark is wanted: the hero subline word "highlighting", the featured price in Zaps, the CTA phrase, and `::selection`. In dark it becomes a 34% translucent band with a brighter edge.
- **Friends Orange** (`mark-friends`, edge `mark-friends-edge`): the highlight level "friends". Appears only on passage text and in the legend. 36% translucent in dark.
- **Nostrverse Purple** (`mark-nostrverse`, edge `mark-nostrverse-edge`): the highlight level "nostrverse". Appears only on passage text and in the legend. 38% translucent in dark.

### Neutral
- **Paper** (`paper`): the page ground, ivory in light and zinc-900 graphite in dark. Also the text color on primary buttons. Set as `theme-color` per scheme.
- **Paper 2** (`paper-2`): one tonal step off the ground. Used behind phone screenshots while they load and as the fill of the featured Zaps tier on wide screens. This is the only "surface" color; it never gets a border of its own.
- **Ink** (`ink`): headlines, passages, primary button fill, focus outline, mark text.
- **Ink 2** (`ink-2`): running body text, nav links at rest, captions, footer links.
- **Ink 3** (`ink-3`): footer group headings and fine print, the struck-through "Pricing", the underline color of inline links at rest.
- **Rule** (`rule`): every hairline: section dividers, list rows, the top rule above each list, the phone frame border, the figure rule above the hero passage.

### Named Rules
**The Marks-Only Chroma Rule.** Yellow, orange, and purple appear on this page only as a highlight mark on text or as a legend swatch explaining a mark. Buttons are ink, links are ink, headings are ink. The two cited exceptions are brand assets: the wordmark (`public/boris-logo.svg`, purple with an orange dot and yellow underline) and the Zapstore badge.

**The Darker Edge Rule.** A mark is a band with a 2px darker bottom edge of the same hue, like the marks in the Android app. Never a plain background color on a span.

**The OS Decides Rule.** Dark mode is `prefers-color-scheme` only. There is no toggle and no `.dark` class; Tailwind's `dark:` variant and the `:root` remap read the same media query. The dark palette is zinc, not a darkened ivory.

## Typography

**Display Font:** Source Serif 4 Variable (with Georgia, Times New Roman), self-hosted via `@fontsource-variable/source-serif-4/opsz.css` with `font-optical-sizing: auto`
**Body Font:** Inter Variable (with ui-sans-serif, system-ui), self-hosted via `@fontsource-variable/inter` plus the italic axis, with `font-feature-settings: "cv11", "ss01"`

**Character:** Serif reads, sans steers. Source Serif 4 is the same face the Android reader uses for article bodies, so every headline and passage on the site looks like something Boris would render. Inter is the operating layer: navigation, buttons, labels, prices, running body copy. The serif is always semibold (600) when it is a heading and regular (400) when it is a passage; Inter never goes above medium (500).

### Hierarchy
- **Display** (serif 600, 2.5rem / 3.75rem / 4.25rem at base / sm / lg, line-height 1.05, tracking -0.02em): the hero greeting only. The CTA headline uses the same voice one step down (2.25rem / 3rem / 3.75rem, line-height 1.05).
- **Section title** (`SectionHeading`): the same display ramp as the hero h1 (2.5rem / 3.75rem / 4.25rem, serif 600, leading 1.05, tracking -0.02em), sitting on a baseline with an optional Inter intro (`text-base sm:text-lg`) of at most `max-w-md`. Every screen opens like the first one did.
- **Headline** (serif 600, 1.875rem / 2.25rem, tracking -0.025em): reserved for sub-headings that need to outrank a title but stay under the section title.
- **Passage** (serif 400, 1.25rem / 1.75rem, line-height 1.55): quoted reading text that carries marks. The CTA's marked line uses 1.5rem / 1.875rem.
- **Title** (serif 600, 1.5rem, tracking -0.025em): feature titles, FAQ questions, Zaps tier names. Always followed by body at `mt-3`.
- **Body lead** (Inter 400, 1.125rem / 1.25rem, line-height 1.625, ink-2, `max-w-xl`): the hero subline.
- **Body** (Inter 400, 15px, line-height 1.625, ink-2): feature paragraphs, FAQ answers, tier perks. Paragraph stacks use `space-y-3`.
- **Label** (Inter 500, 0.875rem): buttons, credits, footer headings at 0.75rem with 0.025em tracking. Nav links are the same size at 400 in ink-2.
- **Price** (Inter 500, 1.875rem, tabular-nums, tracking -0.025em): the sats amounts in Zaps.

`h1`, `h2`, `h3` get `text-wrap: balance`; `p` gets `text-wrap: pretty`. Underlines sit at `text-underline-offset: 0.18em` with 1px thickness.

### Named Rules
**The Serif Reads, Sans Steers Rule.** If a reader would read it (headline, passage, feature title, FAQ question), it is Source Serif 4. If a reader would tap, scan, or compare it (nav, button, label, price, body copy), it is Inter. No third face.

**The No Eyebrow Rule.** Headings stand alone. No kickers, no eyebrows, no section numbers, no uppercase tracking labels above a headline. The Zaps heading's struck-through "Pricing" is copy, not a label pattern.

## Layout

One column of content inside a `max-w-6xl` (72rem) container with `px-5` (20px) gutters on mobile and `sm:px-8` (32px) from 640px up. The container is the same in the nav, every section, and the footer, so all left edges align.

The hero is a screen: its grid is `min-h-[calc(100svh-4rem)]` (viewport minus the 64px nav) with `lg:items-center`, so the first view is the greeting and the phone, nothing else. Features is many screens tall by nature. Everything after it (credits, Zaps, FAQ, CTA) takes only the height its content needs; forcing those to full height left too much empty paper. Sections are stacked and separated by a 1px `rule` on their bottom edge (`border-b border-rule`); there is no background change between sections. Vertical padding is `py-16` (64px) on mobile and `sm:py-24` (96px) from 640px. The hero uses `pt-14 / sm:pt-20 / lg:pt-24` and no bottom padding on its image column so the phone can be cut by the section rule. The credits section is shorter (`py-12 / sm:py-16`), as is the footer (`py-14 / sm:py-16`).

Inside a section, lists are rows: a `border-t border-rule` above the list, each item with `border-b border-rule` and `py-8` (32px). Features run 1 / 2 / 3 columns at base / sm / lg with `gap-x-10` (40px); FAQ runs 1 / 3 at base / md; Zaps runs 1 / 3 at base / sm with vertical rules (`sm:border-r`) between tiers and `sm:px-8` internal padding instead of row rules. The hero is a 12-column grid at lg: text spans 7, the phone spans 5, with `gap-x-12` (48px).

The 8px module governs small spacing: `gap-2` (8), `mt-3` (12), `mt-4` / `gap-4` (16), `mt-6` (24), `mt-8` (32). Section heading blocks end with `mb-10 / sm:mb-14`.

Responsive behavior: nav links hide below 640px and only the wordmark and the Android button remain; the screenshot strip is a full-bleed marquee (`w-64` frames, `sm:w-72`) at every width; the hero phone stacks under the text at a fixed `h-[22rem] / sm:h-[28rem]` window and stretches to the column height at lg. Sections have `scroll-mt-16` to clear the 64px nav when jumped to; `scroll-behavior: smooth` is on unless reduced motion is preferred.

### Named Rules
**The Rule Is the Cut Rule.** Where an image must end, it ends at a hairline: the hero phone is hard-cropped at the section rule. Where the crop line would move with column width (the feature strip's 2:3 frames), the frame fades into the paper instead (`fade-bottom`, mask from 62% to transparent), so no line of screenshot text is ever sliced.

## Elevation & Depth

This system is flat. There are no shadows anywhere, no blur, no glass. Depth is conveyed by exactly two devices: the hairline `rule` that divides regions, and the single tonal step to `paper-2` (used behind screenshots and on the featured Zaps tier). Phone frames are a 1px `rule` border on a `paper-2` fill, which reads as a screen laid on the page rather than a device floating above it.

### Named Rules
**The Flat Paper Rule.** Nothing lifts off the page. If a region needs to be distinguished, divide it with a `rule` or step it to `paper-2`; never shadow it.

## Shapes

Gently rounded and mostly rectilinear. Every box that exists uses an 8px corner (`rounded-lg`, `.phone` at 0.5rem): buttons, the Zapstore badge's hit area, phone frames. Marks have a 2px corner and legend swatches 3px, so the highlighter edge reads as ink on paper rather than as a pill. Focus outlines have a 2px corner.

Marks are the signature shape: a text-height band with a darker 2px bottom edge, `padding: 0.05em 0.15em`, `margin: 0 -0.05em` so the band overhangs the glyphs slightly, and `box-decoration-break: clone` so a mark that wraps closes cleanly on each line. The band is a `background-image` so it can be drawn in by animating `background-size`.

Screenshots are hard-edged inside their frame (`object-fit: cover`, `object-position: top`); the frame's rounded corner and hairline are the only chrome. There is no device bezel, no notch, no drop shadow.

## Components

### Buttons
- **Shape:** 8px corners (`rounded-lg`), fixed height, horizontal padding, Inter 500 at 0.875rem, `no-underline`.
- **Primary:** ink fill, paper text, `h-11 px-5` (44px / 20px) in Zaps; a compact `h-9 px-3.5` (36px / 14px) in the nav.
- **Secondary:** transparent, ink text, 1px border at `ink/25` (25% ink). Same dimensions as primary.
- **Hover / Focus:** hover is `opacity-85` over 150ms; focus is the global 2px ink outline with 3px offset. No color change, no lift.
- **Zapstore badge:** the official `get-it-on-zapstore.svg` at `h-14 / sm:h-[3.75rem]` acts as the primary offer in hero and CTA. It is the only button-like element that carries brand chroma.

### GetBoris (the offer)
The Zapstore badge with a 0.875rem Inter line beside it (below it on mobile): "Also as an APK on GitHub, or read in the browser." Secondary paths are `link-inline` text links, never a second button. Reused verbatim in hero and CTA.

### Inline Links
- **Style (`link-inline`):** inherit color, underlined, underline colored `ink-3`, offset 0.18em, 1px thick.
- **Hover:** underline color transitions to `currentColor` over 150ms. Never blue.
- **Chrome links (nav, footer, credits):** `no-underline`, `ink-2` at rest, `ink` on hover over 150ms.

### Navigation
A 64px bar (`h-16`) with the wordmark at `h-9` on the left, the link list (Inter 0.875rem, ink-2, `gap-6`) and the compact primary button on the right, closed with a bottom `rule`. Links hide below 640px. No sticky behavior, no blur, no background.

### Section Heading
Serif headline on the left, optional Inter intro (`max-w-md`, ink-2) on the right, aligned to the baseline on `sm:` (`items-end justify-between`) and stacked on mobile with `gap-4`. Bottom margin `mb-10 / sm:mb-14`. No kicker above, no rule below; the list's own `border-t` supplies the line.

### List Rows
FAQ and tiers share one pattern: `border-t` on the list, `border-b` on each row, `py-8`, a serif title at 1.5rem, and body at 15px ink-2 starting at `mt-3`. Tiers swap the row rules for vertical rules on `sm:`. Feature rows use the same rules at a larger rhythm (see Feature Illustrations).

### Phone Frame
- **Style (`.phone`):** block, 0.5rem corners, 1px `rule` border, `paper-2` fill, `overflow: hidden`; the image covers from the top.
- **Hero (`.device` + `.device-screen`):** an Android frame drawn in CSS: matte `#0c0c0e` bezel with 0.625rem padding and 2.5rem corners, a hairline `ink` at 18% around it, a punch-hole camera from `::before`, and a status-bar strip (2.25rem) that continues the screenshot's own top color (`#f3edf8` light, `#18181a` dark). No gloss, no side buttons, no shadow. `max-w-[20rem] / lg:max-w-[24rem]`, absolutely positioned at the top of a clipped column, cut by the section rule. Inside, `.slideshow` cross-dissolves four screens per theme in journey order (light: read, highlights, text-to-speech, highlight settings; dark: home, read, highlights, search) (CSS only: `--d` dwell of 4s, `--i` index as negative delay, 5% fades, pauses on hover, first slide only under reduced motion). Light and dark sets swap via `dark:hidden` / `dark:block`. On pointer devices the frame tilts toward the cursor (up to 7deg each way, `perspective(1200px)`, origin at 50% 25%) and scales to 1.03; a small script in `Hero.astro` feeds `--rx` / `--ry`, CSS does the rest. Leaving settles back over 700ms. No shadow appears; the bezel and the perspective carry the depth. Off under reduced motion and on touch. The clipping column uses `clip-path: inset(0 -4rem)` so the tilt is only cut top and bottom.
- **Zaps CTA:** below the tiers, above a `border-t` rule with `pt-10`: an `h-12` ink button ("Zap Boris") linking to `nostr:<npub>` so the visitor's own client does the zapping, plus a small Inter note pointing people without a client to nostr-resources.com. Constants live in `src/config/links.ts`.
- **Strip (`.marquee`):** `aspect-[2/3]` frames with `fade-bottom`, lazy-loaded. One strip per theme (`dark:hidden` / `hidden dark:block` on the wrapper): nine light screens, twelve dark ones, each set ordered like a first session (arrive, find, read, mark, tune, look back). Never mix themes in one strip. The list is rendered twice (second copy `aria-hidden`) and translates to -50% over `--marquee-duration` (6s per screen, about 40px/s), so the loop is seamless. Items space with `mr-5` rather than `gap` so both halves measure the same. The viewport edges fade via an 8% mask. Pauses on hover; under reduced motion it stands still, loses the edge mask, and scrolls by hand.
- Every screenshot ships from `public/*.webp` with a `.webp.json` provenance sidecar and descriptive alt text.

### Feature Illustrations
- Features run as alternating two-column rows (`md:grid-cols-2`, `gap-16`, `py-24`, hairline between rows): text in a `max-w-md` column, the undraw-style SVG from `public/*.svg` centered in the other at `h-72` (`h-56` on mobile), sides swapping each row via `md:order-last`. Decorative (`alt=""`), lazy.
- Idle state is `grayscale`, so their purple and pink stay out of the page's chroma; hovering the row (`group-hover:grayscale-0`, 300ms filter transition) releases the color.
- Dark scheme adds `invert hue-rotate-180`, which lifts the dark linework to light and keeps the purple recognizably purple on hover.

### Highlight Marks (signature)
Three utilities, `mark-mine`, `mark-friends`, `mark-nostrverse`, each a `linear-gradient(to top, edge 0 2px, band 2px)` painted as `background-image` at `100% 100%`, ink text, 2px corners, cloned across line breaks. The legend is a 12px square (`h-3 w-3`, 3px corner) carrying the same utility beside a lowercase label in ink-2 at 0.875rem.

Motion: adding `mark-draw` animates `background-size` from `0% 100%` to `100% 100%` over 0.6s with `cubic-bezier(0.16, 1, 0.3, 1)`, `both` fill, delayed by `--mark-delay`. The hero passage staggers its three marks at 0.3s / 0.7s / 1.1s. Under `prefers-reduced-motion: reduce` the animation is removed and the marks are simply present. The hero phone cross-dissolves its screenshots and the feature strip drifts left (see Phone Frame). Feature illustrations are inlined SVG (`src/lib/illustration.ts`); once an IntersectionObserver marks one `is-inview`, each shape strokes its outline along its length (`pathLength="1"`, dashoffset 1 to 0, 0.9s) and then its fill settles (0.6s), staggered across 1.4s by `--i / --n`. Under reduced motion the marks, slides, and shapes are simply present. Every other transition is a 150ms hover (opacity, text color, underline color) plus a 200 to 300ms grayscale release on illustrations and credits logos.

### Browser Surfaces
`::selection` is the mine-yellow band with dark ink text in both schemes. `:focus-visible` is a 2px ink outline, 3px offset, 2px corner. `theme-color` is `paper` per scheme. Prices use `tabular-nums`. Credits logos sit at `grayscale` until hovered.

## Do's and Don'ts

### Do:
- **Do** paint highlights as a band with a 2px darker bottom edge (`mark-*`), cloned across wraps, and keep the text ink.
- **Do** divide with 1px `rule` hairlines: between sections, above lists, between rows. Let the rule be the cut when an image must end.
- **Do** set anything readable in Source Serif 4 (600 for headings, 400 for passages) and anything operable in Inter (400 for body, 500 for labels).
- **Do** keep the `max-w-6xl` container with `px-5 / sm:px-8` gutters and `py-16 / sm:py-24` section padding so every left edge aligns.
- **Do** let dark mode follow `prefers-color-scheme`, remapping `paper`, `ink`, and `rule` to zinc and making the mark bands translucent with `color-mix`.
- **Do** honor `prefers-reduced-motion`: no draw-in, no smooth scroll.
- **Do** ship every screenshot as a `.webp` with its `.webp.json` provenance sidecar and real alt text.

### Don't:
- **Don't** use cards. Lists are rows divided by rules; the only bordered box is a phone screenshot frame.
- **Don't** use shadows, blur, or glass. The page is flat paper.
- **Don't** use gradients as decoration. The mark's two-stop gradient is a paint technique for a band with an edge, not a visible gradient.
- **Don't** put yellow, orange, or purple on anything but a mark or a legend swatch. Buttons, links, and headings are ink. Brand assets (wordmark, Zapstore badge) are the cited exceptions.
- **Don't** add eyebrows, kickers, section numbers, or uppercase tracking labels above headings.
- **Don't** add icons, device bezels, or a centered device-mockup hero. Real screenshots in a hairline frame carry the proof.
- **Don't** add a dark-mode toggle or a `.dark` class; the OS decides.
- **Don't** add entrance motion beyond the hero marks' single draw-in, or any transition longer than 200ms.
- **Don't** make the web app an equal button; it stays an inline text link beside the Android offer.
