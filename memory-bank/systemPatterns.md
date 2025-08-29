# SuperwoMOM System Patterns and Architecture

## System Architecture
- **Framework**: Next.js 14 with App Router for modern React patterns and optimal SEO
- **Component Library**: shadcn/ui built on Radix primitives for accessibility and consistency
- **Styling Strategy**: Tailwind CSS v4 with custom design tokens and dark theme
- **Form Handling**: react-hook-form with zod validation for type-safe form processing
- **Motion**: CSS-first approach with minimal Framer Motion for complex interactions only

## Key Technical Decisions

### Component Strategy
- **Server Components**: Default for static content and SEO optimization
- **Client Components**: Only when necessary for interactivity (forms, dropdowns)
- **Icon Handling**: Define Lucide icons directly in components to avoid serialization issues

### Design System Patterns
- **Color System**: Tailwind v4 @theme block with brand-primary (#D1793F) and brand-support (#423833)
- **Layout Grid**: 12-column responsive grid with consistent section padding (py-20+)
- **Card Design**: rounded-2xl with subtle borders and brand-themed backgrounds
- **Typography**: Clear hierarchy with semantic headings for accessibility

### Performance Patterns
- **CSS-Only Interactions**: Dropdown menus using group/group-hover for performance
- **Minimal JavaScript**: Prefer CSS transitions over JavaScript animations
- **Component Lazy Loading**: Strategic use of dynamic imports for heavy components

## Critical Implementation Paths

### Service Page Architecture
```
Hero Section → Overview → What's Included (6 cards) → Pricing (3-4 tiers) → Special Card → CTA → Related Services
```

### Navigation Structure
```
Home → Services (with dropdown) → About → Contact → Legal (Terms/Privacy)
```

### Form Processing Flow
```
Form Input → Zod Validation → Processing State → Success/Error Feedback → Follow-up Actions
```

## Component Relationships

### Layout Hierarchy
- **RootLayout**: Global navigation, footer, metadata
- **Page Components**: Individual route components
- **Section Components**: Reusable page sections (Hero, CTA, etc.)
- **UI Components**: Atomic design elements (Button, Card, etc.)

### Data Flow Patterns
- **Static Content**: Direct props from parent components
- **Form Data**: Controlled components with react-hook-form
- **Dynamic Content**: Server actions where needed for contact forms

## Reusable Patterns
- **Service Cards**: Consistent pricing and feature display across all service pages
- **CTA Sections**: Standardized call-to-action components with multiple contact options
- **Trust Signals**: Certification badges and social proof elements
- **Contact Information**: Dual email system (welcome@/support@) with phone backup

## Code Organization Standards
- **Directory Structure**: src/app for routes, src/components for reusables, src/lib for utilities
- **Naming Conventions**: kebab-case for files, PascalCase for components
- **Import Order**: External libraries → Internal components → Utilities → Types
- **TypeScript**: Strict mode with proper type definitions for all props and data structures
