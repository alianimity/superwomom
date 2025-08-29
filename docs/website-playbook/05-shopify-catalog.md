# 05 · Shopify Catalog (Optional Module)

This module explains how to model services/products in Shopify and generate CSVs that import reliably.

## When to Use
- Service companies selling fixed-price services or tiers
- Product companies listing SKUs and variants

## Product Modeling Patterns
- Categories as Products; individual services/items as Variants
- Use Option1 Name to group variants (e.g., Service Type, Plan, Tier)
- Keep handles kebab-case (e.g., project-planning)

## CSV Structure (must match exactly)
- Follow Shopify template column order
- Product row has more columns populated than variant rows
- Variant rows must include the same number of columns (with empty placeholders) to avoid shifts

## Required Columns (commonly used)
Handle,Title,Body (HTML),Vendor,Product Category,Type,Tags,Published,Option1 Name,Option1 Value,...,Variant SKU,Variant Grams,Variant Inventory Tracker,Variant Inventory Policy,Variant Fulfillment Service,Variant Price,Variant Requires Shipping,Variant Taxable,Image Src,Image Position,SEO Title,SEO Description,Variant Weight Unit,Status

## Common Pitfalls & Fixes
- "deny is not a valid price": missing empty cell for Variant Inventory Tracker
- "Src cannot be blank": add Image Src for the main product row
- Weight unit (lb) invalid for services: leave Variant Weight Unit blank

## Workflow
1) Define categories (products) and 3–5 variants each
2) Prepare SEO Title/Description per product
3) Use Shopify CDN images or brand assets
4) Validate column counts by comparing to a known-good CSV
5) Create comprehensive pricing tiers (entry-level, mid-tier, premium) 
6) Consider service bundles and package deals for higher value offerings
7) Generate docs/services-catalog.md alongside CSV for website reference

## Example Generator Checklist
- Product rows include: Title, Body (HTML), Vendor, Category, Type, Tags, Published, Option1 Name, Variant SKU, Price, Image Src, SEO fields, Status
- Variant rows include: Option1 Value, Variant SKU, Price (others blank as required)

## Industry Examples
- Tech: Support Plans (Basic/Pro/Enterprise)
- Health: Telehealth Packages (Initial, Follow-up, Annual)
- Services: Maintenance Tiers (Basic, Seasonal, Annual)

## Pricing Strategy Lessons
- Include entry-level pricing ($50-200) to capture budget-conscious customers
- Mid-tier services ($500-5,000) for standard projects
- Premium offerings ($10,000-75,000+) for comprehensive solutions
- Service bundles can increase average order value significantly
- Consider geographic pricing variations and nationwide service capabilities
