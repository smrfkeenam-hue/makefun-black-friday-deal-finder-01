// DealHunt filtering, sorting and money maths.
//
// Pure functions only: nothing here touches the DOM, so the same rules run
// in the page and in any check. Discounts are always computed from the two
// prices a deal carries, so a card can never show a discount the prices
// do not support.

import { CATEGORIES, STORES } from "./deals.js";

// Money shown with two decimals and a thousands separator: $1,199.99.
export function formatMoney(amount) {
  const fixed = amount.toFixed(2);
  const [whole, cents] = fixed.split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$" + grouped + "." + cents;
}

// Whole dollars saved, rounded to cents: usual minus sale.
export function dollarsSaved(deal) {
  return Math.round((deal.usual - deal.sale) * 100) / 100;
}

// Whole-percent discount, rounded: 449.99 off 799.99 is 44%.
export function discountPercent(deal) {
  return Math.round((1 - deal.sale / deal.usual) * 100);
}

// Whole dollars saved across a list of deals, rounded to cents.
export function totalSavings(deals) {
  const total = deals.reduce((sum, deal) => sum + dollarsSaved(deal), 0);
  return Math.round(total * 100) / 100;
}

// The discount bands the filter offers.
export const MIN_DISCOUNTS = [
  { value: 0, label: "Any discount" },
  { value: 25, label: "25% off or more" },
  { value: 40, label: "40% off or more" },
  { value: 50, label: "50% off or more" },
];

// The sort orders the finder offers, in menu order.
export const SORTS = [
  { value: "best", label: "Best deals first" },
  { value: "savings", label: "Biggest $ savings" },
  { value: "price-low", label: "Lowest price" },
  { value: "price-high", label: "Highest price" },
];

// A deal matches a search box when the text appears in its name, its
// description, its store or its category.
export function matchesQuery(deal, query) {
  const needle = query.trim().toLowerCase();
  if (needle === "") {
    return true;
  }
  const haystack = [deal.name, deal.blurb, deal.store, deal.category]
    .join(" ")
    .toLowerCase();
  return haystack.includes(needle);
}

// Keep only the deals that pass every active filter. Each filter set to its
// "all" value passes everything.
export function applyFilters(deals, filters) {
  return deals.filter((deal) => {
    if (!matchesQuery(deal, filters.query)) {
      return false;
    }
    if (filters.category !== "All" && deal.category !== filters.category) {
      return false;
    }
    if (filters.store !== "All" && deal.store !== filters.store) {
      return false;
    }
    if (discountPercent(deal) < filters.minDiscount) {
      return false;
    }
    return true;
  });
}

// Order a filtered list. "Best deals first" ranks by discount percent,
// breaking ties by dollars saved, so the deepest real cut leads.
export function sortDeals(deals, sortKey) {
  const ranked = deals.slice();
  if (sortKey === "savings") {
    ranked.sort((a, b) => dollarsSaved(b) - dollarsSaved(a));
  } else if (sortKey === "price-low") {
    ranked.sort((a, b) => a.sale - b.sale);
  } else if (sortKey === "price-high") {
    ranked.sort((a, b) => b.sale - a.sale);
  } else {
    ranked.sort(
      (a, b) =>
        discountPercent(b) - discountPercent(a) ||
        dollarsSaved(b) - dollarsSaved(a),
    );
  }
  return ranked;
}

// Read the finder's state from the page URL, so a filtered view can be
// shared as a link. Unknown values fall back to the defaults.
export function readStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "";
  const category = params.get("cat") || "All";
  const store = params.get("store") || "All";
  const minDiscount = Number(params.get("off") || 0);
  const sort = params.get("sort") || "best";
  return {
    query,
    category: CATEGORIES.includes(category) ? category : "All",
    store: STORES.includes(store) ? store : "All",
    minDiscount: MIN_DISCOUNTS.some((band) => band.value === minDiscount)
      ? minDiscount
      : 0,
    sort: SORTS.some((option) => option.value === sort) ? sort : "best",
  };
}

// Write the finder's state back into the page URL without reloading, so
// the address bar always shows the view on screen.
export function writeStateToUrl(state) {
  const params = new URLSearchParams();
  if (state.query !== "") {
    params.set("q", state.query);
  }
  if (state.category !== "All") {
    params.set("cat", state.category);
  }
  if (state.store !== "All") {
    params.set("store", state.store);
  }
  if (state.minDiscount !== 0) {
    params.set("off", String(state.minDiscount));
  }
  if (state.sort !== "best") {
    params.set("sort", state.sort);
  }
  const query = params.toString();
  const next = window.location.pathname + (query === "" ? "" : "?" + query);
  window.history.replaceState(null, "", next);
}
