"use client"

import React from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SITE } from "@/lib/site"

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false)
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Subject: ${form.subject}`,
      "",
      form.message,
    ].join("\n")

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      form.subject || "Contact from PayDay website"
    )}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-gray-900 text-white py-14 sm:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Get In Touch
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold mb-5">Contact Us</h1>
            <div className="w-20 h-1 bg-green-400 mx-auto mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Questions about an application, our process, or how we match borrowers with lenders?
              We are happy to help.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
              {/* Contact details */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Details</h2>
                  <div className="space-y-5 text-gray-700">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-1">
                        Phone
                      </p>
                      <a
                        href={`tel:${SITE.phoneTel}`}
                        className="text-lg font-medium hover:text-green-600 transition"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-lg font-medium hover:text-green-600 transition break-all"
                      >
                        {SITE.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-1">
                        Address
                      </p>
                      <p className="text-lg font-medium leading-snug">
                        {SITE.addressLine1}
                        <br />
                        {SITE.addressLine2}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-green-100 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Ready to apply?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Skip the wait and start your loan request in a few minutes.
                  </p>
                  <Link
                    href="/get-started"
                    className="inline-block bg-green-400 text-gray-900 font-semibold px-5 py-2.5 rounded-md hover:bg-green-500 transition text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Send a Message</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Fill out the form and we will get back to you as soon as we can.
                  </p>

                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-md p-5 text-center">
                      <p className="font-semibold text-green-800 mb-1">Opening your email app…</p>
                      <p className="text-sm text-green-700">
                        If nothing opens, email us directly at{" "}
                        <a href={`mailto:${SITE.email}`} className="underline font-medium">
                          {SITE.email}
                        </a>
                        .
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-sm text-green-700 underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full name
                          </label>
                          <input
                            id="name"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder={SITE.phone}
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white"
                          >
                            <option value="">Select a topic</option>
                            <option value="Application Help">Application Help</option>
                            <option value="General Question">General Question</option>
                            <option value="Lender Match Inquiry">Lender Match Inquiry</option>
                            <option value="Privacy Request">Privacy Request</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-y"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-green-400 text-gray-900 font-semibold px-8 py-3 rounded-md hover:bg-green-500 transition"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
