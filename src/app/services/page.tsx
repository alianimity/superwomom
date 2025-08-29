import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Building2, 
  Factory, 
  ShieldCheck, 
  Hammer, 
  Home, 
  Calendar,
  Leaf,
  ArrowRight
} from "lucide-react"

const services = [
  {
    name: "Commercial & Office Cleaning",
    description: "Professional cleaning for offices, retail spaces, and corporate facilities with flexible scheduling options.",
    icon: Building2,
    href: "/services/commercial",
    priceRange: "$25 - $5,000",
    features: ["Daily/weekly maintenance", "Deep cleaning services", "Electrostatic disinfection", "Flexible scheduling"],
    timeline: "Same day to 1 week",
  },
  {
    name: "Industrial & Warehouse Cleaning",
    description: "Specialized cleaning for manufacturing sites, storage facilities, and logistics centers with safety compliance.",
    icon: Factory,
    href: "/services/industrial",
    priceRange: "$150 - $15,000",
    features: ["Equipment sanitization", "Hazard management", "EPA/OSHA compliance", "Heavy-duty cleaning"],
    timeline: "2-5 business days",
  },
  {
    name: "Biohazard & Specialized Remediation",
    description: "Expert handling of medical facilities, post-accident sites, and environmental cleanups with certified teams.",
    icon: ShieldCheck,
    href: "/services/biohazard",
    priceRange: "$500 - $40,000",
    features: ["Hazmat expertise", "Medical facility cleaning", "Mold removal", "Infection control"],
    timeline: "Emergency to 1 week",
  },
  {
    name: "Post-Construction Cleanup",
    description: "Complete cleanup for commercial builds, remodels, and construction projects with debris removal.",
    icon: Hammer,
    href: "/services/post-construction",
    priceRange: "$200 - $25,000",
    features: ["Debris haul-away", "Final detailing", "Window cleaning", "Surface preparation"],
    timeline: "1-3 business days",
  },
  {
    name: "Luxury Residential & Estate Management",
    description: "Elite cleaning services for high-end homes and private estates with premium preservation techniques.",
    icon: Home,
    href: "/services/residential",
    priceRange: "$75 - $15,000",
    features: ["Premium detailing", "Preservation techniques", "Custom scheduling", "Discrete service"],
    timeline: "Same day to 3 days",
  },
  {
    name: "Event & Venue Cleaning",
    description: "Fast turnaround cleaning for conferences, venues, and corporate events with quick mobilization.",
    icon: Calendar,
    href: "/services/events",
    priceRange: "$100 - $20,000",
    features: ["Quick turnaround", "Event setup/breakdown", "Venue restoration", "Emergency response"],
    timeline: "Same day service",
  },
  {
    name: "Eco-Friendly & Tech Solutions",
    description: "Sustainable cleaning materials and technology-enhanced services for environmentally conscious clients.",
    icon: Leaf,
    href: "/services/eco-friendly",
    priceRange: "$20 - $10,000",
    features: ["Green materials", "App monitoring", "Energy efficient", "Sustainability reports"],
    timeline: "Add-on service",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our <span className="text-brand-primary">Specialized</span> Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              From routine maintenance starting at $20 to complex specialized projects up to $50,000+. 
              We deliver professional results for every scale of cleaning challenge.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Complete Service Portfolio
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Professional cleaning solutions designed for your specific needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Card key={service.name} className="flex flex-col justify-between p-8 hover:border-brand-primary/40 transition-colors">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <service.icon className="h-8 w-8 text-brand-primary flex-shrink-0" />
                    <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-medium text-brand-primary">
                      {service.priceRange}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">{service.name}</h3>
                  <p className="text-neutral-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-neutral-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-neutral-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-sm text-neutral-500">
                    <span className="font-medium">Timeline:</span> {service.timeline}
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" asChild className="w-full group">
                    <Link href={service.href} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers Explanation */}
      <section className="py-24 sm:py-32 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Service Tiers & Pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Our flexible pricing accommodates everything from routine maintenance to complex specialized projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="p-8 text-center">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Essential Services</h3>
              <div className="text-3xl font-bold text-brand-primary mb-4">$20 - $500</div>
              <p className="text-neutral-600 mb-6">
                Basic maintenance, small office cleaning, routine residential services, and eco-friendly add-ons.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Small office spaces</li>
                <li>• Routine maintenance</li>
                <li>• Basic residential cleaning</li>
                <li>• Green cleaning add-ons</li>
              </ul>
            </Card>
            
            <Card className="p-8 text-center border-brand-primary/40">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Professional Services</h3>
              <div className="text-3xl font-bold text-brand-primary mb-4">$500 - $5,000</div>
              <p className="text-neutral-600 mb-6">
                Standard commercial cleaning, mid-size facilities, events, and comprehensive residential services.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Mid-size commercial spaces</li>
                <li>• Corporate events</li>
                <li>• Luxury residential</li>
                <li>• Post-construction cleanup</li>
              </ul>
            </Card>
            
            <Card className="p-8 text-center">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Specialized Services</h3>
              <div className="text-3xl font-bold text-brand-primary mb-4">$5,000 - $50,000+</div>
              <p className="text-neutral-600 mb-6">
                Complex industrial projects, biohazard remediation, large-scale facilities, and emergency response.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Industrial facilities</li>
                <li>• Biohazard remediation</li>
                <li>• Large construction sites</li>
                <li>• Emergency response</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Contact us for a free consultation and custom quote tailored to your specific needs and budget.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
