# JSW Motors — MES Login

A pixel-faithful build of the JSW Motors *Manufacturing Execution System* sign-in
screen: a full-bleed shop-floor backdrop, the angled white brand badge, the hero
message with four capability cards, the MES login card with plant selection, and
the operations status bar.

## Stack

- React 19 + TypeScript
- Vite 8
- Plain CSS with custom properties and container queries (no UI framework)
- Self-hosted Inter (`@fontsource-variable/inter`), so the page renders
  identically offline

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # type-check + production bundle into dist/
npm run preview  # serve the production bundle
npm run lint     # oxlint
```

## Layout

```
src/
  App.tsx                    entry surface
  index.css                  reset + brand tokens (colour, radius, focus ring)
  assets/factory-bg.jpg      assembly-line backdrop
  components/
    LoginPage.tsx/.css       page shell: backdrop, angled brand badge, stage
    HeroPanel.tsx/.css       headline, promises, capability cards
    LoginCard.tsx/.css       MES card: fields, plant select, submit, navy foot
    StatusBar.tsx/.css       bottom operations bar
    JswLogo.tsx              JSW Motors wordmark (SVG)
    SkylineArt.tsx           line-art strip inside the card foot
    Icons.tsx                every inline icon used on the page
  data/plants.ts             plant list feeding the "Select Plant" control
```

## Behaviour

- Required-field validation for username, password and plant, with inline
  messages, invalid styling and focus moved to the first offending field.
- Password visibility toggle plus a Caps Lock hint.
- "Remember me" stores the username and plant in `localStorage` and restores
  them on the next visit.
- Submit shows a spinner and then a status message; `handleSubmit` in
  `LoginCard.tsx` holds the stand-in delay to replace with the real MES auth
  call.
- Status messages use `role="status"`, fields carry `aria-invalid` and
  `aria-describedby`, and every control has a label and a visible focus ring.

## Responsive behaviour

The desktop composition is locked to one screen: the page is `100dvh`, the card
sizes itself with container-query units so its internal proportions hold from
1280px to 4K, and the card body scrolls internally if validation text grows.
Below 1080px the layout stacks with the login card first; the status bar wraps.

## Assets

`src/assets/factory-bg.jpg` is the shop-floor photograph and the JSW Motors
wordmark is reproduced as vector art in `JswLogo.tsx` so it stays sharp at every
size. To drop in the official brand files, replace the JPEG (keep the filename)
and swap the SVG body in `JswLogo.tsx`.
