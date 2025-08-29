"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Factory, 
  CheckCircle, 
  Shield, 
  Wrench, 
  HardHat,
  AlertTriangle,
  ArrowRight,
  Phone
} from "lucide-react"

const includedServices = [
  {
    icon: Factory,
    title: "Manufacturing Site Cleaning",
    description: "Deep cleaning of production floors, machinery areas, and industrial equipment with minimal downtime.",
  },
  {
    icon: HardHat,
    title: "Safety Compliance",
    description: "Professional cleaning procedures with proper hazard identification and safety protocols.",
  },
  {
    icon: Wrench,
    title: "Equipment Sanitization",
    description: "Specialized cleaning of industrial machinery and equipment without damage to sensitive components.",
  },
  {
    icon: AlertTriangle,
    title: "Hazardous Material Handling",
    description: "Professional handling and disposal of industrial waste and hazardous materials per regulatory guidelines.",
  },
  {
    icon: Shield,
    title: "Environmental Protection",
    description: "Containment and cleanup of spills, contamination control, and environmental compliance.",
  },
  {
    icon: CheckCircle,
    title: "Quality Control",
    description: "Post-cleaning inspection and documentation to ensure regulatory compliance and standards.",
  },
]

const pricingTiers = [
  {
    name: "Maintenance",
    price: "$150 - $750",
    description: "Routine industrial maintenance cleaning",
    features: [
      "Small warehouses (<25,000 sq ft)",
      "Basic equipment cleaning",
      "Weekly/bi-weekly service",
      "Standard waste removal",
      "Basic safety compliance",
    ],
    example: "Local distribution center or small manufacturing facility",
  },
  {
    name: "Professional",
    price: "$750 - $3,500",
    description: "Comprehensive industrial cleaning",
    features: [
      "Mid-size facilities (25,000-100,000 sq ft)",
      "Specialized equipment cleaning",
      "Custom scheduling",
      "Hazmat handling certified",
      "Environmental compliance",
    ],
    example: "Manufacturing plant or logistics hub",
    popular: true,
  },
  {
    name: "Enterprise", 
    price: "$3,500 - $15,000",
    description: "Large-scale industrial operations",
    features: [
      "Large facilities (100,000+ sq ft)",
      "Multi-site coordination",
      "Emergency response included",
      "Full EPA/OSHA compliance",
      "24/7 support available",
    ],
    example: "Major industrial complex or processing facility",
  },
]

const relatedServices = [
  {
    name: "Post-Construction",
    href: "/services/post-construction",
    description: "Complete cleanup for construction and renovation projects",
  },
  {
    name: "Commercial & Office",
    href: "/services/commercial",
    description: "Professional cleaning for office areas within industrial facilities",
  },
]

export default function IndustrialServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <Factory className="h-16 w-16 text-brand-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Industrial & Warehouse <span className="text-brand-primary">Cleaning</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Specialized cleaning for manufacturing sites, storage facilities, and logistics centers. 
              From routine maintenance at $150 to complex industrial operations up to $15,000.
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
              Industrial Cleaning Expertise
            </h2>
            <p className="text-lg leading-8 text-neutral-300 mb-8">
              Industrial facilities require specialized cleaning expertise that goes beyond standard commercial services. 
              Our certified teams understand the unique challenges of manufacturing environments, safety regulations, 
              and the critical importance of minimizing operational downtime.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary">200+</div>
                <div className="text-sm text-neutral-400">Industrial Sites</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">Pro</div>
                <div className="text-sm text-neutral-400">Trained Teams</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">99%</div>
                <div className="text-sm text-neutral-400">Safety Record</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">24/7</div>
                <div className="text-sm text-neutral-400">Emergency Response</div>
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
              Comprehensive industrial cleaning services with full regulatory compliance.
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
              Industrial Cleaning Pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Competitive pricing for specialized industrial cleaning services.
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
              Industrial Emergency Response
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              Chemical spills, equipment malfunctions, or contamination incidents? Our certified hazmat teams 
              provide immediate response with proper containment and cleanup protocols to minimize downtime 
              and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="tel:929-992-8498" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency: (929) 992-8498
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
              Ready to Optimize Your Facility?
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Trust SuperwoMOM for industrial cleaning that keeps your operations running safely and efficiently.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Free Assessment</Link>
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
