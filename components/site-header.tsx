"use client"

import React from "react"
import Link from "next/link"
import { SITE } from "@/lib/site"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/get-started", label: "Get A Quote" },
]

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md"
        >
          <img
            src="/pay.jpg"
            alt="Payday Loan Logo"
            className="h-16 w-auto sm:h-20 rounded-lg drop-shadow-lg hover:opacity-90 transition-opacity"
          />
        </Link>

        <nav className="hidden lg:flex space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-green-500 transition-all duration-300 py-2 px-3 rounded-md hover:bg-green-50 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

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

      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <aside className="bg-white shadow-2xl w-full h-full p-8 flex flex-col space-y-8">
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-bold text-green-500 hover:text-green-600 transition"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/privacy"
                className="text-lg font-bold text-green-500 hover:text-green-600 transition"
                onClick={() => setMobileNavOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-lg font-bold text-green-500 hover:text-green-600 transition"
                onClick={() => setMobileNavOpen(false)}
              >
                Terms & Conditions
              </Link>
            </nav>
            <div className="mt-auto text-center text-xs text-green-500 opacity-70">
              &copy; {SITE.year} PayDay. All rights reserved.
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}
