# 11 · Service Category Expansion

## Overview
A systematic approach to adding new service categories while maintaining consistency across navigation, content, and user experience. Based on lessons learned from expanding from 5 to 8 service categories.

## Pre-Expansion Planning
1. **Category Definition**: Clearly define the new service scope and differentiation
2. **URL Structure**: Plan /services/[category] URLs that are SEO-friendly  
3. **Pricing Strategy**: Establish pricing tiers that align with existing structure
4. **Content Outline**: Prepare service descriptions, benefits, and unique value propositions

## Implementation Checklist

### 1. Content Creation
- [ ] Service page with consistent section structure (Hero → Overview → What's Included → Pricing → Special Card → CTA → Related)
- [ ] Service description for main services grid
- [ ] Pricing tiers following established patterns (3-4 options)
- [ ] Unique special card with appropriate icon and messaging
- [ ] Related services recommendations

### 2. Navigation Updates (Critical!)
- [ ] Add to navbar dropdown navigation
- [ ] **Add to footer navigation** (commonly missed!)
- [ ] Update services grid on homepage  
- [ ] Add to related services component
- [ ] Update breadcrumb navigation paths

### 3. Technical Implementation
- [ ] Create service page route following /services/[category] pattern
- [ ] Implement consistent component structure
- [ ] Add appropriate icons from lucide-react library
- [ ] Ensure mobile responsiveness
- [ ] Test all navigation links and cross-references

### 4. Content Consistency
- [ ] Use consistent pricing terminology
- [ ] Apply same content voice and tone
- [ ] Maintain realistic statistics and claims
- [ ] Follow legal-safe language patterns
- [ ] Include proper contact CTAs

### 5. Shopify Integration (if applicable)
- [ ] Add new service categories to Shopify catalog
- [ ] Create appropriate product variants and pricing
- [ ] Update services documentation/catalog
- [ ] Ensure CSV format consistency

## Common Pitfalls to Avoid
1. **Footer Navigation**: Most commonly forgotten - always update footer links
2. **Inconsistent Pricing**: Ensure new services align with established pricing structure
3. **Navigation Depth**: Don't bury new services - ensure equal visibility
4. **Mobile Testing**: New navigation can break on smaller screens
5. **Related Services**: Update existing services to cross-reference new ones

## Quality Assurance
After adding new services, verify:
- All navigation menus include new services
- Service pages follow identical structure
- Links are functional across desktop and mobile
- Pricing follows established patterns
- Content maintains brand voice consistency
- Footer includes all services (check twice!)

## Post-Launch Optimization
1. **Analytics Review**: Monitor engagement with new service pages
2. **Cross-Service Linking**: Optimize related service recommendations
3. **Content Refinement**: Update based on user feedback and performance
4. **SEO Monitoring**: Track search rankings for new service keywords

## Scaling Considerations
- **Navigation Limits**: Consider dropdown organization if exceeding 8-10 services
- **Content Management**: Maintain consistency becomes harder with more services
- **Performance**: More pages require more careful optimization
- **User Experience**: Don't overwhelm users with too many choices

## Documentation Updates
When adding services, update:
- Memory Bank files with new service context
- Services catalog documentation
- Website playbook (if patterns change)
- Technical documentation for future developers

This systematic approach ensures new services integrate seamlessly while maintaining the quality and consistency of the existing website.
