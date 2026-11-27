[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/smrfkeenam-hue/makefun-black-friday-deal-finder-01/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/smrfkeenam-hue/makefun-black-friday-deal-finder-01/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

# DealHunt — Black Friday 2026 deal finder

DealHunt is a static deal finder for Black Friday 2026: 19 real deals across
4 stores (Best Buy, Walmart, Dell, Amazon), worth $4,190.98 in total savings.
Every deal shows its product, store, sale price, usual price, discount, a
link to the product at the store, and when its price was checked — plus an
honest signal (new low, strong price, or routine deal) with the evidence.

Every price was checked by hand on 27 November 2026, Black Friday, at the
store's own listing or in a deals source that names the store; each card
cites where its price was read. Discounts are computed from the two prices
shown, so the numbers always add up.

## Use it

- Search the deals, filter by category, store and discount, and sort by best
  deal, biggest saving, or price. The view is shareable: the filters live in
  the page URL.
- Serve the site: `python3 -m http.server` from `app/`, then open
  http://localhost:8000 — or any static server with `app/` at its root.
- It works on a phone as well as a desktop, and loads nothing from the
  network: every script, stylesheet and deal is a file under `app/`.

## Files

- `app/index.html` — the page.
- `app/styles.css` — the look: navy header, amber accents, card grid.
- `app/deals.js` — the 19 checked deals and their sources.
- `app/filters.js` — search, filter, sort and money maths (pure functions).
- `app/render.js` — builds the toolbar and the cards from the data.
- `main.ts` — copies `app/` and `screenshots/` to the output directory and
  writes `dossier.json` with `buildDossier` from `vendor/makefun-frontend.ts`.
- `screenshots/` — renders of the site in a browser.
- `LICENSE` — MIT.

## Hand in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/app/`, `out/screenshots/` and `out/dossier.json`.
