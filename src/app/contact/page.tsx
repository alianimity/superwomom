"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Building2,
  Users,
  Zap
} from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Speak with our team directly",
    contact: "(929) 992-8498",
    subtext: "Monday - Sunday, 24/7",
    action: "tel:929-992-8498",
    available: "24/7 Emergency Response",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a detailed message",
    contact: "welcom@supawomom.com",
    subtext: "General inquiries and quotes",
    action: "mailto:welcom@supawomom.com",
    available: "Response within 4 hours",
  },
  {
    icon: MessageSquare,
    title: "Support",
    description: "Customer service and support",
    contact: "support@supawomom.com",
    subtext: "Existing clients and service issues",
    action: "mailto:support@supawomom.com",
    available: "Response within 2 hours",
  },
]

const officeInfo = [
  {
    title: "Headquarters",
    address: "West Columbia, SC 29170",
    city: "South Carolina Operations",
    description: "Main operations and administration",
  },
  {
    title: "Regional Hub", 
    address: "Atlanta, Georgia",
    city: "Serving Southeast Region",
    description: "Secondary operations center",
  },
]

const serviceAreas = [
  {
    icon: Building2,
    title: "Commercial Services",
    description: "Offices, retail, corporate facilities nationwide",
    coverage: "All 50 states via partnerships",
  },
  {
    icon: Users,
    title: "Industrial & Specialized",
    description: "Manufacturing, warehouses, industrial facilities",
    coverage: "Direct service + partner network",
  },
  {
    icon: Zap,
    title: "Emergency Response",
    description: "24/7 urgent cleaning and remediation services",
    coverage: "6-hour mobilization nationwide",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    projectDetails: "",
    timeline: "",
    budget: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success")
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        projectDetails: "",
        timeline: "",
        budget: "",
      })
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get Your <span className="text-brand-primary">Free Quote</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Ready to experience premium cleaning services? Contact us for a free consultation 
              and custom quote tailored to your specific needs and budget.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="tel:929-992-8498">Call Now: Call Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="mailto:welcome@supawomom.com">Email Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Contact Methods
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Choose the contact method that works best for you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-8 text-center hover:border-brand-primary/40 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary/70 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{method.title}</h3>
                <p className="text-neutral-600 mb-4">{method.description}</p>
                <Button variant="outline" asChild className="mb-4">
                  <Link href={method.action} className="font-semibold">
                    {method.contact}
                  </Link>
                </Button>
                <div className="text-sm text-neutral-500">
                  <div className="mb-1">{method.subtext}</div>
                  <div className="flex items-center justify-center gap-1">
                    <Clock className="h-3 w-3" />
                    {method.available}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 sm:py-32 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                Request a Quote
              </h2>
              <p className="text-lg leading-8 text-neutral-300">
                Tell us about your project and we&apos;ll provide a detailed quote within 24 hours.
              </p>
            </div>

            {submitStatus === "success" && (
              <Card className="p-6 mb-8 border-green-200 bg-green-50">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-800">Quote Request Submitted!</h3>
                    <p className="text-green-700 text-sm">We&apos;ll contact you within 24 hours with a detailed quote.</p>
                  </div>
                </div>
              </Card>
            )}

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-900 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-neutral-900 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="commercial">Commercial & Office Cleaning</option>
                      <option value="industrial">Industrial & Warehouse</option>
                      <option value="post-construction">Post-Construction Cleanup</option>
                      <option value="residential">Luxury Residential</option>
                      <option value="events">Event & Venue</option>
                      <option value="eco-friendly">Eco-Friendly Solutions</option>
                      <option value="emergency">Emergency Response</option>
                      <option value="other">Other/Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-neutral-900 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate/Emergency</option>
                      <option value="1-week">Within 1 week</option>
                      <option value="2-4-weeks">2-4 weeks</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="ongoing">Ongoing service</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-neutral-900 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-2500">$500 - $2,500</option>
                    <option value="2500-10000">$2,500 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000-plus">$25,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-neutral-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    required
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Please describe your cleaning needs, facility size, special requirements, etc."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full text-lg py-3"
                >
                  {isSubmitting ? "Submitting..." : "Get Free Quote"}
                </Button>

                <p className="text-sm text-neutral-500 text-center">
                  * Required fields. We&apos;ll respond within 24 hours with a detailed quote.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Office Locations
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Headquartered in South Carolina with nationwide coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {officeInfo.map((office, index) => (
              <Card key={index} className="p-8 text-center">
                <MapPin className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{office.title}</h3>
                <div className="text-neutral-600 mb-1">{office.address}</div>
                <div className="text-neutral-600 mb-4">{office.city}</div>
                <p className="text-neutral-500 text-sm">{office.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 sm:py-32 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Service Coverage
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Nationwide reach through strategic partnerships and direct service teams.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="p-6 text-center">
                <area.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{area.title}</h3>
                <p className="text-neutral-600 text-sm mb-3">{area.description}</p>
                <div className="text-brand-primary text-sm font-medium">{area.coverage}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-r from-brand-support to-brand-support/80">
            <AlertCircle className="h-16 w-16 text-neutral-900 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Need Emergency Cleaning Services?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              Don&apos;t wait - our emergency response teams are available 24/7 for urgent cleaning situations. 
              We can mobilize within 6 hours anywhere nationwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="tel:929-992-8498" className="flex items-center gap-2 text-lg px-8 py-3">
                  <Phone className="h-6 w-6" />
                  Emergency: Call Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="mailto:welcome@supawomom.com" className="text-lg px-8 py-3">
                  Email Emergency Request
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}
