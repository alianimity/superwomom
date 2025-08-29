# SuperwoMOM Technical Context

## Technology Stack

### Core Framework
- **Next.js 14**: App Router for modern React patterns, automatic code splitting, and SEO optimization
- **TypeScript**: Strict mode for type safety and better developer experience
- **React 18**: Latest features including Server Components and concurrent rendering

### Styling and UI
- **Tailwind CSS v4**: Utility-first CSS with custom design tokens
- **shadcn/ui**: Component library built on Radix UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Minimal usage for complex animations only

### Form and Validation
- **react-hook-form**: Performance-optimized form library
- **zod**: TypeScript-first schema validation
- **class-variance-authority**: Type-safe component variants

### Development Tools
- **ESLint**: Code linting with Next.js configuration
- **Prettier**: Code formatting consistency
- **TypeScript ESLint**: Additional TypeScript-specific linting rules

## Development Setup

### Environment Requirements
- **Node.js**: LTS version (18+)
- **Package Manager**: npm or pnpm
- **Operating System**: Windows 10/11 (PowerShell)
- **Git**: For version control and deployment

### Local Development
- **Development Server**: Next.js dev server with hot reloading
- **Port**: Default 3000 or auto-assigned
- **Environment Variables**: .env.local for local configuration

## Technical Constraints

### Performance Requirements
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Mobile Performance**: Optimized for mobile-first experience
- **Bundle Size**: Minimize JavaScript bundle through strategic code splitting

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Accessibility**: WCAG AA compliance

### SEO Requirements
- **Server-Side Rendering**: Proper meta tags and Open Graph data
- **Structured Data**: Schema.org markup for business information
- **Sitemap**: Automated sitemap generation
- **Robots.txt**: Proper crawling directives

## Deployment Configuration

### Hosting Platform
- **Vercel**: Zero-configuration deployment with automatic HTTPS
- **Domain**: supawomom.com (to be configured)
- **Preview Deployments**: Automatic previews for pull requests

### Build Process
- **Static Generation**: Pre-built pages where possible
- **Incremental Static Regeneration**: For dynamic content updates
- **Edge Functions**: For performance-critical operations

## Dependencies Management

### Core Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^4.0.0",
  "@radix-ui/react-slot": "latest",
  "framer-motion": "latest",
  "react-hook-form": "latest",
  "zod": "latest",
  "lucide-react": "latest",
  "class-variance-authority": "latest"
}
```

### Development Dependencies
- **@types/node**: Node.js type definitions
- **@types/react**: React type definitions
- **eslint**: Code linting
- **prettier**: Code formatting

## Integration Considerations

### Future Shopify Integration
- **API Ready**: Structure allows for future e-commerce integration
- **Product Modeling**: Service tiers can map to Shopify product variants
- **Form Handling**: Contact forms can integrate with Shopify customer data

### Analytics and Tracking
- **Vercel Analytics**: Built-in performance monitoring
- **Future Google Analytics**: Ready for implementation
- **Contact Form Tracking**: Success/error event monitoring

## Security Considerations
- **HTTPS**: Enforced through Vercel
- **Contact Forms**: Server-side validation and sanitization
- **Environment Variables**: Secure storage of sensitive configuration
- **Content Security Policy**: Implemented for XSS protection
