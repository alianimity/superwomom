# 06 · QA & Troubleshooting

## Build & Lint
- Run npm run build; fix ESLint and TypeScript errors
- Remove explicit JSX.Element returns if Next/TS conflicts
- Use next/link instead of <a> for internal links

## Styling Issues
- Tailwind darkMode must be 'class'
- White-on-dark cards: use bg-[var(--brand-support)] and border-[var(--brand-primary)]/20

## Layout Bugs
- Missing position context: add relative to parent when using absolute children
- Z-index stacking: ensure click targets are above decorative layers
- Service hero sections: ensure breadcrumbs don't overlap hero content
- Mobile sticky CTAs: test on various screen sizes to prevent layout issues

## Windows Specific
- EPERM on .next/trace: safe to ignore; redeploy on Vercel for clean build
- Use separate PowerShell commands instead of chained && when failing

## Shopify CSV Errors
- Invalid price: check column alignment; add missing empty fields
- Invalid image src: add a valid Image Src URL for main product rows
- Weight unit issues: leave Variant Weight Unit blank for services

## Content QA
- Legal-safe language; realistic numbers
- Consistent stats across components
- Testimonials with personal names
- Footer navigation includes all service categories
- Mobile responsiveness across all device sizes
- Breadcrumb navigation is clickable and functional
- Cross-service linking works properly
