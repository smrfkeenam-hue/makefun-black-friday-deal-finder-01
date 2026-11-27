// DealHunt rendering: builds the toolbar, the deal cards and the counts
// from the deal data, and wires the search box and filters to re-render.
//
// The page never fetches anything: every card is built from the local
// deals.js data, and the store links are plain anchors that open the store.

import { CATEGORIES, CHECKED_DATE, DEALS, STORES } from "./deals.js";
import {
  MIN_DISCOUNTS,
  SORTS,
  applyFilters,
  discountPercent,
  dollarsSaved,
  formatMoney,
  readStateFromUrl,
  sortDeals,
  totalSavings,
  writeStateToUrl,
} from "./filters.js";

// Two-letter code shown on each card's coloured tile, one per category.
const CATEGORY_CODES = {
  Tech: "TE",
  Gaming: "GA",
  Audio: "AU",
  TVs: "TV",
  Wearables: "WE",
  Kitchen: "KI",
  Home: "HO",
  Toys: "TO",
};

// The words and the styling class for each deal signal.
const SIGNAL_LABELS = {
  "new-low": { text: "NEW LOW", className: "signal-new-low" },
  strong: { text: "STRONG PRICE", className: "signal-strong" },
  routine: { text: "ROUTINE DEAL", className: "signal-routine" },
};

// Escape the few text fields that land in HTML, so a stray character in a
// product name can never break the page.
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// One deal card. Prices, savings and discount all come from the deal's two
// prices, so the numbers on the card always add up.
function dealCardHtml(deal) {
  const signal = SIGNAL_LABELS[deal.signal];
  const tileCode = CATEGORY_CODES[deal.category] || "DE";
  const saved = dollarsSaved(deal);
  const percent = discountPercent(deal);
  const note = deal.note
    ? `<p class="deal-note">${escapeHtml(deal.note)}</p>`
    : "";
  return `
  <article class="deal-card">
    <div class="deal-top">
      <span class="deal-tile deal-tile-${deal.category.toLowerCase()}" aria-hidden="true">${tileCode}</span>
      <div class="deal-heading">
        <h3>${escapeHtml(deal.name)}</h3>
        <p class="deal-store">${escapeHtml(deal.store)} &middot; ${escapeHtml(deal.category)}</p>
      </div>
      <span class="deal-signal ${signal.className}">${signal.text}</span>
    </div>
    <p class="deal-blurb">${escapeHtml(deal.blurb)}</p>
    <div class="deal-prices">
      <span class="deal-sale">${formatMoney(deal.sale)}</span>
      <span class="deal-usual">${formatMoney(deal.usual)}</span>
      <span class="deal-save">Save ${formatMoney(saved)} (${percent}%)</span>
    </div>
    <p class="deal-evidence">${escapeHtml(deal.evidence)}</p>
    ${note}
    <p class="deal-checked">Checked ${CHECKED_DATE} &middot; ${escapeHtml(deal.source)}</p>
    <a class="deal-link" href="${escapeHtml(deal.url)}" target="_blank" rel="noopener">View deal at ${escapeHtml(deal.store)} &rarr;</a>
  </article>`;
}

// The header figures: how many deals, how many stores, and the total of
// every saving on the page.
function renderStats() {
  const stores = new Set(DEALS.map((deal) => deal.store)).size;
  const totalSaved = totalSavings(DEALS);
  const stats = document.getElementById("stats");
  stats.innerHTML = `
    <span><strong>${DEALS.length}</strong> deals</span>
    <span><strong>${stores}</strong> stores</span>
    <span><strong>${formatMoney(totalSaved)}</strong> total savings</span>
    <span>Checked <strong>${CHECKED_DATE}</strong></span>`;
}

// Category chips: All plus one per category, pressed state shows the pick.
function renderCategoryChips(state, onPick) {
  const chips = document.getElementById("category-chips");
  const choices = ["All", ...CATEGORIES];
  chips.innerHTML = choices
    .map(
      (category) =>
        `<button type="button" class="chip${state.category === category ? " chip-active" : ""}" data-category="${category}" aria-pressed="${state.category === category}">${category}</button>`,
    )
    .join("");
  chips.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => onPick(button.dataset.category));
  });
}

// Fill a <select> from a list of {value, label} options and pick one.
function fillSelect(select, options, value) {
  select.innerHTML = options
    .map(
      (option) =>
        `<option value="${option.value}"${String(option.value) === String(value) ? " selected" : ""}>${option.label}</option>`,
    )
    .join("");
}

// Draw the filtered, sorted deals and the count line. An empty result gets
// a plain message and a reset button instead of a blank grid.
function renderDeals(state) {
  const visible = sortDeals(applyFilters(DEALS, state), state.sort);
  const grid = document.getElementById("deal-grid");
  const count = document.getElementById("result-count");
  count.textContent =
    visible.length === DEALS.length
      ? `Showing all ${DEALS.length} deals`
      : `Showing ${visible.length} of ${DEALS.length} deals`;
  if (visible.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>No deals match that search and filter.</p>
        <button type="button" id="reset-filters">Clear search and filters</button>
      </div>`;
    document
      .getElementById("reset-filters")
      .addEventListener("click", () => window.resetFinder());
    return;
  }
  grid.innerHTML = visible.map(dealCardHtml).join("");
}

// Re-render after any state change, and keep the URL showing the view.
function update(state) {
  renderDeals(state);
  writeStateToUrl(state);
}

// Start the finder: read the state from the URL, build the toolbar once,
// then draw the deals.
function startFinder() {
  const state = readStateFromUrl();
  const search = document.getElementById("search");
  const storeSelect = document.getElementById("store-filter");
  const discountSelect = document.getElementById("discount-filter");
  const sortSelect = document.getElementById("sort");

  search.value = state.query;
  const pickCategory = (category) => {
    state.category = category;
    renderCategoryChips(state, pickCategory);
    update(state);
  };
  renderCategoryChips(state, pickCategory);
  fillSelect(
    storeSelect,
    [{ value: "All", label: "All stores" }].concat(
      STORES.map((store) => ({ value: store, label: store })),
    ),
    state.store,
  );
  fillSelect(discountSelect, MIN_DISCOUNTS, state.minDiscount);
  fillSelect(sortSelect, SORTS, state.sort);

  search.addEventListener("input", () => {
    state.query = search.value;
    update(state);
  });
  storeSelect.addEventListener("change", () => {
    state.store = storeSelect.value;
    update(state);
  });
  discountSelect.addEventListener("change", () => {
    state.minDiscount = Number(discountSelect.value);
    update(state);
  });
  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    update(state);
  });

  // The empty state's reset button calls back here.
  window.resetFinder = () => {
    state.query = "";
    state.category = "All";
    state.store = "All";
    state.minDiscount = 0;
    state.sort = "best";
    search.value = "";
    storeSelect.value = "All";
    discountSelect.value = "0";
    sortSelect.value = "best";
    renderCategoryChips(state, pickCategory);
    update(state);
  };

  renderStats();
  renderDeals(state);
}

startFinder();
