"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Home, 
  CheckCircle, 
  Crown, 
  Shield, 
  Sparkles,
  Clock,
  ArrowRight,
  Phone
} from "lucide-react"

const includedServices = [
  {
    icon: Crown,
    title: "Premium Detailing",
    description: "Meticulous attention to luxury finishes, artwork, antiques, and high-end materials.",
  },
  {
    icon: Shield,
    title: "Preservation Techniques",
    description: "Specialized care for delicate surfaces, collectibles, and valuable furnishings.",
  },
  {
    icon: Sparkles,
    title: "Deep House Cleaning",
    description: "Comprehensive cleaning of all rooms including hard-to-reach areas and detailed surfaces.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Discrete service timing to accommodate your lifestyle and privacy preferences.",
  },
  {
    icon: Home,
    title: "Estate Management",
    description: "Ongoing maintenance programs for large homes and luxury properties.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "White-glove service standards with satisfaction guarantee and regular quality checks.",
  },
]

const pricingTiers = [
  {
    name: "Essential",
    price: "$75 - $300",
    description: "Basic luxury home cleaning",
    features: [
      "Up to 3,000 sq ft",
      "Standard rooms cleaning",
      "Weekly/bi-weekly service",
      "Basic surface care",
      "Insured and bonded",
    ],
    example: "Luxury townhome or high-end apartment",
  },
  {
    name: "Premium",
    price: "$300 - $1,200",
    description: "Comprehensive luxury home service",
    features: [
      "3,000 - 8,000 sq ft",
      "Detailed surface care",
      "Custom scheduling",
      "Preservation techniques",
      "Priority support",
    ],
    example: "Luxury single-family home or condo",
    popular: true,
  },
  {
    name: "Estate", 
    price: "$1,200 - $15,000",
    description: "Full estate management cleaning",
    features: [
      "8,000+ sq ft properties",
      "Multi-building estates",
      "Specialized preservation",
      "Discrete service teams",
      "Concierge coordination",
    ],
    example: "Private estate or luxury compound",
  },
]

const relatedServices = [
  {
    name: "Commercial & Office",
    href: "/services/commercial",
    description: "Professional cleaning for home offices and business spaces",
  },
  {
    name: "Post-Construction",
    href: "/services/post-construction", 
    description: "Complete cleanup after home renovations or additions",
  },
  {
    name: "Event & Venue",
    href: "/services/events",
    description: "Preparation and cleanup for private events and gatherings",
  },
]

export default function ResidentialServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <Home className="h-16 w-16 text-brand-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Luxury Residential & <span className="text-brand-primary">Estate</span> Cleaning
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Elite cleaning services for high-end homes and private estates with premium preservation techniques. 
              From luxury homes at $75 to private estates up to $15,000.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Free Consultation</Link>
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
              White-Glove Residential Service
            </h2>
            <p className="text-lg leading-8 text-neutral-300 mb-8">
              Luxury homes require specialized care that goes beyond standard residential cleaning. Our trained 
              professionals understand the value of fine furnishings, artwork, and premium materials. We provide 
              discrete, comprehensive service that maintains the pristine condition of your most valuable investment 
              while respecting your privacy and lifestyle.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary">150+</div>
                <div className="text-sm text-neutral-400">Luxury Homes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">95%</div>
                <div className="text-sm text-neutral-400">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">100%</div>
                <div className="text-sm text-neutral-400">Bonded & Insured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">24hr</div>
                <div className="text-sm text-neutral-400">Service Response</div>
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
              Comprehensive luxury residential cleaning with premium care and attention.
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
              Luxury Residential Pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Premium pricing for exceptional service and specialized care.
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
                  <Link href="/contact">Get Quote</Link>
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
              Estate Management Programs
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              For multi-property estates and luxury compounds, our comprehensive management programs provide 
              coordinated cleaning across all buildings, seasonal preparation, and ongoing maintenance to 
              preserve your investment and ensure properties are always guest-ready.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  <Crown className="h-5 w-5" />
                  Estate Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="tel:929-992-8498">Call for Details</Link>
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
              Experience White-Glove Service
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Join discerning homeowners who trust SuperwoMOM for exceptional residential cleaning services.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/about">Our Standards</Link>
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
              Related Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Explore our other specialized cleaning solutions.
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
