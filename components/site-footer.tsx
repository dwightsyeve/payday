import Link from "next/link"
import { SITE } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <img
                src="/pay.jpg"
                alt="Payday Loan Logo"
                className="h-16 w-auto sm:h-20 rounded-lg drop-shadow-lg"
              />
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{SITE.addressLine1}</p>
              <p>{SITE.addressLine2}</p>
              <p>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="hover:text-white transition-colors duration-200 touch-manipulation"
                >
                  Phone: {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors duration-200 touch-manipulation"
                >
                  Email: {SITE.email}
                </a>
              </p>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <Link href="/" className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation">
                  Home
                </Link>
              </p>
              <p>
                <Link href="/about-us" className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation">
                  About Us
                </Link>
              </p>
              <p>
                <Link href="/get-started" className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation">
                  Get Started
                </Link>
              </p>
              <p>
                <Link href="/contact" className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation">
                  Contact
                </Link>
              </p>
              <p>
                <Link href="/privacy" className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold mb-4">Other Links</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <Link href="/get-started" className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation">
                  Personal Loans
                </Link>
              </p>
              <p>
                <Link href="/get-started" className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation">
                  Apply Now
                </Link>
              </p>
              <p>
                <Link href="/about-us" className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation">
                  How It Works
                </Link>
              </p>
              <p>
                <Link href="/terms" className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation">
                  Terms & Conditions
                </Link>
              </p>
              <p>
                <Link href="/contact" className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation">
                  Support
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {SITE.year} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
