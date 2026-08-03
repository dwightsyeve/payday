import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SITE } from "@/lib/site"

export const metadata = {
  title: "About Us | PayDay",
  description:
    "Learn how PayDay connects borrowers with trusted lending partners for fast, secure funding.",
}

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gray-900 text-white py-14 sm:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Who We Are
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold mb-5">About PayDay</h1>
            <div className="w-20 h-1 bg-green-400 mx-auto mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              We help people access short-term funding through a simple, secure
              process—connecting you with a network of trusted lenders when you need cash fast.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-16 h-1 bg-green-400 mb-6" />
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                PayDay was built for people who need a clear path to financing—without long waits,
                confusing paperwork, or endless phone trees. We operate as a loan matching
                service: you complete one secure application, and we work with our network of
                lenders to find options that may fit your situation.
              </p>
              <p>
                Whether you are covering an unexpected bill, consolidating debt, funding a small
                project, or bridging a gap between paychecks, our goal is the same: make the process
                fast, transparent, and respectful of your time.
              </p>
            </div>
          </div>
        </section>

        {/* Mission / Values */}
        <section className="py-14 sm:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">What Guides Us</h2>
              <div className="w-16 h-1 bg-green-400 mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Speed",
                  body: "A streamlined application designed to get you matched with lenders as quickly as possible—often the same day you apply.",
                },
                {
                  title: "Security",
                  body: "Your information is handled with care. We use industry-standard practices to protect the personal and financial data you share.",
                },
                {
                  title: "Clarity",
                  body: "No mystery steps. You always know where you are in the process and how to reach our support team if you need help.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-14 sm:py-16 bg-green-400">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
              <p className="text-gray-800 max-w-xl mx-auto">
                Three simple steps from start to funding review.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Tell us your timing",
                  body: "Choose when you need funds—immediately, ASAP, or within a couple of days.",
                },
                {
                  step: "02",
                  title: "Complete your application",
                  body: "Share a few details about yourself, income, and banking so lenders can review your request.",
                },
                {
                  step: "03",
                  title: "Get matched",
                  body: "We connect you with lenders in our network who may be able to offer you a loan.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white/90 p-6 rounded-lg">
                  <p className="text-green-600 font-bold text-sm mb-2">{item.step}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/get-started"
                className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-md hover:bg-gray-800 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Contact strip */}
        <section className="py-14 sm:py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our support team is here to help. Reach out by phone or email, or visit our contact page.
            </p>
            <div className="space-y-2 text-gray-700 mb-8">
              <p>
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-green-600 font-medium">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-green-600 font-medium">
                  {SITE.email}
                </a>
              </p>
              <p className="text-sm text-gray-500">
                {SITE.addressLine1}, {SITE.addressLine2}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-green-400 text-gray-900 font-semibold px-8 py-3 rounded-md hover:bg-green-500 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
