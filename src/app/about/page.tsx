import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { 
  Award, 
  Users, 
  Target, 
  Shield,
  Leaf,
  Clock,
  CheckCircle,
  Star,
  Building2,
  Phone
} from "lucide-react"

const stats = [
  { label: "Annual Revenue", value: "$350K", description: "Fiscal year 2023" },
  { label: "Client Retention", value: "85%", description: "Industry-leading loyalty" },
  { label: "Annual Clients", value: "75+", description: "Served nationwide" },
  { label: "Team Members", value: "25", description: "Certified professionals" },
  { label: "States Covered", value: "50", description: "Via partnerships" },
  { label: "Emergency Response", value: "6hrs", description: "Average mobilization" },
]

const standards = [
  {
    icon: Shield,
    title: "Safety Focused",
    description: "Comprehensive safety protocols with ongoing training programs for all team members.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable practices supporting green building and environmental responsibility.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Professional quality management systems ensuring consistent service excellence.",
  },
  {
    icon: CheckCircle,
    title: "Fully Insured",
    description: "Comprehensive coverage protecting clients and team members nationwide.",
  },
]



const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We deliver exceptional results that exceed expectations on every project.",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "OSHA-compliant procedures and comprehensive safety training for all team members.",
  },
  {
    icon: Users,
    title: "Reliability",
    description: "Dependable service with 85% client retention and 24/7 emergency response.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "70% eco-friendly materials and LEED-certified green building practices.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About <span className="text-brand-primary">SuperwoMOM</span> Cleaning
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Founded in October 2021, SuperwoMOM Cleaning LLC has quickly established itself as a 
              specialized provider of high-end cleaning solutions, serving clients nationwide with 
              exceptional efficiency, reliability, and innovation.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Work With Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h2>
                <p className="text-neutral-600 leading-7">
                  To elevate cleaning as a vital strategic service for businesses and individuals by offering 
                  efficient, sustainable, and tailored solutions that improve environments, ensure regulatory 
                  compliance, and enhance operational performance.
                </p>
              </Card>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h2>
                <p className="text-neutral-600 leading-7">
                  To become a leading boutique provider of premium cleaning services nationwide, fostering 
                  steady growth and pioneering eco-friendly innovations by 2030.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24 sm:py-32 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              By the Numbers
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Our track record speaks to our commitment to excellence and client satisfaction.
            </p>
          </div>
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <AnimatedCounter className="text-3xl font-bold text-brand-primary mb-2" value={stat.value} />
                <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
                <div className="text-xs text-neutral-400">{stat.description}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>



      {/* Our Values */}
      <section className="py-24 sm:py-32 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-600 text-sm leading-6">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Standards
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Industry-leading practices ensuring quality and safety.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {standards.map((standard, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary/70 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <standard.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{standard.title}</h3>
                <p className="text-neutral-600 text-sm leading-6">{standard.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-24 sm:py-32 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              How We Operate
            </h2>
            <p className="text-lg leading-8 text-neutral-300 mb-12">
              SuperwoMOM Cleaning LLC employs a lean, agile model with centralized coordination from our 
              South Carolina headquarters and localized execution via partnerships, enabling nationwide 
              service while keeping overhead low.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-left">
              <Card className="p-6">
                <Building2 className="h-8 w-8 text-brand-primary mb-4" />
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Nationwide Network</h3>
                <p className="text-neutral-600 text-sm leading-6">
                  Core teams in West Columbia and Atlanta, with vetted subcontractors in other states 
                  for rapid deployment. This enables mobilization of 10-15 workers for cross-state 
                  projects within 24-48 hours.
                </p>
              </Card>
              <Card className="p-6">
                <Star className="h-8 w-8 text-brand-primary mb-4" />
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Technology-Driven</h3>
                <p className="text-neutral-600 text-sm leading-6">
                  Custom app for scheduling, client invoicing, and real-time updates. Predictive tools 
                  optimize resources and improve efficiency across all projects.
                </p>
              </Card>
              <Card className="p-6">
                <Users className="h-8 w-8 text-brand-primary mb-4" />
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Expert Team</h3>
                <p className="text-neutral-600 text-sm leading-6">
                  25 certified professionals including specialists with ongoing training in hazmat, 
                  green practices, and industry-specific requirements.
                </p>
              </Card>
              <Card className="p-6">
                <CheckCircle className="h-8 w-8 text-brand-primary mb-4" />
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Quality Assurance</h3>
                <p className="text-neutral-600 text-sm leading-6">
                  Satisfaction guarantee with follow-up audits and emergency response within 6 hours. 
                  Clear, itemized pricing with Net-30 terms available.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Experience the Difference?
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Join the clients who trust SuperwoMOM for exceptional cleaning services nationwide.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="tel:929-992-8498" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
