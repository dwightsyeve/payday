"use client"

import React from "react"
import Link from "next/link"
import {
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  HeartHandshake,
} from "lucide-react"

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

const FEATURES = [
  {
    icon: Zap,
    title: "Easy Applications",
    body: "Finish online in minutes with a clear, guided flow—no confusing forms.",
    tone: "bg-leaf-500 text-white",
    panel: "from-leaf-500/15 to-mint-100",
  },
  {
    icon: Clock,
    title: "Fast Matching",
    body: "Get connected with lenders quickly when timing matters most.",
    tone: "bg-skywash-500 text-white",
    panel: "from-skywash-500/15 to-skywash-50",
  },
  {
    icon: Lock,
    title: "Trusted Network",
    body: "We work with reputable partners so you can compare solid options.",
    tone: "bg-leaf-700 text-white",
    panel: "from-leaf-700/10 to-mint-50",
  },
  {
    icon: HeartHandshake,
    title: "Human Support",
    body: "Questions along the way? Our team is ready to help you move forward.",
    tone: "bg-skywash-400 text-leaf-900",
    panel: "from-skywash-100 to-mint-100",
  },
]

const STEPS = [
  {
    n: "01",
    title: "Share your timing",
    body: "Tell us when you need funds—today, ASAP, or in the next few days.",
    color: "bg-leaf-500",
  },
  {
    n: "02",
    title: "Complete your request",
    body: "A short, secure application covering the basics lenders need to review.",
    color: "bg-skywash-500",
  },
  {
    n: "03",
    title: "Get matched",
    body: "We connect you with lenders in our network who may have an offer for you.",
    color: "bg-leaf-600",
  },
  {
    n: "04",
    title: "Review & decide",
    body: "Compare options on your terms—and move ahead only when you're ready.",
    color: "bg-skywash-400",
  },
]

const OFFERINGS = [
  "Personal finance lending",
  "Debt consolidation support",
  "Business funding paths",
  "Home & improvement needs",
  "Education-related financing",
  "Short-term cash bridges",
]

const RESOURCES = [
  {
    title: "Your guide to personal loans",
    body: "Rates, timelines, and what to expect when you apply for short-term funding.",
    href: "/about-us",
    image: HERO_IMAGES[0],
    accent: "text-leaf-600",
  },
  {
    title: "How loan matching works",
    body: "A clear look at our process—from first click to lender review.",
    href: "/#services",
    image: HERO_IMAGES[6],
    accent: "text-skywash-500",
  },
]

export default function LandingPage() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)
  const [heroIndex, setHeroIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-mint-50 text-slate-900 overflow-x-hidden">
      {/* Atmospheric background wash */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 10% -10%, rgba(125, 211, 252, 0.35), transparent 50%), radial-gradient(ellipse 70% 40% at 90% 10%, rgba(74, 222, 128, 0.28), transparent 45%), linear-gradient(180deg, #f0fdf6 0%, #ffffff 40%, #f0f9ff 100%)",
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-leaf-500/10 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-500">
            <img
              src="/pay.jpg"
              alt="PayDay"
              className="h-14 sm:h-16 w-auto rounded-md"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/#resources", label: "Resources" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-leaf-700 rounded-md hover:bg-mint-100 transition"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="ml-2 inline-flex items-center gap-2 bg-leaf-500 hover:bg-leaf-600 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition"
            >
              Get A Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          <button
            className="lg:hidden p-2.5 rounded-md bg-mint-100 text-leaf-700 hover:bg-mint-200 transition"
            aria-label="Open menu"
            onClick={() => setMobileNavOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <aside className="bg-white w-full h-full p-8 flex flex-col animate-slide-in-left">
              <button
                className="self-end p-2 rounded-md bg-leaf-500 text-white"
                aria-label="Close menu"
                onClick={() => setMobileNavOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col gap-5 mt-10 font-display">
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
                    className="text-2xl font-semibold text-leaf-700"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <p className="mt-auto text-center text-xs text-leaf-600/70">&copy; 2026 PayDay</p>
            </aside>
          </div>
        )}
      </header>

      {/* Hero — full-bleed composition */}
      <section className="relative min-h-[88vh] flex items-end sm:items-center overflow-hidden">
        <div className="absolute inset-0">
          {HERO_IMAGES.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: heroIndex === idx ? 1 : 0 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-leaf-900/90 via-leaf-900/70 to-skywash-500/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/80 via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 py-16 sm:py-24 max-w-4xl">
          <p className="font-display text-leaf-400 text-lg sm:text-2xl font-semibold tracking-wide mb-3 animate-fade-up">
            PayDay
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Funding that moves at the speed of real life.
          </h1>
          <p
            className="text-base sm:text-lg text-mint-100/90 max-w-xl mb-8 leading-relaxed animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Match with trusted lenders through a fast, secure online request—
            when an unexpected bill or opportunity can’t wait.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-leaf-400 hover:bg-leaf-500 text-leaf-900 font-semibold px-7 py-3.5 rounded-md transition"
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center gap-2 border border-white/40 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-md transition"
            >
              Learn more
            </Link>
          </div>

          {/* Progress dots */}
          <div className="flex gap-1.5 mt-10" aria-hidden>
            {HERO_IMAGES.slice(0, 8).map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-sm transition-all duration-500 ${
                  heroIndex % 8 === i ? "w-8 bg-leaf-400" : "w-3 bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-skywash-500 font-semibold text-sm tracking-wide uppercase mb-2">Why PayDay</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-leaf-900 mb-3">
              Built for clarity, speed, and peace of mind
            </h2>
            <p className="text-slate-600">
              A colorful, straightforward path from need to next step—without the noise.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`rounded-2xl bg-gradient-to-br ${f.panel} p-6 border border-white/80 animate-fade-up`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className={`w-12 h-12 ${f.tone} rounded-xl flex items-center justify-center mb-4`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-leaf-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About band */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-leaf-500 via-leaf-600 to-skywash-500" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 0, transparent 40%), radial-gradient(circle at 80% 70%, #bae6fd 0, transparent 35%)",
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1 text-white">
              <p className="font-semibold text-mint-100/90 text-sm tracking-wide uppercase mb-2">About us</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
                People-first lending connections
              </h2>
              <p className="text-mint-50/95 text-base leading-relaxed mb-4">
                PayDay helps borrowers request funding through a simple, secure flow and get matched
                with lenders who may fit their situation.
              </p>
              <p className="text-mint-100/85 text-sm sm:text-base leading-relaxed mb-8">
                Whether it’s an emergency expense, consolidation, or a timely opportunity—we focus on
                a process that’s fast to start and easy to understand.
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 bg-white text-leaf-800 font-semibold px-6 py-3 rounded-md hover:bg-mint-50 transition"
              >
                Our story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] max-w-lg mx-auto animate-float-soft">
                <img
                  src={HERO_IMAGES[7]}
                  alt="Team collaborating on financial planning"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="services" className="py-16 sm:py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-leaf-600 font-semibold text-sm tracking-wide uppercase mb-2">How it works</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-leaf-900 mb-3">
              Four bright steps to get moving
            </h2>
            <p className="text-slate-600">Simple process. Colorful clarity. No mystery.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.n} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-1.5rem] h-0.5 bg-gradient-to-r from-leaf-300 to-skywash-200" />
                )}
                <div className="bg-white/90 border border-mint-200 rounded-2xl p-6 h-full relative z-10">
                  <span
                    className={`inline-flex items-center justify-center w-14 h-14 ${step.color} text-white font-display font-bold text-lg rounded-xl mb-4`}
                  >
                    {step.n}
                  </span>
                  <h3 className="font-display font-bold text-lg text-leaf-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 bg-leaf-500 hover:bg-leaf-600 text-white font-semibold px-8 py-3.5 rounded-md transition"
            >
              Start your request
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service highlight */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-skywash-50 via-white to-mint-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[5/4] max-w-md lg:max-w-none">
              <img
                src={HERO_IMAGES[14]}
                alt="Growth and financial planning visuals"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-leaf-700/40 to-transparent" />
            </div>
            <div>
              <p className="text-skywash-500 font-semibold text-sm tracking-wide uppercase mb-2">
                The PayDay service
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-leaf-900 mb-4">
                Get reviewed fast—on your schedule
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                From emergency expenses to planned projects, our matching flow is designed to
                help you reach lenders without endless back-and-forth. Secure forms, clear next
                steps, and support when you need it.
              </p>
              <ul className="space-y-3 mb-8">
                {OFFERINGS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-leaf-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-leaf-700 font-semibold hover:text-leaf-900 transition"
              >
                Talk to support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-16 sm:py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-leaf-600 font-semibold text-sm tracking-wide uppercase mb-2">Resources</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-leaf-900">
                Helpful reads to start smart
              </h2>
            </div>
            <Link href="/about-us" className="text-skywash-500 font-semibold hover:text-skywash-500/80 text-sm">
              Explore about us →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {RESOURCES.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="group overflow-hidden rounded-2xl bg-white border border-mint-200 hover:border-leaf-300 transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={r.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className={`font-display font-bold text-xl mb-2 ${r.accent}`}>{r.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-leaf-500 via-leaf-600 to-skywash-500 px-8 py-14 sm:px-14 text-center text-white">
            <div
              aria-hidden
              className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-white/10"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-skywash-400/30"
            />
            <div className="relative max-w-2xl mx-auto">
              <Award className="w-10 h-10 mx-auto mb-4 text-mint-100" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Ready when you are
              </h2>
              <p className="text-mint-50/95 mb-8 leading-relaxed">
                Start a request in minutes and let PayDay help connect you with lenders who may
                offer the funding you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 bg-white text-leaf-800 font-semibold px-8 py-3.5 rounded-md hover:bg-mint-50 transition"
                >
                  Get started now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/50 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 transition"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-leaf-900 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <img src="/pay.jpg" alt="PayDay" className="h-16 w-auto rounded-md mb-4" />
              <div className="space-y-2 text-sm text-mint-200/80">
                <p>2712 Old Lebanon Pike #3</p>
                <p>Nashville, TN 37214</p>
                <p>
                  <a href="tel:+19513702095" className="hover:text-white transition">
                    Phone: +1 951-370-2095
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:support@paydayloanservice.online"
                    className="hover:text-white transition break-all"
                  >
                    Email: support@paydayloanservice.online
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold mb-4 text-leaf-400">Quick Links</h3>
              <div className="space-y-2 text-sm text-mint-100/70">
                <Link href="/" className="block hover:text-white transition">Home</Link>
                <Link href="/about-us" className="block hover:text-white transition">About Us</Link>
                <Link href="/#services" className="block hover:text-white transition">Services</Link>
                <Link href="/contact" className="block hover:text-white transition">Contact</Link>
                <Link href="/privacy" className="block hover:text-white transition">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold mb-4 text-skywash-400">Other Links</h3>
              <div className="space-y-2 text-sm text-mint-100/70">
                <Link href="/get-started" className="block hover:text-white transition">Personal Loans</Link>
                <Link href="/get-started" className="block hover:text-white transition">Apply Now</Link>
                <Link href="/terms" className="block hover:text-white transition">Terms & Conditions</Link>
                <Link href="/#resources" className="block hover:text-white transition">Resources</Link>
                <Link href="/contact" className="block hover:text-white transition">Support</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-mint-200/50">
            <p>&copy; 2026 PayDay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
