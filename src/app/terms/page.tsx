import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Last updated: December 2024
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-neutral-300 leading-7">
              By accessing and using the services of SuperwoMOM Cleaning LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), 
              you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not 
              agree with any of these terms, you are prohibited from using our services.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              SuperwoMOM Cleaning LLC provides professional cleaning services including but not limited to:
            </p>
            <ul className="text-neutral-300 space-y-2 ml-6">
              <li>• Commercial and office cleaning</li>
              <li>• Industrial and warehouse cleaning</li>
              <li>• Industrial and specialized cleaning</li>
              <li>• Post-construction cleanup</li>
              <li>• Luxury residential and estate management</li>
              <li>• Event and venue cleaning</li>
              <li>• Eco-friendly and technology-enhanced cleaning solutions</li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Pricing and Payment</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              Service pricing varies based on scope, complexity, and specialized requirements:
            </p>
            <ul className="text-neutral-300 space-y-2 ml-6 mb-4">
              <li>• Essential services: $20 - $500</li>
              <li>• Professional services: $500 - $5,000</li>
              <li>• Specialized services: $5,000 - $50,000+</li>
            </ul>
            <p className="text-neutral-300 leading-7">
              Payment terms are Net-30 unless otherwise specified. All prices are subject to change with 30 days notice. 
              Emergency services may incur additional charges for rapid mobilization and after-hours work.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Service Standards and Quality</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              We maintain the following professional standards:
            </p>
            <ul className="text-neutral-300 space-y-2 ml-6 mb-4">
              <li>• Professional safety compliance for all procedures</li>
              <li>• Green building and environmental practices</li>
              <li>• Quality management standards</li>
              <li>• Approved materials and proper disposal methods</li>
            </ul>
            <p className="text-neutral-300 leading-7">
              All work is performed by trained, background-checked professionals. We guarantee satisfaction 
              and provide follow-up audits as needed.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Liability and Insurance</h2>
            <p className="text-neutral-300 leading-7">
              SuperwoMOM Cleaning LLC carries comprehensive liability insurance covering all operations. 
              Our liability is limited to the cost of re-performing unsatisfactory services. We are not 
              liable for consequential or indirect damages. Clients are responsible for securing valuable 
              items and providing safe working conditions.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Cancellation and Rescheduling</h2>
            <p className="text-neutral-300 leading-7">
              Services may be cancelled or rescheduled with 24 hours notice for routine services. 
              Emergency services require 2 hours notice. Cancellation fees may apply for specialized 
              team mobilization or equipment preparation.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Confidentiality</h2>
            <p className="text-neutral-300 leading-7">
              We respect client confidentiality and maintain strict protocols for secure facilities. 
              All team members sign confidentiality agreements and undergo background checks. 
              Client information is protected according to our Privacy Policy.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Emergency Services</h2>
            <p className="text-neutral-300 leading-7">
              24/7 emergency response is available for urgent cleaning situations. Emergency services 
              are billed at premium rates due to rapid mobilization requirements and after-hours operations. 
              Response time is typically within 6 hours nationwide.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. Dispute Resolution</h2>
            <p className="text-neutral-300 leading-7">
              Any disputes will be resolved through binding arbitration in South Carolina. 
              These terms are governed by South Carolina state law. We encourage direct communication 
              to resolve any service concerns promptly.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              For questions about these Terms of Service, contact us:
            </p>
            <ul className="text-neutral-300 space-y-2">
              <li><strong>Phone:</strong> Call Now (800-787-3766)</li>
              <li><strong>Email:</strong> welcom@supawomom.com</li>
              <li><strong>Address:</strong> 789 River Rd, West Columbia, SC 29169</li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">Have Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
