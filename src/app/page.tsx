import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection, AnimatedCard, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { 
  Building2, 
  Factory, 
  ShieldCheck, 
  Hammer, 
  Home, 
  Calendar,
  Leaf,
  Phone,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award
} from "lucide-react"

const services = [
  {
    name: "Commercial & Office Cleaning",
    description: "Professional cleaning for offices, retail spaces, and corporate facilities with flexible scheduling.",
    icon: Building2,
    href: "/services/commercial",
    priceRange: "$500 - $5,000",
  },
  {
    name: "Industrial & Warehouse",
    description: "Specialized cleaning for manufacturing sites, storage facilities, and logistics centers.",
    icon: Factory,
    href: "/services/industrial",
    priceRange: "$2,000 - $15,000",
  },
  {
    name: "Biohazard & Remediation",
    description: "Expert handling of medical facilities, post-accident sites, and environmental cleanups.",
    icon: ShieldCheck,
    href: "/services/biohazard",
    priceRange: "$5,000 - $40,000",
  },
  {
    name: "Post-Construction",
    description: "Complete cleanup for commercial builds, remodels, and construction projects.",
    icon: Hammer,
    href: "/services/post-construction",
    priceRange: "$3,000 - $25,000",
  },
  {
    name: "Luxury Residential",
    description: "Elite cleaning services for high-end homes and private estates with premium detailing.",
    icon: Home,
    href: "/services/residential",
    priceRange: "$1,000 - $15,000",
  },
  {
    name: "Event & Venue",
    description: "Fast turnaround cleaning for conferences, venues, and corporate events.",
    icon: Calendar,
    href: "/services/events",
    priceRange: "$2,000 - $20,000",
  },
]

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We assess your specific needs and provide detailed scope evaluation with transparent pricing.",
  },
  {
    step: "02", 
    title: "Custom Planning",
    description: "Our certified team creates a tailored cleaning plan with timeline and compliance requirements.",
  },
  {
    step: "03",
    title: "Professional Execution", 
    description: "Professional teams execute with minimal disruption using advanced equipment and techniques.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Follow-up audits ensure satisfaction with our guarantee and ongoing support options.",
  },
]

const testimonials = [
  {
    content: "&quot;SuperwoMOM transformed our manufacturing facility cleanup. Their specialized team handled the biohazard remediation flawlessly, allowing us to reopen ahead of schedule.&quot;",
    author: "Sarah Chen",
    title: "Operations Manager",
    location: "Atlanta, GA",
  },
  {
    content: "&quot;The post-construction cleanup for our 50,000 sq ft office was completed in record time. Professional, thorough, and worth every penny of the investment.&quot;",
    author: "Michael Rodriguez",
    title: "Project Director", 
    location: "Dallas, TX",
  },
  {
    content: "&quot;Their luxury residential service exceeded expectations. The attention to detail and preservation techniques for our estate's antiques was remarkable.&quot;",
    author: "Jennifer Walsh",
    title: "Property Manager",
    location: "Charleston, SC",
  },
]

const faqs = [
  {
    question: "What makes SuperwoMOM different from standard cleaning services?",
    answer: "We specialize in high-value, complex cleaning projects requiring certified expertise, regulatory compliance, and advanced equipment. Our team handles specialized scenarios like biohazard remediation, post-construction cleanup, and luxury preservation that standard services cannot manage.",
  },
  {
    question: "Do you really serve all 50 states?",
    answer: "Yes, through our strategic partnership network. We have core teams in South Carolina and Georgia, with vetted subcontractors nationwide for rapid deployment. This allows us to mobilize qualified teams anywhere within 24-48 hours.",
  },
  {
    question: "Why do some projects cost $10,000-$50,000+?",
    answer: "Premium pricing reflects specialized expertise, certified teams, compliance requirements, advanced equipment, and project complexity. Large-scale remediation, multi-site coordination, and specialized disposal justify these investments for clients with demanding requirements.",
  },
  {
    question: "What professional standards do you maintain?",
    answer: "We maintain comprehensive safety protocols, eco-friendly practices, and quality management systems. Our teams receive ongoing training in hazmat handling, green cleaning methods, and industry-specific requirements.",
  },
  {
    question: "How quickly can you respond to emergency situations?",
    answer: "We offer 24/7 emergency response with mobilization within 6 hours for urgent situations. Our nationwide network enables rapid deployment for time-sensitive projects like facility reopenings or event preparations.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Premium <span className="text-brand-primary">Nationwide</span> Cleaning Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300 sm:text-xl">
              Specialized cleaning solutions for commercial, industrial, and luxury clients. 
              Professional teams with 24/7 emergency response across all 50 states.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="tel:929-992-8498" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Link>
              </Button>
            </div>
          </AnimatedSection>
          
          {/* Stats */}
          <AnimatedSection delay={0.3} className="mx-auto mt-16 max-w-5xl">
            <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <StaggerItem className="text-center">
                <AnimatedCounter className="text-3xl font-bold text-brand-primary" value="85%" />
                <div className="text-sm text-neutral-400">Client Retention</div>
              </StaggerItem>
              <StaggerItem className="text-center">
                <AnimatedCounter className="text-3xl font-bold text-brand-primary" value="24/7" />
                <div className="text-sm text-neutral-400">Emergency Response</div>
              </StaggerItem>
              <StaggerItem className="text-center">
                <AnimatedCounter className="text-3xl font-bold text-brand-primary" value="50" />
                <div className="text-sm text-neutral-400">States Covered</div>
              </StaggerItem>
              <StaggerItem className="text-center">
                <AnimatedCounter className="text-3xl font-bold text-brand-primary" value="75+" />
                <div className="text-sm text-neutral-400">Annual Clients</div>
              </StaggerItem>
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Specialized Cleaning Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              From routine maintenance to complex specialized projects, we deliver results that justify premium investment.
            </p>
          </AnimatedSection>
          <StaggerContainer className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <StaggerItem key={service.name}>
                <AnimatedCard className="h-full">
                  <Card className="flex flex-col justify-between p-8 hover:border-brand-primary/40 transition-colors h-full">
                    <div>
                      <div className="flex items-center gap-x-3">
                        <service.icon className="h-8 w-8 text-brand-primary" />
                        <h3 className="text-xl font-semibold text-neutral-900">{service.name}</h3>
                      </div>
                      <p className="mt-4 text-neutral-600">{service.description}</p>
                      <div className="mt-4">
                        <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-medium text-brand-primary">
                          {service.priceRange}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button variant="outline" asChild className="w-full">
                        <Link href={service.href}>Learn More</Link>
                      </Button>
                    </div>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              A systematic approach ensuring quality results and regulatory compliance.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mx-auto mt-16 max-w-5xl">
            <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <StaggerItem key={step.step} className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-300 text-sm leading-6">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-12 w-full h-0.5 bg-brand-primary/30" />
                  )}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Hear from clients who trust us with their most demanding cleaning challenges.
            </p>
          </AnimatedSection>
          <StaggerContainer className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full">
                  <Card className="p-8 h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-brand-primary text-brand-primary" />
                      ))}
                    </div>
                    <p className="text-neutral-600 mb-6" dangerouslySetInnerHTML={{ __html: testimonial.content }} />
                    <div>
                      <div className="font-semibold text-neutral-900">{testimonial.author}</div>
                      <div className="text-sm text-neutral-600">{testimonial.title}</div>
                      <div className="text-sm text-neutral-500">{testimonial.location}</div>
                    </div>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Everything you need to know about our specialized cleaning services.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mx-auto mt-16 max-w-4xl">
            <StaggerContainer className="space-y-8">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <AnimatedCard>
                    <Card className="p-8">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-4">{faq.question}</h3>
                      <p className="text-neutral-600 leading-7">{faq.answer}</p>
                    </Card>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Contact us today for a free consultation and custom quote for your specialized cleaning needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="tel:929-992-8498" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Call
                </Link>
              </Button>
            </div>
          </AnimatedSection>
          
          {/* Trust Signals */}
          <AnimatedSection delay={0.3} className="mx-auto mt-16 max-w-5xl">
            <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
              <StaggerItem className="flex flex-col items-center">
                <Award className="h-8 w-8 text-brand-primary mb-2" />
                <div className="text-sm font-medium text-white">Safety Focused</div>
                <div className="text-xs text-neutral-400">Professional Standards</div>
              </StaggerItem>
              <StaggerItem className="flex flex-col items-center">
                <Leaf className="h-8 w-8 text-brand-primary mb-2" />
                <div className="text-sm font-medium text-white">Eco-Friendly</div>
                <div className="text-xs text-neutral-400">Green Solutions</div>
              </StaggerItem>
              <StaggerItem className="flex flex-col items-center">
                <ShieldCheck className="h-8 w-8 text-brand-primary mb-2" />
                <div className="text-sm font-medium text-white">Quality Assured</div>
                <div className="text-xs text-neutral-400">Excellence Standards</div>
              </StaggerItem>
              <StaggerItem className="flex flex-col items-center">
                <Users className="h-8 w-8 text-brand-primary mb-2" />
                <div className="text-sm font-medium text-white">Fully Insured</div>
                <div className="text-xs text-neutral-400">Nationwide Coverage</div>
              </StaggerItem>
            </StaggerContainer>
          </AnimatedSection>
    </div>
      </section>
    </>
  )
}