---
version: alpha
name: Clarove Systems
description: A calm, premium systems-build brand with airy spacing, soft cards, and deep green accents.
colors:
  primary: "#1e4331"
  secondary: "#6e7b73"
  tertiary: "#c8a84a"
  neutral: "#f5f7f5"
  surface: "#ffffff"
  on-surface: "#0b2216"
  error: "#b04a3a"
  border: "#d8ddd7"
  muted: "#eef1ed"
  success: "#1f8a4c"
typography:
  headline-display:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "60px"
    fontWeight: 300
    lineHeight: "72px"
    letterSpacing: "-1.5px"
  headline-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "48px"
    fontWeight: 300
    lineHeight: "48px"
    letterSpacing: "-1.2px"
  headline-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "24px"
    fontWeight: 300
    lineHeight: "32px"
    letterSpacing: "-0.6px"
  headline-sm:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 300
    lineHeight: "22px"
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 300
    lineHeight: "29px"
    letterSpacing: "0.2px"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: "29px"
    letterSpacing: "0.45px"
  body-sm:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 300
    lineHeight: "22px"
    letterSpacing: "0.2px"
  label-lg:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "22px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "20px"
    letterSpacing: "0.2px"
  label-sm:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "14px"
    letterSpacing: "0.12em"
  overline:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "14px"
    letterSpacing: "0.14em"
  nav:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "18px"
    letterSpacing: "0px"
  button:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "22px"
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 32px
  lg: 48px
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
    height: "62px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
    height: "62px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  badge-success:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.success}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 10px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.nav}"
    rounded: "{rounded.none}"
    padding: "0px"
---

# Clarove Systems

## Overview
Clarove Systems feels premium, calm, and trustworthy, with a subtle entrepreneurial energy rather than a loud sales tone. The page uses generous whitespace, crisp alignment, and a restrained green-and-cream palette to communicate competence and clarity. It is designed for clients who want a polished delivery partner and value reassurance, transparency, and momentum.

## Colors
- **Primary (#1e4331):** A deep forest green used for the brand mark, primary CTA, key headlines, and the strongest interactive emphasis. It carries the system’s sense of stability and craftsmanship.
- **Secondary (#6e7b73):** A muted sage-gray used for navigation, secondary text, and supporting UI elements. It keeps the interface quiet without becoming washed out.
- **Tertiary (#c8a84a):** A warm gold accent used sparingly for highlights, underlines, and small status cues. It adds a premium, optimistic note without overpowering the green base.
- **Neutral (#f5f7f5):** The soft off-white background tone that gives the layout its airy, editorial feel. Most cards and surfaces sit close to this value so the overall composition stays light.
- **Surface (#ffffff):** Clean white for floating cards, badges, and input-like containers where separation from the background is needed.
- **On-surface (#0b2216):** The near-black green text color used for headlines, body copy, and high-contrast button labels. It reads as richer and warmer than pure black.
- **Border (#d8ddd7):** A pale divider and outline color for subtle frames, separators, and the outline version of controls.
- **Muted (#eef1ed):** A soft fill for chips, meta surfaces, and low-emphasis containers.
- **Success (#1f8a4c):** A positive green used for checkmarks, delivery confirmations, and reassuring microcopy.
- **Error (#b04a3a):** Reserved for warnings or destructive states; it should remain rare so the palette stays serene.

## Typography
Headlines use **Plus Jakarta Sans** with a very light weight, creating a refined and modern editorial feel. The large headline stack favors tight negative letter spacing and short line heights, which makes the hero copy feel tailored and premium.

Body text and navigation use **Inter** for readability and neutrality. Body copy is light-weight and slightly tracked, giving the page a breathable, upscale rhythm rather than a dense SaaS dashboard look.

Recommended typographic roles:
- **headline-display / headline-lg:** Hero and page-intro statements; large, expressive, and spacious.
- **headline-md / headline-sm:** Smaller section headlines, card titles, and compact emphasis.
- **body-lg / body-md / body-sm:** Paragraphs, supporting copy, legal notes, and microcopy.
- **label-lg / label-md / label-sm:** Buttons, chips, small stats, and utility labels.
- **overline:** Eyebrow text and all-caps metadata. Uppercase styling should use noticeable letter spacing to match the screenshot’s restrained, premium tone.
- **nav:** Top navigation links with low visual noise and straightforward readability.
- **button:** Strong but not oversized CTA text, typically semi-bold in Plus Jakarta Sans.

## Layout
The layout is a spacious fluid hero with a clear two-column composition: text on the left, visual proof and floating cards on the right. Content is centered within a broad container and surrounded by a lot of negative space, which makes the page feel confident and unhurried.

Spacing follows a simple geometric rhythm based on 8px increments, with the primary steps expressed as 8, 16, 32, 48, and 96px. Section padding is generous, cards have compact internal padding, and the hero intentionally uses large gaps to separate the message, CTA block, and supporting proof.

Use thin dividers and light spacing rather than dense boxed layouts. The page should feel open, with strong alignment and consistent left edges instead of crowded modular stacking.

## Elevation & Depth
The interface is mostly flat, but it uses depth selectively through soft shadows, floating cards, and tonal contrast. The primary image block and proof cards hover above the background with gentle shadowing, while most other elements rely on border color and surface contrast instead of heavy elevation.

Shadows should stay soft and restrained. The goal is to suggest refinement and trust, not a dramatic layered dashboard.

## Shapes
The shape language is understated and gently rounded. Interactive elements use small radii, while floating cards and content panels soften slightly more to feel approachable.

This creates an “Architectural Calm” look: mostly rectilinear structure with just enough rounding to avoid harshness. Circles and pill chips are acceptable for status indicators and micro-badges, but the core UI should remain clean and professional.

## Components
### Buttons
- **`button-primary`** is the main CTA style: deep green background, light text, 16px by 32px padding, 62px height, and small rounded corners. It should feel substantial and slightly elevated.
- **`button-secondary`** is a quiet outline/ghost-style action with a white surface and dark text. Use it for secondary routes like exploration or comparison.
- **`button-link`** is reserved for low-emphasis text actions and utility links. It should look like text rather than a button.
- Button typography should stay bold and clear, with the primary action visually dominant over the secondary action.

### Cards
- **`card`** uses a light neutral surface, soft 12px corners, and subtle shadowing. Cards should feel like floating proof modules rather than heavy containers.
- Keep card content compact, with small internal padding and generous spacing around the card itself.
- Metadata cards in the hero can use tiny labels, icons, and a strong contrast between surface and text.

### Inputs
- **`input`** should be simple, white, and lightly rounded with a faint border or tonal separation.
- Inputs should prioritize clarity over decoration, with comfortable padding and a calm focus state.
- Avoid heavy outlines or large radii; they would conflict with the system’s quiet precision.

### Chips and badges
- **`chip`** uses a muted fill, pill shape, and small uppercase/label text for context tags and trust markers.
- **`badge-success`** is best for green confirmation copy and compliance-style status text.
- Keep icons small and aligned, using color to signal meaning more than weight or decoration.

### Navigation
- **`nav-link`** should stay minimal, dark-to-muted, and horizontally spaced.
- Active navigation may use a subtle underline or gold accent rather than a large filled treatment.
- Top-level navigation should remain lightweight so the CTA can stand out clearly.

### Lists and trust cues
- Lists, legal notes, and compliance references should be compact and understated.
- Use small icons, fine separators, and muted labels to reinforce credibility without adding visual clutter.

## Do's and Don'ts
- Do keep the overall composition spacious, airy, and centered around a strong left/right hero balance.
- Do use deep green as the primary action color and reserve gold for small accents and emphasis.
- Do prefer light typographic weights and generous line heights for a refined, premium tone.
- Do make cards feel like floating surfaces with subtle depth rather than heavy containers.
- Do use small corner radii on buttons and mildly larger radii on cards.
- Don't introduce bright saturated colors that compete with the restrained green palette.
- Don't use heavy shadows, thick borders, or aggressive gradients.
- Don't switch to dense, utility-first spacing; the system depends on breathing room and visual calm.