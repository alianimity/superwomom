"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Commercial & Office Cleaning", href: "/services/commercial" },
      { name: "Industrial & Warehouse", href: "/services/industrial" },

      { name: "Post-Construction", href: "/services/post-construction" },
      { name: "Luxury Residential", href: "/services/residential" },
      { name: "Event & Venue", href: "/services/events" },
      { name: "Eco-Friendly Solutions", href: "/services/eco-friendly" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/95 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-primary/20"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">SuperwoMOM Cleaning</span>
            <img className="h-8 w-8" src="/logos/icon-primary.svg" alt="SuperwoMOM Icon" />
            <img className="h-6 w-auto" src="/logos/text-all-white.svg" alt="SuperwoMOM" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-semibold leading-6 text-white hover:text-brand-primary transition-colors"
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="absolute left-0 top-full mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="bg-black/95 border border-brand-primary/20 rounded-lg shadow-lg overflow-hidden">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="tel:929-992-8498" className="flex items-center gap-x-2">
              <Phone className="h-4 w-4" />
              (929) 992-8498
            </Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-brand-primary/20"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">SuperwoMOM Cleaning</span>
                  <img className="h-8 w-8" src="/logos/icon-primary.svg" alt="SuperwoMOM Icon" />
                  <img className="h-6 w-auto" src="/logos/text-all-white.svg" alt="SuperwoMOM" />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-brand-primary/20">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-brand-primary/10"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="-mx-3 block rounded-lg px-3 py-1 text-sm leading-7 text-neutral-300 hover:bg-brand-primary/10 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <div className="space-y-3">
                                                        <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                                    <Link href="tel:929-992-8498" className="flex items-center gap-x-2">
                                      <Phone className="h-4 w-4" />
                                      (929) 992-8498
                                    </Link>
                                  </Button>
                                  <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                                    <Link href="mailto:welcome@supawomom.com" className="flex items-center gap-x-2">
                                      <Mail className="h-4 w-4" />
                                      welcome@supawomom.com
                                    </Link>
                                  </Button>
                      <Button variant="default" size="sm" asChild className="w-full">
                        <Link href="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
