"use client"

import React from "react"
import Link from "next/link"
import { Clock, Shield, Users, CheckCircle, ArrowRight } from "lucide-react"

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1600&q=80",
]

export default function LandingPage() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)
  const [heroIndex, setHeroIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white text-stone-800 font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="rounded focus:outline-none focus:ring-2 focus:ring-emerald-600">
            <img src="/pay.jpg" alt="PayDay" className="h-14 sm:h-16 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <Link href="/" className="text-stone-600 hover:text-stone-900">Home</Link>
            <Link href="/about-us" className="text-stone-600 hover:text-stone-900">About Us</Link>
            <Link href="/#resources" className="text-stone-600 hover:text-stone-900">Resources</Link>
            <Link href="/contact" className="text-stone-600 hover:text-stone-900">Contact</Link>
            <Link
              href="/get-started"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded"
            >
              Get A Quote
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-stone-700"
            aria-label="Open menu"
            onClick={() => setMobileNavOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 bg-white lg:hidden p-8 flex flex-col">
            <button
              className="self-end p-2 text-stone-700"
              aria-label="Close menu"
              onClick={() => setMobileNavOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col gap-5 mt-10 text-lg">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/#resources", label: "Resources" },
                { href: "/contact", label: "Contact" },
                { href: "/get-started", label: "Get A Quote" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-stone-800"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="mt-auto text-center text-xs text-stone-400">&copy; 2026 PayDay</p>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-end sm:items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          {HERO_IMAGES.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: heroIndex === idx ? 0.45 : 0 }}
            />
          ))}
          <div className="absolute inset-0 bg-stone-900/55" />
        </div>

        <div className="relative container mx-auto px-4 py-16 sm:py-20 max-w-3xl">
          <p className="font-display text-emerald-400 text-xl sm:text-2xl font-semibold mb-3">
            PayDay
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Get the funding you need, without the runaround.
          </h1>
          <p className="text-stone-200 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            A straightforward online request that connects you with lenders who may be able to help—
            quickly and securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded"
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center border border-white/50 text-white hover:bg-white/10 font-medium px-6 py-3 rounded"
            >
              About us
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Users,
                title: "Easy applications",
                body: "Fill out a short form online. No long phone trees or cluttered paperwork.",
              },
              {
                icon: Clock,
                title: "Fast turnaround",
                body: "When timing matters, we help move your request to lenders without delay.",
              },
              {
                icon: Shield,
                title: "Secure process",
                body: "Your information is handled carefully through a protected application flow.",
              },
              {
                icon: CheckCircle,
                title: "Real support",
                body: "Questions come up. Reach us by phone or email and we’ll help where we can.",
              },
            ].map((item) => (
              <div key={item.title}>
                <item.icon className="w-7 h-7 text-emerald-700 mb-3" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-lg text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                About PayDay
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We’re a loan matching service. You complete one secure request, and we work with a
                network of lenders who may review it for an offer.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                We don’t pretend every application gets funded—approval depends on the lender. Our job
                is to make starting the process simple and honest.
              </p>
              <Link href="/about-us" className="text-emerald-700 font-medium hover:text-emerald-800 inline-flex items-center gap-1">
                Read more about us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-stone-200">
              <img
                src={HERO_IMAGES[7]}
                alt="People working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="services" className="py-16 sm:py-20 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mb-2 text-center">
            How it works
          </h2>
          <p className="text-stone-600 text-center mb-12 max-w-lg mx-auto">
            Four steps. Nothing fancy—just a clear path from request to review.
          </p>
          <ol className="space-y-8">
            {[
              {
                n: "1",
                title: "Tell us your timing",
                body: "Choose whether you need funds immediately, ASAP, or in the next couple of days.",
              },
              {
                n: "2",
                title: "Complete your application",
                body: "Share the basics—contact info, income, and banking details lenders typically need.",
              },
              {
                n: "3",
                title: "We match you with lenders",
                body: "Your request goes to partners in our network who may be able to offer a loan.",
              },
              {
                n: "4",
                title: "Review any offers",
                body: "Look over the terms carefully before you accept. You’re always in control of the decision.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 bg-emerald-700 text-white text-sm font-semibold flex items-center justify-center rounded">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-lg text-stone-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="text-center mt-12">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-3 rounded"
            >
              Start your request
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What we help with */}
      <section className="py-16 sm:py-20 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="aspect-[5/4] overflow-hidden bg-stone-200 order-2 lg:order-1">
              <img
                src={HERO_IMAGES[14]}
                alt="Financial planning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                What people use PayDay for
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Short-term needs, unexpected bills, consolidation, and everyday funding gaps—
                situations where waiting weeks isn’t really an option.
              </p>
              <ul className="space-y-3 text-sm text-stone-700">
                {[
                  "Personal loans and everyday expenses",
                  "Debt consolidation options",
                  "Business-related cash needs",
                  "Home repairs and improvements",
                  "Education-related costs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" strokeWidth={1.75} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-16 sm:py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
            Resources
          </h2>
          <p className="text-stone-600 mb-10 max-w-lg">
            A couple of starting points if you want the lay of the land before you apply.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Personal loans, explained simply",
                body: "What to expect on rates, timelines, and the paperwork lenders usually ask for.",
                href: "/about-us",
                image: HERO_IMAGES[0],
              },
              {
                title: "How our matching works",
                body: "A plain-language walkthrough of the steps from first click to lender review.",
                href: "/#services",
                image: HERO_IMAGES[6],
              },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="group block">
                <div className="aspect-[16/9] overflow-hidden bg-stone-200 mb-4">
                  <img
                    src={r.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-semibold text-xl text-stone-900 group-hover:text-emerald-700 mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">{r.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Ready to get started?
          </h2>
          <p className="text-emerald-100 mb-8 leading-relaxed">
            Begin a request in a few minutes. If you have questions first, we’re happy to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 font-medium px-6 py-3 rounded hover:bg-stone-100"
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/40 text-white hover:bg-white/10 font-medium px-6 py-3 rounded"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <img src="/pay.jpg" alt="PayDay" className="h-14 w-auto mb-4 opacity-90" />
              <div className="space-y-1 text-sm text-stone-400">
                <p>2712 Old Lebanon Pike #3</p>
                <p>Nashville, TN 37214</p>
                <p>
                  <a href="tel:+19513702095" className="hover:text-white">
                    +1 951-370-2095
                  </a>
                </p>
                <p>
                  <a href="mailto:support@paydayloanservice.online" className="hover:text-white break-all">
                    support@paydayloanservice.online
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-3 text-sm">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link href="/" className="block hover:text-white">Home</Link>
                <Link href="/about-us" className="block hover:text-white">About Us</Link>
                <Link href="/#services" className="block hover:text-white">Services</Link>
                <Link href="/contact" className="block hover:text-white">Contact</Link>
                <Link href="/privacy" className="block hover:text-white">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-3 text-sm">Other Links</h3>
              <div className="space-y-2 text-sm">
                <Link href="/get-started" className="block hover:text-white">Personal Loans</Link>
                <Link href="/get-started" className="block hover:text-white">Apply Now</Link>
                <Link href="/terms" className="block hover:text-white">Terms & Conditions</Link>
                <Link href="/#resources" className="block hover:text-white">Resources</Link>
                <Link href="/contact" className="block hover:text-white">Support</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-10 pt-6 text-center text-xs text-stone-500">
            <p>&copy; 2026 PayDay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
