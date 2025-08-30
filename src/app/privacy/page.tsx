import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Last updated: December 2024
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              SuperwoMOM Cleaning LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects information to provide 
              professional cleaning services effectively and safely:
            </p>
            <ul className="text-neutral-300 space-y-2 ml-6">
              <li>• Contact information (name, email, phone, address)</li>
              <li>• Company/organization details</li>
              <li>• Service requirements and facility specifications</li>
              <li>• Payment and billing information</li>
              <li>• Site access requirements and security protocols</li>
              <li>• Service history and preferences</li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              We use collected information for the following purposes:
            </p>
            <ul className="text-neutral-300 space-y-2 ml-6">
              <li>• Providing and coordinating cleaning services</li>
              <li>• Scheduling and service management</li>
              <li>• Billing and payment processing</li>
              <li>• Quality assurance and service improvement</li>
              <li>• Emergency response coordination</li>
              <li>• Compliance with safety and regulatory requirements</li>
              <li>• Communication about services and updates</li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              We may share your information in limited circumstances:
            </p>
            <ul className="text-neutral-300 space-y-2 ml-6 mb-4">
              <li>• With vetted partner contractors for nationwide service delivery</li>
              <li>• With regulatory authorities when required by law</li>
              <li>• With insurance providers for coverage verification</li>
              <li>• In emergency situations to ensure safety and proper response</li>
            </ul>
            <p className="text-neutral-300 leading-7">
              We never sell personal information to third parties and require all partners 
              to maintain strict confidentiality standards.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              We implement comprehensive security measures to protect your information:
            </p>
            <ul className="text-neutral-300 space-y-2 ml-6">
              <li>• Encrypted data transmission and storage</li>
              <li>• Background checks for all team members</li>
              <li>• Confidentiality agreements with staff and partners</li>
              <li>• Secure facility access protocols</li>
              <li>• Regular security audits and updates</li>
              <li>• Limited access to personal information on need-to-know basis</li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Website and Technology</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              Our website and service technology may collect:
            </p>
            <ul className="text-neutral-300 space-y-2 ml-6 mb-4">
              <li>• Usage data for service improvement</li>
              <li>• Service scheduling and tracking information</li>
              <li>• Communication logs for quality assurance</li>
              <li>• Technical data for system optimization</li>
            </ul>
            <p className="text-neutral-300 leading-7">
              We use this information to enhance service delivery and maintain our 
              technology-enhanced cleaning solutions.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Service-Specific Privacy</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              For specialized services, additional privacy measures apply:
            </p>
            <ul className="text-neutral-300 space-y-2 ml-6">
              <li>• <strong>Medical/Healthcare:</strong> HIPAA-compliant handling of sensitive areas</li>
              <li>• <strong>Industrial:</strong> Trade secret and proprietary information protection</li>
              <li>• <strong>Luxury Residential:</strong> Enhanced discretion and confidentiality protocols</li>
              <li>• <strong>Emergency Response:</strong> Rapid coordination while maintaining privacy</li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              You have the right to:
            </p>
            <ul className="text-neutral-300 space-y-2 ml-6">
              <li>• Access your personal information we maintain</li>
              <li>• Request corrections to inaccurate information</li>
              <li>• Request deletion of your information (subject to business requirements)</li>
              <li>• Opt out of marketing communications</li>
              <li>• Understand how your information is used and shared</li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
            <p className="text-neutral-300 leading-7">
              We retain information as long as necessary to provide services, comply with legal 
              obligations, and maintain business records. Service records may be retained for 
              up to 7 years for insurance and regulatory compliance purposes.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. Updates to This Policy</h2>
            <p className="text-neutral-300 leading-7">
              We may update this Privacy Policy to reflect changes in our practices or 
              regulatory requirements. Updates will be posted on our website with the 
              revision date. Continued use of our services constitutes acceptance of any changes.
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
            <p className="text-neutral-300 leading-7 mb-4">
              For privacy questions or to exercise your rights, contact us:
            </p>
            <ul className="text-neutral-300 space-y-2">
              <li><strong>Privacy Officer:</strong> SuperwoMOM Cleaning LLC</li>
              <li><strong>Phone:</strong> (929) 992-8498</li>
              <li><strong>Email:</strong> welcome@supawomom.com</li>
              <li><strong>Mail:</strong> West Columbia, SC, 29170</li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">Privacy Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
