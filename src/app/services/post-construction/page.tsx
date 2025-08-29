"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Hammer, 
  CheckCircle, 
  Truck, 
  Sparkles, 
  HardHat,
  Broom,
  ArrowRight,
  Phone
} from "lucide-react"

const includedServices = [
  {
    icon: Broom,
    title: "Debris Removal",
    description: "Complete removal of construction debris, packaging materials, and leftover building supplies.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough cleaning of all surfaces including walls, floors, fixtures, and hard-to-reach areas.",
  },
  {
    icon: Truck,
    title: "Window Cleaning",
    description: "Professional cleaning of all windows, glass surfaces, and window frames inside and out.",
  },
  {
    icon: HardHat,
    title: "Safety Compliance",
    description: "Professional cleanup procedures with proper safety equipment and protocols.",
  },
  {
    icon: CheckCircle,
    title: "Final Detailing",
    description: "Meticulous finishing touches to ensure the space is move-in ready and inspection-ready.",
  },
  {
    icon: Hammer,
    title: "Surface Preparation",
    description: "Preparation of surfaces for final finishes, paint touch-ups, and installation readiness.",
  },
]

const pricingTiers = [
  {
    name: "Residential",
    price: "$200 - $1,500",
    description: "Post-construction cleanup for homes",
    features: [
      "Single family homes",
      "Basic debris removal",
      "Standard cleaning",
      "Window cleaning included",
      "Move-in ready finish",
    ],
    example: "Home renovation or small residential construction",
  },
  {
    name: "Commercial",
    price: "$1,500 - $8,000",
    description: "Office and retail construction cleanup",
    features: [
      "Commercial buildings",
      "Complete debris haul-away",
      "Deep cleaning all areas",
      "Safety compliance",
      "Inspection-ready finish",
    ],
    example: "Office renovation or retail buildout",
    popular: true,
  },
  {
    name: "Industrial", 
    price: "$8,000 - $25,000",
    description: "Large-scale construction projects",
    features: [
      "Industrial facilities",
      "Heavy debris removal",
      "Specialized equipment",
      "Multi-phase cleaning",
      "Project coordination",
    ],
    example: "Manufacturing facility or large commercial complex",
  },
]

const relatedServices = [
  {
    name: "Commercial & Office",
    href: "/services/commercial",
    description: "Ongoing maintenance for newly completed commercial spaces",
  },
  {
    name: "Industrial & Warehouse",
    href: "/services/industrial", 
    description: "Specialized cleaning for industrial construction projects",
  },
  {
    name: "Luxury Residential",
    href: "/services/residential",
    description: "Premium cleaning for high-end residential construction",
  },
]

export default function PostConstructionServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <Hammer className="h-16 w-16 text-brand-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Post-Construction <span className="text-brand-primary">Cleanup</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Complete cleanup for construction and renovation projects. From residential homes at $200 
              to large industrial facilities up to $25,000.
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
              Construction Cleanup Specialists
            </h2>
            <p className="text-lg leading-8 text-neutral-300 mb-8">
              Construction projects create unique cleaning challenges that require specialized expertise. 
              Our experienced teams efficiently transform construction sites into pristine, move-in ready spaces. 
              We handle everything from debris removal to final detailing, ensuring your project meets the 
              highest standards for occupancy and inspection.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary">300+</div>
                <div className="text-sm text-neutral-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">48hr</div>
                <div className="text-sm text-neutral-400">Average Completion</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">100%</div>
                <div className="text-sm text-neutral-400">Inspection Pass Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">Pro</div>
                <div className="text-sm text-neutral-400">Safety Trained</div>
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
              Comprehensive post-construction cleanup from debris removal to final inspection.
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
              Post-Construction Pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Competitive pricing based on project size and complexity.
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
              Fast-Track Construction Cleanup
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              Tight deadline for project completion? Our expedited cleanup service can mobilize large teams 
              to complete post-construction cleaning in 24-48 hours, ensuring your project stays on schedule 
              for inspections and occupancy deadlines.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="tel:929-992-8498" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Rush Service: (929) 992-8498
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Schedule Assessment</Link>
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
              Ready for Final Inspection?
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Let SuperwoMOM handle the final cleanup so you can focus on project completion and client satisfaction.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Project Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/about">Our Process</Link>
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
