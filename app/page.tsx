"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Shield, Award, Smartphone, FileText, CheckCircle } from "lucide-react"

export default function Component() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  // Hero carousel state
  const heroImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80", // 1
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80", // 2
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1500&q=80", // 3
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80", // 4
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80", // 5
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80" // 6
  ];
  const [heroIndex, setHeroIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroImages.length]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 animate-fadein">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/pay.jpg" alt="Payday Loan Logo" className="w-130 h-20 rounded-lg drop-shadow-lg" />
          </div>

          {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-green-500 transition-all duration-300 py-2 px-3 rounded-md hover:bg-green-50 font-medium">Home</Link>
            <Link href="/about-us" className="text-gray-600 hover:text-green-500 transition-all duration-300 py-2 px-3 rounded-md hover:bg-green-50 font-medium">About Us</Link>
            <Link href="#" className="text-gray-600 hover:text-green-500 transition-all duration-300 py-2 px-3 rounded-md hover:bg-green-50 font-medium">Blog</Link>
            <Link href="#" className="text-gray-600 hover:text-green-500 transition-all duration-300 py-2 px-3 rounded-md hover:bg-green-50 font-medium">Contact</Link>
            <Link href="#" className="text-gray-600 hover:text-green-500 transition-all duration-300 py-2 px-3 rounded-md hover:bg-green-50 font-medium">Get A Quote</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-green-100 transition-all duration-300 touch-manipulation shadow-md"
            aria-label="Open mobile menu"
            onClick={() => setMobileNavOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Navigation Drawer */}
        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Premium Sidebar - covers full screen, close icon inside, now with solid white background */}
            <aside className="bg-white shadow-2xl w-full h-full p-8 flex flex-col space-y-8 animate-slide-in-left rounded-none border-none">
              <button
                className="self-end mb-6 p-2 rounded-full bg-green-400 hover:bg-green-500 shadow-lg"
                aria-label="Close sidebar"
                onClick={() => setMobileNavOpen(false)}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col gap-6 mt-4">
                <Link href="/" className="flex items-center gap-3 text-lg font-bold text-green-500 hover:text-green-600 transition" onClick={() => setMobileNavOpen(false)}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" /></svg>
                  Home
                </Link>
                <Link href="/about-us" className="flex items-center gap-3 text-lg font-bold text-green-500 hover:text-green-600 transition" onClick={() => setMobileNavOpen(false)}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" /></svg>
                  About Us
                </Link>
                <Link href="#" className="flex items-center gap-3 text-lg font-bold text-green-500 hover:text-green-600 transition" onClick={() => setMobileNavOpen(false)}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10V7a5 5 0 0110 0v3" /></svg>
                  Blog
                </Link>
                <Link href="#" className="flex items-center gap-3 text-lg font-bold text-green-500 hover:text-green-600 transition" onClick={() => setMobileNavOpen(false)}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8V6a5 5 0 0110 0v2" /></svg>
                  Contact
                </Link>
                <Link href="#" className="flex items-center gap-3 text-lg font-bold text-green-500 hover:text-green-600 transition" onClick={() => setMobileNavOpen(false)}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
                  Get A Quote
                </Link>
              </nav>
              <div className="mt-auto text-center text-xs text-green-500 opacity-70">&copy; 2024 PayDay. All rights reserved.</div>
            </aside>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Hero background ${idx + 1}`}
              style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: heroIndex === idx ? 0.5 : 0, transition: 'opacity 1s' }}
              className={`w-full h-full object-cover absolute top-0 left-0 ${heroIndex === idx ? 'opacity-50' : 'opacity-0'}`}
            />
          ))}
        </div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                GET APPROVED TODAY
                <br />
                <span className="text-green-400">WITH PayDay UPDATER</span>
              </h1>
              <p className="text-base sm:text-lg mb-8 text-gray-300 max-w-lg mx-auto lg:mx-0">
                Quick pre-approval and get loan options for a loan today to finance your next purchase. Secure online
                application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent min-h-[48px] px-8 touch-manipulation transition-all duration-200 active:scale-95"
                >
                  <Link href="/about-us">LEARN</Link>
                </Button>
                <Button asChild className="bg-green-400 text-black hover:bg-green-500 min-h-[48px] px-8 touch-manipulation transition-all duration-200 active:scale-95">
                  <Link href="/get-started">GET STARTED</Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Carousel Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {/* Carousel count indicator removed as requested */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-4 rounded-lg hover:bg-white transition-colors duration-200">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 touch-manipulation">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-bold mb-2 text-lg">Easy Applications</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Submit loan online in a few minutes with our simple application process.
              </p>
            </div>
            <div className="text-center p-4 rounded-lg hover:bg-white transition-colors duration-200">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 touch-manipulation">
                <Clock className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-bold mb-2 text-lg">Fast Approval</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get the money you need when you need it with our fast approval process.
              </p>
            </div>
            <div className="text-center p-4 rounded-lg hover:bg-white transition-colors duration-200">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 touch-manipulation">
                <Shield className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-bold mb-2 text-lg">Premium Lenders</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We work with the best lenders to get you the best rates and terms available.
              </p>
            </div>
            <div className="text-center p-4 rounded-lg hover:bg-white transition-colors duration-200">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 touch-manipulation">
                <Award className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-bold mb-2 text-lg">Excellent Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our expert team is here to help you through every step of the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 bg-green-400">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">ABOUT US</h2>
              <div className="w-16 h-1 bg-black mb-6 mx-auto lg:mx-0"></div>
              <p className="text-black mb-6 text-lg font-medium">
                A team of dedicated and expert advisors is committed to success in today's markets.
              </p>
              <p className="text-black text-sm sm:text-base leading-relaxed">
                We are a team of dedicated professionals who are committed to helping our clients achieve their
                financial goals. Our team has years of experience in the lending industry and we are passionate about
                helping people get the funding they need to succeed. We work with a network of trusted lenders to
                provide our clients with the best possible rates and terms.
              </p>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <img
                src="/site-img01.png"
                alt="About us visual"
                className="rounded-lg object-cover w-full max-w-md"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="relative py-12 sm:py-16 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/site-img03.jpg"
            alt="Service background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(8px)', opacity: 0.4 }}
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-green-400">THE PayDay UPDATER SERVICE</h1>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h3 className="text-xl font-bold mb-4">GET APPROVED FAST...</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                We help you get the funding you need for the project and fastest loan application process available
                today.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Whether you need funds for a new business venture, home improvement, debt consolidation, or any other
                financial need, our streamlined process makes it easy to get approved quickly. We work with multiple
                lenders to find you the best rates and terms available, and our expert team guides you through every
                step of the application process.
              </p>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <img
                src="/site-img03.jpg"
                alt="Service team working"
                className="rounded-lg object-cover w-full max-w-md"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">THE PayDay UPDATER SERVICE</h2>
            <p className="text-gray-600">Simple process to get you the funding you need</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 touch-manipulation">
                <span className="text-black font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold mb-2 text-lg">Quick & Easy Application</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete our simple online application in just a few minutes from anywhere.
              </p>
            </div>
            <div className="text-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 touch-manipulation">
                <span className="text-black font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold mb-2 text-lg">Lightning Fast Approval</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get approved in minutes with our advanced approval system and expert underwriters.
              </p>
            </div>
            <div className="text-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 touch-manipulation">
                <span className="text-black font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold mb-2 text-lg">Secure Funding</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get the funding you need with competitive rates and flexible terms that work for you.
              </p>
            </div>
            <div className="text-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 touch-manipulation">
                <span className="text-black font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold mb-2 text-lg">Repay Over Time</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Flexible repayment options that fit your budget and financial situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      {/* <section className="py-12 sm:py-16 bg-green-400">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Smartphone className="w-8 h-8 text-black mr-3" />
                <div>
                  <h3 className="font-bold text-black text-lg">DOWNLOAD THE</h3>
                  <h3 className="font-bold text-black text-lg">MOBILE APP</h3>
                </div>
              </div>
              <p className="text-black mb-6">
                Take your loan application with you wherever you go with our mobile app.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 min-h-[48px] px-8 touch-manipulation transition-all duration-200 active:scale-95">
                DOWNLOAD
              </Button>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <FileText className="w-8 h-8 text-black mr-3" />
                <div>
                  <h3 className="font-bold text-black text-lg">SPECIAL</h3>
                  <h3 className="font-bold text-black text-lg">OFFERS</h3>
                </div>
              </div>
              <p className="text-black mb-6">Check out our latest special offers and promotions.</p>
              <Button className="bg-black text-white hover:bg-gray-800 min-h-[48px] px-8 touch-manipulation transition-all duration-200 active:scale-95">
                VIEW OFFERS
              </Button>
            </div>
          </div>
          <div className="text-center">
            <Image
              src="/images/mobile-app-mockup.png"
              alt="Mobile app mockup"
              width={300}
              height={200}
              className="mx-auto object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </section> */}

      {/* Resources Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">OUR LATEST RESOURCES</h2>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-700 rounded flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Your Guide to Personal Loans</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Everything you need to know about personal loans including rates, terms, and how to apply.
                    </p>
                    <div className="text-green-400 text-xs">
                      <span>Jane Doe</span>
                      <span className="mx-2">•</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-700 rounded flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Business Loans & Your Company</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      How to secure business funding and grow your company with the right loan products.
                    </p>
                    <div className="text-yellow-400 text-xs">
                      <span>John Smith</span>
                      <span className="mx-2">•</span>
                      <span>7 min read</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">PayDay UPDATER ALERTS</h2>
            <p className="text-gray-600">Stay up to date with the latest</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="bg-gray-100 p-6 rounded-lg mb-6 hover:shadow-lg transition-shadow duration-200">
                <h3 className="font-bold mb-4 text-lg">PayDay UPDATER MOBILE</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Download our mobile app to get instant access to your account and apply for loans on the go.
                </p>
                <Button className="bg-green-400 text-black hover:bg-green-500 min-h-[48px] px-6 touch-manipulation transition-all duration-200 active:scale-95">
                  GET THE APP
                </Button>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Personal Finance Lending</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Business and Grants</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Real Estate Lending Programs</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Minority & Educational Loans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center sm:text-left">
                <div className="flex items-center">
            <img src="/pay.jpg" alt="Payday Loan Logo" className="w-130 h-20 rounded-lg drop-shadow-lg" />
          </div>
              <div className="space-y-2 text-sm text-gray-400">
                <p>123 Main Street</p>
                <p>Suite 100</p>
                <p>New York, NY 10001</p>
                <p>
                  <a
                    href="tel:5551234567"
                    className="hover:text-white transition-colors duration-200 touch-manipulation"
                  >
                    Phone: (555) 123-4567
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@PayDay.com"
                    className="hover:text-white transition-colors duration-200 touch-manipulation"
                  >
                    Email: info@PayDay.com
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation"
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation"
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation"
                  >
                    Services
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation"
                  >
                    Contact
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold mb-4">Other Links</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation"
                  >
                    Personal Loans
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation"
                  >
                    Business Loans
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation"
                  >
                    Real Estate
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation"
                  >
                    Resources
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200 py-2 px-1 block touch-manipulation"
                  >
                    Blog
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 PayDay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
