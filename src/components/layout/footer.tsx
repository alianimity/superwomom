import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  services: [
    { name: "Commercial & Office Cleaning", href: "/services/commercial" },
    { name: "Industrial & Warehouse", href: "/services/industrial" },

    { name: "Post-Construction", href: "/services/post-construction" },
    { name: "Luxury Residential", href: "/services/residential" },
    { name: "Event & Venue", href: "/services/events" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Get Quote", href: "/contact" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],

}

export function Footer() {
  return (
    <footer className="bg-neutral-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img
                className="h-10 w-10"
                src="/logos/icon-primary.svg"
                alt="SuperwoMOM Icon"
              />
              <img
                className="h-8"
                src="/logos/text-all-white.svg"
                alt="SuperwoMOM Cleaning"
              />
            </div>
            <p className="text-sm leading-6 text-neutral-300">
              Premium nationwide cleaning services for commercial, industrial, and luxury clients. 
              Professional teams with eco-friendly practices and 24/7 emergency response.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-x-3 text-sm text-neutral-300">
                <Phone className="h-4 w-4 text-brand-primary" />
                <Link href="tel:929-992-8498" className="hover:text-white transition-colors">
                  (929) 992-8498
                </Link>
              </div>
              <div className="flex items-center gap-x-3 text-sm text-neutral-300">
                <Mail className="h-4 w-4 text-brand-primary" />
                <Link href="mailto:welcome@supawomom.com" className="hover:text-white transition-colors">
                  welcome@supawomom.com
                </Link>
              </div>
              <div className="flex items-start gap-x-3 text-sm text-neutral-300">
                <MapPin className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" />
                <span>West Columbia, SC 29170</span>
              </div>
            </div>

          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-neutral-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-5 text-neutral-400">
              &copy; 2024 SuperwoMOM Cleaning LLC. All rights reserved. Fully insured nationwide.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-xs leading-5 text-neutral-400">
                85% Client Retention Rate | 24/7 Emergency Response | Professional Service Since 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
