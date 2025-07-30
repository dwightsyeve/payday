import React from "react"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-yellow-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6">About Us</h1>
        <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
        <p className="text-lg text-gray-700 mb-4 max-w-2xl">
          Welcome to PayDay! We are a team of dedicated professionals committed to helping our clients achieve their financial goals. With years of experience in the lending industry, we are passionate about helping people get the funding they need to succeed. We work with a network of trusted lenders to provide our clients with the best possible rates and terms.
        </p>
        <p className="text-base text-gray-600 max-w-2xl">
          Our mission is to make the loan process simple, fast, and secure. Whether you need funds for a new business venture, home improvement, debt consolidation, or any other financial need, our streamlined process makes it easy to get approved quickly. Our expert team guides you through every step of the application process.
        </p>
      </div>
    </div>
  )
}
