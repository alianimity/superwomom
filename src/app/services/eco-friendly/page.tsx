"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Leaf, 
  CheckCircle, 
  Smartphone, 
  BarChart3, 
  Award,
  Recycle,
  ArrowRight,
  Phone
} from "lucide-react"

const includedServices = [
  {
    icon: Leaf,
    title: "Green Cleaning Materials",
    description: "Approved, biodegradable cleaning products that are safe for people and the environment.",
  },
  {
    icon: Smartphone,
    title: "Tech-Enhanced Monitoring",
    description: "Smart app tracking for service schedules, real-time updates, and environmental impact reporting.",
  },
  {
    icon: BarChart3,
    title: "Sustainability Reports",
    description: "Detailed reporting on environmental benefits and carbon footprint reduction for your business.",
  },
  {
    icon: Award,
    title: "LEED Certification Support",
    description: "Cleaning services that support green building and environmental certification requirements.",
  },
  {
    icon: Recycle,
    title: "Waste Reduction Programs",
    description: "Comprehensive recycling and waste minimization strategies integrated into cleaning routines.",
  },
  {
    icon: CheckCircle,
    title: "Energy Efficient Operations",
    description: "Optimized scheduling and equipment usage to minimize energy consumption and environmental impact.",
  },
]

const pricingTiers = [
  {
    name: "Basic Green",
    price: "$20 - $100",
    description: "Essential eco-friendly upgrades",
    features: [
      "Green cleaning products",
      "Basic app monitoring",
      "Waste sorting included",
      "Monthly sustainability report",
      "Add-on to existing service",
    ],
    example: "Eco upgrade for small office or home",
  },
  {
    name: "Smart Green",
    price: "$100 - $500",
    description: "Technology-enhanced green cleaning",
    features: [
      "Premium green products",
      "Real-time app tracking",
      "Energy optimization",
      "Quarterly impact reports",
      "Green building documentation",
    ],
    example: "Tech-forward office or sustainable business",
    popular: true,
  },
  {
    name: "Enterprise Green", 
    price: "$500 - $10,000",
    description: "Comprehensive sustainability programs",
    features: [
      "Custom green solutions",
      "Advanced monitoring systems",
      "Carbon footprint analysis",
      "Sustainability consulting",
      "Full green building compliance support",
    ],
    example: "Large facility or corporate sustainability initiative",
  },
]

const relatedServices = [
  {
    name: "Commercial & Office",
    href: "/services/commercial",
    description: "Add eco-friendly options to your regular commercial cleaning service",
  },
  {
    name: "Industrial & Warehouse",
    href: "/services/industrial", 
    description: "Sustainable solutions for large-scale industrial cleaning operations",
  },
  {
    name: "Luxury Residential",
    href: "/services/residential",
    description: "Green cleaning options for health-conscious luxury homeowners",
  },
]

export default function EcoFriendlyServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <Leaf className="h-16 w-16 text-brand-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Eco-Friendly & <span className="text-brand-primary">Tech Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Sustainable cleaning solutions with smart technology integration. 
              From basic green upgrades at $20 to comprehensive sustainability programs up to $10,000.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Go Green Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="tel:929-992-8498" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  (929) 992-8498
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              Sustainable Cleaning Innovation
            </h2>
            <p className="text-lg leading-8 text-neutral-300 mb-8">
              Environmental responsibility doesn&apos;t mean compromising on cleanliness. Our eco-friendly solutions 
              combine the latest in green cleaning technology with smart monitoring systems to deliver exceptional 
              results while reducing environmental impact. Perfect for businesses pursuing sustainability goals 
              and health-conscious clients.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary">70%</div>
                <div className="text-sm text-neutral-400">Green Materials Used</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">Green</div>
                <div className="text-sm text-neutral-400">Building Programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">40%</div>
                <div className="text-sm text-neutral-400">Carbon Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">Smart</div>
                <div className="text-sm text-neutral-400">App Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 sm:py-32 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What&apos;s Included
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Comprehensive eco-friendly solutions with smart technology integration.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {includedServices.map((service, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-x-3 mb-4">
                  <service.icon className="h-8 w-8 text-brand-primary" />
                  <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
                </div>
                <p className="text-neutral-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Eco-Friendly Solution Pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Affordable green upgrades and comprehensive sustainability programs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`p-8 ${tier.popular ? 'border-brand-primary/40 ring-1 ring-brand-primary/20' : ''}`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-medium text-brand-primary">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-brand-primary mb-2">{tier.price}</div>
                  <p className="text-neutral-600">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                      <CheckCircle className="h-4 w-4 text-brand-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-neutral-500 mb-6">
                  <strong>Example:</strong> {tier.example}
                </div>
                <Button variant={tier.popular ? "default" : "outline"} asChild className="w-full">
                  <Link href="/contact">Get Green Quote</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Card */}
      <section className="py-24 sm:py-32 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-r from-brand-support to-brand-support/80">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Corporate Sustainability Partnership
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              Pursuing LEED certification or corporate sustainability goals? Our comprehensive green cleaning 
              programs provide documentation, reporting, and compliance support to help your organization 
              achieve environmental objectives while maintaining exceptional cleanliness standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Sustainability Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="tel:929-992-8498">Discuss Goals</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Your Green Journey
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Choose SuperwoMOM for eco-friendly cleaning that&apos;s better for your health, your business, and the planet.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Go Green Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/about">Our Certifications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 sm:py-32 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Add to Any Service
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Our eco-friendly solutions can enhance any of our core cleaning services.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {relatedServices.map((service, index) => (
              <Card key={index} className="p-6 hover:border-brand-primary/40 transition-colors">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{service.name}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <Button variant="outline" asChild className="w-full group">
                  <Link href={service.href} className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
