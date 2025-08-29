# 02 · Design System & UX Standards

## Theme & Tokens
- Dark theme recommended (modern, high contrast)
- CSS variables:
  - --brand-primary (accent)
  - --brand-support (surface)
- Industry-agnostic color pairs; ensure WCAG AA contrast

## Layout Patterns
- Hero → Overview → What's Included → Pricing → Special Card → CTA → Related
- Grid: 12-col responsive; cards use rounded-2xl, subtle borders
- Spacing rhythm: consistent section paddings (py-20+)
- Breadcrumb navigation: implement above hero sections for service pages
- Mobile optimization: sticky CTAs, collapsible navigation, responsive grids

## Motion
- Framer Motion for entrance transitions (duration ~0.6–0.8s)
- Avoid over-animating; keep it purposeful

## Accessibility
- Semantic headings, landmarks
- Keyboard focus states, target sizes
- Alt text and descriptive labels

## Consistency Rules
- Identical section order across service pages
- Unique special card (icon + message) per service, but identical styling
- Realistic stats; avoid inflated claims; legal-safe wording
- Footer must include ALL services when new categories are added
- Logo and favicon assets should be in /public/logos/SVGs/ format
- Breadcrumbs should be clickable and lead to appropriate parent pages

## Reference Brands (as pattern inspiration only)
- Modern editorial (Block Renovation, Homebound, Norm Architects)
- Apply patterns, not visuals; stay brand-aligned
