import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SITE } from "@/lib/site"

export const metadata = {
  title: "Terms & Conditions | PayDay",
  description: "Terms and conditions for using PayDay loan matching services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-gray-900 text-white py-14 sm:py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms & Conditions</h1>
            <div className="w-16 h-1 bg-green-400 mx-auto mb-4" />
            <p className="text-gray-400 text-sm">Last updated: August {SITE.year}</p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-10 space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
                <p>
                  By accessing or using PayDay&apos;s website and services, you agree to these Terms
                  &amp; Conditions. If you do not agree, please do not use our site or submit an
                  application. These terms apply to all visitors, users, and others who access the
                  service.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. Nature of Our Service</h2>
                <p>
                  PayDay is a loan matching / lead referral service. We are not a lender, bank, or
                  direct creditor. Submitting an application does not guarantee loan approval, a
                  specific rate, or funding. Any loan offer—if one is presented—comes from a
                  third-party lender and is subject to that lender&apos;s terms, underwriting, and
                  eligibility requirements.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. Eligibility</h2>
                <p className="mb-3">To use our services, you generally must:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Be at least 18 years of age (or the age of majority in your state)</li>
                  <li>Be a U.S. resident with a valid Social Security number or ITIN where required</li>
                  <li>Provide accurate, complete information in your application</li>
                  <li>Have a valid bank account and regular income source as required by lenders</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Your Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide truthful and up-to-date information</li>
                  <li>Keep login or sensitive credentials confidential if any account tools are offered</li>
                  <li>Review all lender documents carefully before accepting any offer</li>
                  <li>Comply with applicable laws when using our site</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. Fees & Costs</h2>
                <p>
                  Using our matching service is typically free to the consumer. Lenders may charge
                  interest, fees, or other costs on any loan you accept. Always review the
                  lender&apos;s disclosures—including APR, repayment schedule, and total cost—before
                  signing.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">6. No Credit Advice</h2>
                <p>
                  Content on this website is for general informational purposes only and does not
                  constitute financial, legal, or credit advice. You should consider your own
                  situation and consult professionals if needed before borrowing.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">7. Intellectual Property</h2>
                <p>
                  The PayDay name, logo, website design, and related materials are owned by us or our
                  licensors. You may not copy, modify, distribute, or use them for commercial
                  purposes without prior written permission.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, PayDay and its affiliates are not liable
                  for any indirect, incidental, special, consequential, or punitive damages arising
                  from your use of the site, inability to obtain a loan, or dealings with third-party
                  lenders. Our total liability for any claim related to the service shall not exceed
                  the amount you paid us (if any) for using the service in the twelve months before
                  the claim.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">9. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless PayDay from claims arising out of your
                  misuse of the site, violation of these terms, or inaccurate information you submit.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">10. Governing Law</h2>
                <p>
                  These terms are governed by the laws of the State of Tennessee, without regard to
                  conflict-of-law principles, except where federal law applies. Venue for disputes
                  shall be in the appropriate courts serving Nashville, Tennessee, unless applicable
                  law requires otherwise.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes</h2>
                <p>
                  We may revise these Terms &amp; Conditions at any time. Updates will be posted on
                  this page with a revised &quot;Last updated&quot; date. Continued use of the site after
                  changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact</h2>
                <p className="mb-3">Questions about these terms? Contact us:</p>
                <div className="space-y-1 text-sm">
                  <p>
                    Email:{" "}
                    <a href={`mailto:${SITE.email}`} className="text-green-600 hover:underline font-medium">
                      {SITE.email}
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a href={`tel:${SITE.phoneTel}`} className="text-green-600 hover:underline font-medium">
                      {SITE.phone}
                    </a>
                  </p>
                  <p>
                    Address: {SITE.addressLine1}, {SITE.addressLine2}
                  </p>
                </div>
                <p className="mt-4">
                  Also see our{" "}
                  <Link href="/privacy" className="text-green-600 hover:underline font-medium">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/contact" className="text-green-600 hover:underline font-medium">
                    Contact
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
