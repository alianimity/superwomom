"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Users, 
  Zap,
  Trophy,
  ArrowRight,
  Phone
} from "lucide-react"

const includedServices = [
  {
    icon: Clock,
    title: "Rapid Turnaround",
    description: "Fast, efficient cleaning between events with same-day service capabilities.",
  },
  {
    icon: Users,
    title: "Event Setup Support",
    description: "Pre-event preparation including venue cleaning and setup assistance.",
  },
  {
    icon: Trophy,
    title: "Venue Restoration",
    description: "Complete post-event cleanup returning venues to pristine condition.",
  },
  {
    icon: Zap,
    title: "Emergency Response",
    description: "24/7 availability for urgent cleaning needs during or after events.",
  },
  {
    icon: Calendar,
    title: "Event Coordination",
    description: "Seamless coordination with event planners and venue management teams.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Thorough inspection and client approval process for all event cleanups.",
  },
]

const pricingTiers = [
  {
    name: "Small Events",
    price: "$100 - $800",
    description: "Intimate gatherings and small venues",
    features: [
      "Up to 100 attendees",
      "Single venue space",
      "Basic setup/breakdown",
      "Standard cleaning supplies",
      "Same-day service",
    ],
    example: "Corporate meeting or private party",
  },
  {
    name: "Medium Events",
    price: "$800 - $3,500",
    description: "Mid-size events and conferences",
    features: [
      "100-500 attendees",
      "Multiple room venues",
      "Coordinated cleaning teams",
      "Specialized equipment",
      "Event timeline coordination",
    ],
    example: "Corporate conference or wedding reception",
    popular: true,
  },
  {
    name: "Large Events", 
    price: "$3,500 - $20,000",
    description: "Major venues and multi-day events",
    features: [
      "500+ attendees",
      "Convention centers",
      "Multi-day coordination",
      "Emergency response teams",
      "Full venue management",
    ],
    example: "Trade show or major corporate event",
  },
]

const relatedServices = [
  {
    name: "Commercial & Office",
    href: "/services/commercial",
    description: "Regular cleaning for corporate event venues and office spaces",
  },
  {
    name: "Luxury Residential",
    href: "/services/residential", 
    description: "Elite cleaning for private home events and gatherings",
  },
  {
    name: "Post-Construction",
    href: "/services/post-construction",
    description: "Cleanup for new venue construction and renovation projects",
  },
]

export default function EventsServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <Calendar className="h-16 w-16 text-brand-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Event & Venue <span className="text-brand-primary">Cleaning</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Fast turnaround cleaning for conferences, venues, and corporate events. 
              From small gatherings at $100 to major events up to $20,000.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Event Quote</Link>
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
              Event Cleaning Specialists
            </h2>
            <p className="text-lg leading-8 text-neutral-300 mb-8">
              Events have tight schedules and high expectations. Our experienced teams understand the pressure 
              of event logistics and deliver rapid, thorough cleaning that keeps your event running smoothly. 
              Whether it's pre-event preparation or post-event restoration, we work seamlessly with event 
              planners and venue managers to exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary">250+</div>
                <div className="text-sm text-neutral-400">Events Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">2hr</div>
                <div className="text-sm text-neutral-400">Fastest Turnaround</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">98%</div>
                <div className="text-sm text-neutral-400">On-Time Completion</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary">24/7</div>
                <div className="text-sm text-neutral-400">Emergency Service</div>
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
              Comprehensive event cleaning services with rapid response and coordination.
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
              Event Cleaning Pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Competitive pricing based on event size and service requirements.
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
              Same-Day Event Emergency Service
            </h3>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              Unexpected spills, last-minute venue changes, or urgent cleanup needs? Our emergency response 
              teams can mobilize within 2 hours to handle any event cleaning crisis, ensuring your event 
              proceeds without disruption.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="tel:929-992-8498" className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Emergency: (929) 992-8498
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Plan Your Event</Link>
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
              Make Your Event Flawless
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Partner with SuperwoMOM for stress-free event cleaning that exceeds expectations.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Book Event Service</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/about">Our Experience</Link>
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
