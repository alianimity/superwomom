"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Building2, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield,
  Sparkles,
  ArrowRight,
  Phone
} from "lucide-react"

const includedServices = [
  {
    icon: Building2,
    title: "Daily Office Maintenance",
    description: "Routine cleaning of workspaces, common areas, and meeting rooms with flexible scheduling.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning Services",
    description: "Comprehensive cleaning including carpets, upholstery, and hard-to-reach areas on regular schedule.",
  },
  {
    icon: Shield,
    title: "Electrostatic Disinfection",
    description: "Advanced disinfection technology for high-touch surfaces and complete sanitization coverage.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "After-hours, weekend, and custom timing options to minimize business disruption.",
  },
  {
    icon: Users,
    title: "Trained Teams",
    description: "Professional teams with background checks and ongoing training programs.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Regular inspections and satisfaction guarantees with responsive customer support.",
  },
]

const pricingTiers = [
  {
    name: "Essential",
    price: "$25 - $150",
    description: "Basic office cleaning for small spaces",
    features: [
      "Up to 2,000 sq ft",
      "Trash removal & recycling",
      "Basic surface cleaning",
      "Restroom maintenance",
      "Weekly service",
    ],
    example: "Small law office or medical practice",
  },
  {
    name: "Professional",
    price: "$150 - $800",
    description: "Comprehensive cleaning for mid-size offices",
    features: [
      "2,000 - 10,000 sq ft",
      "Daily/weekly options",
      "Deep cleaning monthly",
      "Window cleaning",
      "Supply management",
    ],
    example: "Corporate office or retail location",
    popular: true,
  },
  {
    name: "Enterprise", 
    price: "$800 - $5,000",
    description: "Full-service for large commercial facilities",
    features: [
      "10,000+ sq ft",
      "Multi-site coordination", 
      "Specialized equipment",
      "Custom scheduling",
      "Priority support",
    ],
    example: "Corporate headquarters or campus",
  },
]

const relatedServices = [
  {
    name: "Industrial & Warehouse",
    href: "/services/industrial",
    description: "Specialized cleaning for manufacturing and storage facilities",
  },
  {
    name: "Post-Construction",
    href: "/services/post-construction", 
    description: "Complete cleanup after construction or renovation projects",
  },
  {
    name: "Event & Venue",
    href: "/services/events",
    description: "Fast turnaround cleaning for corporate events and conferences",
  },
]

export default function CommercialServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <Building2 className="h-16 w-16 text-brand-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Commercial & Office <span className="text-brand-primary">Cleaning</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Professional cleaning services for offices, retail spaces, and corporate facilities. 
              From small offices starting at $25 to enterprise facilities up to $5,000.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Free Quote</Link>
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
              Why Choose Our Commercial Cleaning?
            </h2>
            <p className="text-lg leading-8 text-neutral-300 mb-8">
              We understand that your business environment reflects your professional standards. Our commercial cleaning services 
              maintain the pristine appearance your clients expect while ensuring a healthy workspace for your team.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary">500+</div>
                <div className="text-sm text-neutral-400">Commercial Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">24hr</div>
                <div className="text-sm text-neutral-400">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">98%</div>
                <div className="text-sm text-neutral-400">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">Pro</div>
                <div className="text-sm text-neutral-400">Trained Teams</div>
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
              What's Included
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Comprehensive commercial cleaning services designed to maintain professional standards.
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
              Commercial Cleaning Pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Transparent pricing based on facility size and service frequency.
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
              Need Emergency Commercial Cleaning?
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              Water damage, unexpected spills, or urgent facility issues? Our 24/7 emergency response team 
              can mobilize within 6 hours to get your business back to normal operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="tel:929-992-8498" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call: (929) 992-8498
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Schedule Consultation</Link>
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
              Ready to Elevate Your Workspace?
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Join hundreds of businesses that trust SuperwoMOM for their commercial cleaning needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Free Assessment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/about">Why Choose Us</Link>
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
