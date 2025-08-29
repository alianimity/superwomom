"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ShieldCheck, 
  CheckCircle, 
  AlertTriangle, 
  Heart, 
  Microscope,
  FileCheck,
  ArrowRight,
  Phone
} from "lucide-react"

const includedServices = [
  {
    icon: Heart,
    title: "Medical Facility Cleaning",
    description: "Specialized cleaning for hospitals, clinics, and medical practices with infection control protocols.",
  },
  {
    icon: AlertTriangle,
    title: "Hazmat Response",
    description: "Professional handling of biological and chemical hazards with proper containment and disposal.",
  },
  {
    icon: Microscope,
    title: "Laboratory Decontamination",
    description: "Sterile cleaning of research facilities and laboratories with contamination prevention.",
  },
  {
    icon: ShieldCheck,
    title: "Crime Scene Cleanup",
    description: "Compassionate and thorough cleanup of trauma sites with complete biohazard removal.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Full documentation and compliance with federal, state, and local health regulations.",
  },
  {
    icon: CheckCircle,
    title: "Mold Remediation",
    description: "Complete mold removal and prevention with air quality testing and certification.",
  },
]

const pricingTiers = [
  {
    name: "Basic Response",
    price: "$500 - $2,500",
    description: "Small-scale biohazard cleanup",
    features: [
      "Single room/area cleanup",
      "Basic hazmat disposal",
      "Standard documentation",
      "Initial assessment included",
      "48-hour response time",
    ],
    example: "Small medical office spill or minor contamination",
  },
  {
    name: "Professional",
    price: "$2,500 - $10,000",
    description: "Comprehensive biohazard remediation",
    features: [
      "Multi-room facilities",
      "Advanced decontamination",
      "Air quality testing",
      "Full regulatory compliance",
      "24-hour emergency response",
    ],
    example: "Medical facility or laboratory decontamination",
    popular: true,
  },
  {
    name: "Enterprise", 
    price: "$10,000 - $40,000",
    description: "Large-scale remediation projects",
    features: [
      "Facility-wide decontamination",
      "Multi-site coordination",
      "Specialized equipment",
      "Ongoing monitoring",
      "Immediate emergency response",
    ],
    example: "Hospital wing or major contamination incident",
  },
]

const relatedServices = [
  {
    name: "Industrial & Warehouse",
    href: "/services/industrial",
    description: "Specialized cleaning for manufacturing and industrial facilities",
  },
  {
    name: "Post-Construction",
    href: "/services/post-construction", 
    description: "Complete cleanup after renovation or construction projects",
  },
  {
    name: "Commercial & Office",
    href: "/services/commercial",
    description: "Professional cleaning for medical office buildings and clinics",
  },
]

export default function BiohazardServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <ShieldCheck className="h-16 w-16 text-brand-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Biohazard & <span className="text-brand-primary">Remediation</span> Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Expert handling of medical facilities, hazardous materials, and contamination cleanup. 
              From emergency response at $500 to facility-wide remediation up to $40,000.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Emergency Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="tel:929-992-8498" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency: (929) 992-8498
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
              Certified Biohazard Specialists
            </h2>
            <p className="text-lg leading-8 text-neutral-300 mb-8">
              Biohazard situations require immediate attention from certified professionals. Our trained teams 
              respond quickly to contain, clean, and properly dispose of hazardous materials while ensuring 
              complete safety and regulatory compliance. We handle the most challenging cleanup scenarios 
              with compassion and expertise.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary">100+</div>
                <div className="text-sm text-neutral-400">Hazmat Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">Pro</div>
                <div className="text-sm text-neutral-400">Trained Teams</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">100%</div>
                <div className="text-sm text-neutral-400">Compliance Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">2hr</div>
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
              Comprehensive biohazard remediation with full regulatory compliance.
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
              Biohazard Remediation Pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Emergency response pricing based on scope and urgency of remediation needed.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`p-8 ${tier.popular ? 'border-brand-primary/40 ring-1 ring-brand-primary/20' : ''}`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-medium text-brand-primary">
                      Most Common
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
                  <Link href="/contact">Emergency Contact</Link>
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
              24/7 Emergency Biohazard Response
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              Biohazard emergencies can&apos;t wait. Our certified hazmat teams are available around the clock 
              for immediate response, containment, and professional cleanup. We understand the urgency and 
              handle every situation with the utmost care and discretion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="tel:929-992-8498" className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Emergency: (929) 992-8498
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Request Consultation</Link>
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
              Professional Biohazard Solutions
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Trust SuperwoMOM&apos;s certified specialists for safe, compliant, and thorough biohazard remediation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Emergency Response</Link>
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
