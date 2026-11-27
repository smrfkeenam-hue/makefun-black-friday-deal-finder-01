// DealHunt deal data.
//
// Every deal below was found and checked by hand on 27 November 2026
// (Black Friday). Each price was read at the store's own listing, or in a
// deals source that names the store; the "source" field says which. The
// sale price and the usual price are the two numbers the store showed, and
// the discount is computed from them, never typed in by hand.
//
// Signal meanings:
//   new-low  - the lowest price ever seen for this item at this store.
//   strong   - a deep cut on a genuinely good price, with demand to match.
//   routine  - a real discount, but a modest one; worth knowing, not a rush.

export const CHECKED_DATE = "27 Nov 2026";

export const DEALS = [
  {
    id: "hp-omnibook-5-oled",
    name: "HP OmniBook 5 14-inch 2K OLED Touch Laptop",
    blurb: "14-inch 2K OLED touchscreen laptop, Intel Core 5, 8GB RAM, 256GB SSD.",
    category: "Tech",
    store: "Best Buy",
    url: "https://www.bestbuy.com/product/hp-omnibook-5-14-2k-oled-touchscreen-laptop-intel-core-5-series-3-2026-8gb-memory-256gb-storage-starlit-blue/J3KSW748W6/sku/6690110",
    sale: 449.99,
    usual: 799.99,
    signal: "strong",
    evidence:
      "Doorbuster: $350 off Best Buy's comparable value, and $201 less than the same laptop direct from HP.",
    source: "Best Buy listing",
  },
  {
    id: "dell-xps-13",
    name: "Dell XPS 13 13.4-inch Touch Laptop (Core 5 320)",
    blurb: "13.4-inch QHD+ touchscreen ultrabook, Intel Core 5 320, 8GB RAM, 256GB SSD.",
    category: "Tech",
    store: "Dell",
    url: "https://www.dell.com/en-us/shop/laptop-computers/spd/xps13dx13260/dx13260_reg_03",
    sale: 549.99,
    usual: 749.99,
    signal: "new-low",
    evidence:
      "Lowest price of the year for this XPS 13 config, $200 off Dell's $749.99 list. Sale ends 30 Nov.",
    source: "Dell Black Friday sale, reported by 9to5Toys and DealNews",
  },
  {
    id: "switch-2-mario-kart-bundle",
    name: "Nintendo Switch 2 + Mario Kart World Bundle",
    blurb: "Switch 2 console plus a full Mario Kart World download and 3 months of Nintendo Switch Online.",
    category: "Gaming",
    store: "Best Buy",
    url: "https://www.bestbuy.com/product/switch-2-mario-kart-world-bundle/6689812",
    sale: 499.99,
    usual: 549.99,
    signal: "strong",
    evidence:
      "Nintendo's official Black Friday bundle: the console alone costs $499.99, so the game and the membership come free.",
    source: "Best Buy listing",
  },
  {
    id: "airpods-pro-3",
    name: "Apple AirPods Pro 3",
    blurb: "Apple's flagship earbuds with active noise cancelling, live translation and heart-rate sensing.",
    category: "Audio",
    store: "Amazon",
    url: "https://www.amazon.com/dp/B0FQFB8FMG",
    sale: 149.0,
    usual: 249.0,
    signal: "new-low",
    evidence:
      "Lowest price ever tracked at Amazon, $20 below the previous low of $169.99. Sold by Amazon.com.",
    source: "Amazon listing, reported by MacRumors and 9to5Mac",
  },
  {
    id: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5 Noise Cancelling Headphones",
    blurb: "Flagship noise-cancelling over-ear headphones with a 30-hour battery.",
    category: "Audio",
    store: "Best Buy",
    url: "https://www.bestbuy.com/product/sony-wh-1000xm5-wireless-noise-cancelling-over-the-ear-headphones-black/J7XSRH5CXG/sku/6505727",
    sale: 169.99,
    usual: 398.0,
    signal: "new-low",
    evidence:
      "Doorbuster at 57% off the $398 comparable value; the first time this flagship has sold below $170.",
    source: "Best Buy listing",
  },
  {
    id: "beats-studio-pro",
    name: "Beats Studio Pro Wireless Headphones",
    blurb: "Wireless over-ear headphones with active noise cancelling and a 40-hour battery.",
    category: "Audio",
    store: "Walmart",
    url: "https://www.walmart.com/ip/Beats-by-Dr-Dre-Studio-Pro-Wireless-Headphones-Matte-White-Bundle/14280620660",
    sale: 99.0,
    usual: 299.0,
    signal: "new-low",
    evidence:
      "Best price seen anywhere: $40 under Best Buy and Target for the same headphones.",
    source: "Walmart listing",
    note: "Matte White and White & Black at $99; other colours $149.95.",
  },
  {
    id: "lg-b6-oled-48",
    name: "LG 48-inch B6 OLED 4K Smart TV",
    blurb: "48-inch OLED 4K smart TV with perfect blacks, the small-room OLED pick.",
    category: "TVs",
    store: "Best Buy",
    url: "https://www.bestbuy.com/product/lg-48-class-b6-oled-ai-4k-smart-webos-tv-with-perfect-black-vivid-color-and-magic-remote-2026/JJ8VPZZCTJ/sku/6679051",
    sale: 599.99,
    usual: 1199.99,
    signal: "strong",
    evidence:
      "Half price for a 48-inch OLED, and this size is exclusive to Best Buy.",
    source: "Best Buy listing",
  },
  {
    id: "samsung-s84h-oled-65",
    name: "Samsung 65-inch S84H OLED 4K Smart TV",
    blurb: "65-inch OLED 4K smart TV, 120Hz, Samsung Vision AI.",
    category: "TVs",
    store: "Best Buy",
    url: "https://www.bestbuy.com/product/samsung-65-class-s84h-series-oled-4k-uhd-samsungvision-ai-smart-tizen-tv-2026/JJGRF87Q6W",
    sale: 899.99,
    usual: 2099.99,
    signal: "new-low",
    evidence:
      "$100 below the last front-page deal price for this TV; 57% off the $2,099.99 comparable value.",
    source: "Best Buy listing",
  },
  {
    id: "tcl-s4cf-65",
    name: "TCL 65-inch S4CF 4K Fire TV",
    blurb: "65-inch 4K HDR smart TV with Fire TV built in.",
    category: "TVs",
    store: "Best Buy",
    url: "https://www.bestbuy.com/product/tcl-65-s4cf-series-4k-uhd-hdr-smart-tv-with-fire-tv-2026/J36QYTHZVP/sku/6687112",
    sale: 229.99,
    usual: 469.99,
    signal: "new-low",
    evidence:
      "$40 less than the last front-page deal price; Best Buy's best-selling 65-inch TV.",
    source: "Best Buy listing",
  },
  {
    id: "vizio-quantum-75",
    name: "VIZIO 75-inch Quantum 4K QLED Smart TV",
    blurb: "75-inch Quantum 4K QLED smart TV, limited edition.",
    category: "TVs",
    store: "Walmart",
    url: "https://www.walmart.com/ip/VIZIO-75-Class-Class-Quantum-4K-QLED-HDR-Limited-Edition-Smart-TV-NEW-2026-VQD75X-10/20164274962",
    sale: 348.0,
    usual: 428.0,
    signal: "routine",
    evidence:
      "Good value for a 75-inch QLED at $348, rated 4.8 stars, but only 19% off, so not a blowout.",
    source: "Walmart listing",
  },
  {
    id: "tcl-roku-55",
    name: "TCL 55-inch 4K HDR Smart Roku TV",
    blurb: "55-inch 4K HDR smart Roku TV, limited edition.",
    category: "TVs",
    store: "Walmart",
    url: "https://www.walmart.com/ip/TCL-55-4K-UHD-HDR-Smart-Roku-TV-New-Limited-Edition-55S41CR/20258610909",
    sale: 168.0,
    usual: 198.0,
    signal: "routine",
    evidence:
      "Cheapest 55-inch 4K TV at Walmart this Black Friday, 10,000+ bought, but only 15% off.",
    source: "Walmart listing",
  },
  {
    id: "apple-watch-ultra-3",
    name: "Apple Watch Ultra 3 (GPS + Cellular, 49mm)",
    blurb: "49mm titanium watch with satellite SOS and a 42-hour battery.",
    category: "Wearables",
    store: "Best Buy",
    url: "https://www.bestbuy.com/product/apple-watch-ultra-3-gps-cellular-49mm-titanium-case-with-black-alpine-loop-medium-black-2025/6572974",
    sale: 549.0,
    usual: 799.0,
    signal: "strong",
    evidence:
      "$250 off Apple's newest Ultra watch in its first Black Friday.",
    source: "Best Buy listing",
    note: "Black titanium with black Alpine Loop.",
  },
  {
    id: "apple-watch-series-12",
    name: "Apple Watch Series 12 GPS 42mm",
    blurb: "42mm GPS watch with Ceramic Shield 2 and Audio Intelligence.",
    category: "Wearables",
    store: "Walmart",
    url: "https://www.walmart.com/ip/Apple-Watch-Series-12-GPS-42mm-Black-Aluminum-Case-with-Black-Sport-Band-S-M/20961269689",
    sale: 299.0,
    usual: 399.0,
    signal: "new-low",
    evidence:
      "All-time low for the new Series 12, $30 below its previous sale price.",
    source: "Walmart listing",
    note: "Black aluminium, S/M sport band.",
  },
  {
    id: "shark-detect-lift-away",
    name: "Shark Detect Lift-Away ADV Upright Vacuum LA490",
    blurb: "Corded upright vacuum with a Lift-Away pod, floor detect and pet tools.",
    category: "Home",
    store: "Walmart",
    url: "https://www.walmart.com/ip/Shark-Detect-Lift-Away-ADV-Upright-Vacuum-Pet-Friendly-Floor-Detect-Direction-Detect-PowerFins-Self-Cleaning-Brushroll-LA490-Mauve/14422865087",
    sale: 144.0,
    usual: 379.99,
    signal: "strong",
    evidence:
      "62% off the $379.99 list; 5,000+ bought since yesterday, and Walmart shows the deal 65% claimed.",
    source: "Walmart listing",
    note: "Mauve colour only at this price; Burgundy is $299.99.",
  },
  {
    id: "bella-pro-smartcrisp",
    name: "bella PRO SmartCrisp 8-qt Touchscreen Air Fryer",
    blurb: "8-quart touchscreen air fryer that feeds up to 8 people.",
    category: "Kitchen",
    store: "Best Buy",
    url: "https://www.bestbuy.com/product/bella-pro-smartcrisp-8-qt-touchscreen-air-fryer-stainless-steel/J3P5RSSWRR/sku/6583884",
    sale: 49.99,
    usual: 129.99,
    signal: "strong",
    evidence:
      "62% off Best Buy's $129.99 regular price; 4.7 stars from 1,956 reviews.",
    source: "Best Buy listing",
  },
  {
    id: "gourmia-air-fryer-8qt",
    name: "Gourmia 8-Qt Digital Window Air Fryer GAF886",
    blurb: "8-quart digital air fryer with a viewing window and 8 one-touch presets.",
    category: "Kitchen",
    store: "Walmart",
    url: "https://www.walmart.com/ip/GOURM-8QT-AIR-FRY-GY/17278252517",
    sale: 39.0,
    usual: 119.0,
    signal: "strong",
    evidence:
      "67% off the $119 list price, but note the store's own was-price is $88.70, so the real cut is 56%.",
    source: "Walmart listing, reported by DealNews and PR Newswire",
  },
  {
    id: "gourmia-air-fryer-oven",
    name: "Gourmia 6-Slice Digital Air Fryer Oven GTF2480",
    blurb: "6-slice French-door air fryer oven with a temperature probe; fits a 12-inch pizza.",
    category: "Kitchen",
    store: "Walmart",
    url: "https://www.walmart.com/ip/Gourmia-Toaster-Oven-Air-Fryer-with-French-Doors-6-Slice-Capacity-Temperature-Probe-Black/16341304335",
    sale: 55.0,
    usual: 129.0,
    signal: "strong",
    evidence:
      "$2 less than last year's popular front-page price for the same oven; 57% off.",
    source: "Walmart listing",
  },
  {
    id: "lego-red-panda",
    name: "LEGO Creator 3-in-1 Cute Animals: Red Panda 31394",
    blurb: "297-piece Creator 3-in-1 set that builds three different animals.",
    category: "Toys",
    store: "Walmart",
    url: "https://www.walmart.com/ip/18640609617",
    sale: 15.0,
    usual: 29.99,
    signal: "strong",
    evidence: "Half price; 10,000+ bought since yesterday.",
    source: "Walmart listing",
  },
  {
    id: "bissell-spinwave",
    name: "BISSELL SpinWave SmartSteam Steam Mop 3712W",
    blurb: "Corded steam mop that scrubs and sanitises hard floors with rotating pads.",
    category: "Home",
    store: "Walmart",
    url: "https://www.walmart.com/ip/BISSELL-SpinWave-SmartSteam-Corded-Scrubbing-and-Sanitizing-Mop-for-Hard-Floors-with-Rotating-Mop-Pads-and-LED-Display-3712W/5140958700",
    sale: 68.0,
    usual: 145.99,
    signal: "strong",
    evidence:
      "53% off the $145.99 list; 4.2 stars from 1,172 reviews.",
    source: "Walmart listing, reported by fashlyst and TechBargains",
  },
];

// The categories in the order the filter chips show them.
export const CATEGORIES = [
  "Tech",
  "Gaming",
  "Audio",
  "TVs",
  "Wearables",
  "Kitchen",
  "Home",
  "Toys",
];

// The stores in the order the store filter lists them.
export const STORES = ["Amazon", "Best Buy", "Dell", "Walmart"];
