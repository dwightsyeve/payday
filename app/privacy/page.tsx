import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SITE } from "@/lib/site"

export const metadata = {
  title: "Privacy Policy | PayDay",
  description: "How PayDay collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-gray-900 text-white py-14 sm:py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
            <div className="w-16 h-1 bg-green-400 mx-auto mb-4" />
            <p className="text-gray-400 text-sm">Last updated: August {SITE.year}</p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-10 space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
                <p>
                  PayDay (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy
                  explains how we collect, use, share, and protect information when you visit{" "}
                  <span className="font-medium">paydayloanservice.online</span>, submit a loan
                  inquiry, or contact us. By using our services, you agree to the practices described
                  here.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
                <p className="mb-3">We may collect the following types of information:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Identity & contact data</span> — name, email
                    address, phone number, mailing address, and date of birth.
                  </li>
                  <li>
                    <span className="font-medium">Financial & employment data</span> — income,
                    employment status, banking details, and related information you provide in an
                    application.
                  </li>
                  <li>
                    <span className="font-medium">Technical data</span> — IP address, browser type,
                    device information, and pages visited on our site.
                  </li>
                  <li>
                    <span className="font-medium">Communications</span> — messages you send through
                    our contact form, email, or phone.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To process and match your loan inquiry with lenders in our network</li>
                  <li>To communicate with you about your request or our services</li>
                  <li>To improve our website, security, and customer experience</li>
                  <li>To comply with legal and regulatory obligations</li>
                  <li>To detect and prevent fraud or misuse of our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Sharing of Information</h2>
                <p className="mb-3">
                  We may share your information with third parties as needed to provide our
                  services, including:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lending partners who may review your inquiry for a potential offer</li>
                  <li>Service providers who help us operate our website and systems</li>
                  <li>Legal or regulatory authorities when required by law</li>
                </ul>
                <p className="mt-3">
                  We do not sell your personal information in the conventional retail sense. Shared
                  data is limited to what is necessary for matching, processing, or legal compliance.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
                <p>
                  We use reasonable administrative, technical, and physical safeguards designed to
                  protect the information you provide. No method of transmission over the Internet is
                  100% secure, so we cannot guarantee absolute security, but we take steps to reduce
                  risk.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cookies & Tracking</h2>
                <p>
                  Our site may use cookies and similar technologies to remember preferences, measure
                  traffic, and improve performance. You can control cookies through your browser
                  settings. Disabling cookies may affect some site features.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Choices</h2>
                <p>
                  Depending on where you live, you may have rights to access, correct, delete, or
                  limit use of certain personal information. To make a request, contact us using the
                  details below. We may need to verify your identity before responding.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">8. Third-Party Sites</h2>
                <p>
                  Our website may link to third-party sites or lender portals. We are not responsible
                  for the privacy practices of those sites. Please review their policies before
                  sharing information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date
                  at the top reflects the most recent revision. Continued use of our services after
                  changes means you accept the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
                <p className="mb-3">
                  For privacy questions or requests, reach us at:
                </p>
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
                  <Link href="/contact" className="text-green-600 hover:underline font-medium">
                    Visit our Contact page →
                  </Link>
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
