"use client"
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const steps = [
  "Personal Info",
  "Employment & Income",
  "Banking Info",
  "Review & Submit"
];

export default function LoanApplication() {
  // ...existing code...
  const Head = require('next/head').default;
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  const [step, setStep] = useState<number>(1);
  type FormType = {
    loanAmount: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zip: string;
    street: string;
    city: string;
    state: string;
    dob: string;
    ssn: string;
    military: string;
    dlFront: File | null;
    dlBack: File | null;
    incomeSource: string;
    employerName: string;
    employerPhone: string;
    netIncome: string;
    payFrequency: string;
    nextPayDate: string;
    accountType: string;
    directDeposit: string;
    creditRating: string;
    loanPurpose: string;
    bankName: string;
    bankState: string;
    aba: string;
    accountNumber: string;
    acknowledge: boolean;
  };
  const [form, setForm] = useState<FormType>({
    loanAmount: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    street: "",
    city: "",
    state: "",
    dob: "",
    ssn: "",
    military: "",
    dlFront: null,
    dlBack: null,
    incomeSource: "",
    employerName: "",
    employerPhone: "",
    netIncome: "",
    payFrequency: "",
    nextPayDate: "",
    accountType: "",
    directDeposit: "",
    creditRating: "",
    loanPurpose: "",
    bankName: "",
    bankState: "",
    aba: "",
    accountNumber: "",
    acknowledge: false
  });

  // Supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  type ErrorsType = Partial<Record<keyof FormType, string>>;
  const [errors, setErrors] = useState<ErrorsType>({});

  // Simple validation for required fields
  function validate(fields: (keyof FormType)[]): boolean {
    const newErrors: ErrorsType = {};
    fields.forEach((field: keyof FormType) => {
      if (!form[field]) newErrors[field] = "Required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? (files ? files[0] : null) : value
    }));
  }

  function next(fields: (keyof FormType)[]) {
    if (validate(fields)) setStep((s) => s + 1);
  }
  function prev() {
    setStep((s) => s - 1);
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <svg width="48" height="48" viewBox="0 0 48 48" className="mb-4 animate-walk" xmlns="http://www.w3.org/2000/svg">
            <g>
              <ellipse cx="24" cy="44" rx="10" ry="3" fill="#222" opacity="0.2" />
              <circle cx="24" cy="14" r="6" fill="#222" />
              <rect x="21" y="20" width="6" height="14" rx="3" fill="#222" />
              <rect x="18" y="34" width="4" height="8" rx="2" fill="#222" transform="rotate(-20 20 38)" />
              <rect x="26" y="34" width="4" height="8" rx="2" fill="#222" transform="rotate(20 28 38)" />
              <rect x="19" y="24" width="4" height="10" rx="2" fill="#222" transform="rotate(-25 21 29)" />
              <rect x="25" y="24" width="4" height="10" rx="2" fill="#222" transform="rotate(25 27 29)" />
            </g>
          </svg>
          <span className="text-green-500 font-semibold text-lg">Loading application...</span>
          <style>{`
            .animate-walk {
              animation: walk-bounce 1.2s infinite linear;
            }
            @keyframes walk-bounce {
              0% { transform: translateX(0) translateY(0); }
              20% { transform: translateX(6px) translateY(-2px); }
              40% { transform: translateX(12px) translateY(0); }
              60% { transform: translateX(18px) translateY(-2px); }
              80% { transform: translateX(24px) translateY(0); }
              100% { transform: translateX(0) translateY(0); }
            }
          `}</style>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white shadow-sm py-4 px-8 flex items-center justify-between">
        <div className="flex items-center">
            <img src="/pay.jpg" alt="Payday Loan Logo" className="w-130 h-20 rounded-lg drop-shadow-lg" />
          </div>
        <nav className="flex space-x-8 text-sm">
          <Link href="/" className="text-gray-600 hover:text-blue-700">Home</Link>
          <Link href="/about-us" className="text-gray-600 hover:text-blue-700">About Us</Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-100 py-8">
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6 text-center">
              <span className="text-xs text-gray-400">Step {step} of {steps.length}</span>
              <h2 className="font-bold text-2xl text-gray-800 mt-2">{steps[step-1]}</h2>
            </div>
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <form onSubmit={e => {e.preventDefault(); next(["loanAmount","firstName","lastName","email","phone","zip","street","city","state","dob","ssn","dlFront","dlBack"]);}}>
                <label className="block mb-2 font-semibold">Loan Amount</label>
                <select name="loanAmount" value={form.loanAmount} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
                  <option value="">Select amount</option>
                  <option value="1000">$1,000</option>
                  <option value="1500">$1,500</option>
                  <option value="2000">$2,000</option>
                  <option value="2500">$2,500</option>
                  <option value="3000">$3,000</option>
                  <option value="3500">$3,500</option>
                  <option value="4000">$4,000</option>
                  <option value="4500">$4,500</option>
                  <option value="5000">$5,000</option>
                </select>
                {errors.loanAmount && <p className="text-red-500 text-xs mb-2">{errors.loanAmount}</p>}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-1">First Name</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} className="w-full p-2 border rounded" />
                    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block mb-1">Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} className="w-full p-2 border rounded" />
                    {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                  </div>
                </div>
                <label className="block mb-1">Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                <label className="block mb-1">Mobile Number</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                <label className="block mb-1">Zip Code</label>
                <input name="zip" value={form.zip} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.zip && <p className="text-red-500 text-xs">{errors.zip}</p>}
                <label className="block mb-1">Street Address</label>
                <input name="street" value={form.street} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.street && <p className="text-red-500 text-xs">{errors.street}</p>}
                <label className="block mb-1">City</label>
                <input name="city" value={form.city} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
                <label className="block mb-1">State</label>
                <input name="state" value={form.state} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
                <label className="block mb-1">Date of Birth</label>
                <input name="dob" type="date" value={form.dob} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.dob && <p className="text-red-500 text-xs">{errors.dob}</p>}
                <label className="block mb-1">SSN <span className="text-xs text-gray-400">(This will never affect your credit score)</span></label>
                <input name="ssn" value={form.ssn} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.ssn && <p className="text-red-500 text-xs">{errors.ssn}</p>}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-1">Driver License Front</label>
                    <input name="dlFront" type="file" accept="image/*" onChange={handleChange} className="w-full p-2 border rounded" />
                    {errors.dlFront && <p className="text-red-500 text-xs">{errors.dlFront}</p>}
                  </div>
                  <div>
                    <label className="block mb-1">Driver License Back</label>
                    <input name="dlBack" type="file" accept="image/*" onChange={handleChange} className="w-full p-2 border rounded" />
                    {errors.dlBack && <p className="text-red-500 text-xs">{errors.dlBack}</p>}
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button type="button" className="bg-gray-200 text-gray-800 px-6 py-2 rounded" onClick={prev}>Back</button>
                  <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded">Next</button>
                </div>
              </form>
            )}
            {/* Step 2: Employment & Income */}
            {step === 2 && (
              <form onSubmit={e => {e.preventDefault(); next(["incomeSource","employerName","employerPhone","netIncome","payFrequency","nextPayDate"]);}}>
                <label className="block mb-1">Source of Income</label>
                <select name="incomeSource" value={form.incomeSource} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
                  <option value="">Select source</option>
                  <option value="Employment">Employment</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Benefits">Benefits</option>
                  <option value="Other">Other</option>
                </select>
                {errors.incomeSource && <p className="text-red-500 text-xs">{errors.incomeSource}</p>}
                <label className="block mb-1">Employer Name</label>
                <input name="employerName" value={form.employerName} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.employerName && <p className="text-red-500 text-xs">{errors.employerName}</p>}
                <label className="block mb-1">Employer Phone Number</label>
                <input name="employerPhone" value={form.employerPhone} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.employerPhone && <p className="text-red-500 text-xs">{errors.employerPhone}</p>}
                <label className="block mb-1">Monthly Net Income</label>
                <select name="netIncome" value={form.netIncome} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
                  <option value="">Select amount</option>
                  <option value="1000">$1,000</option>
                  <option value="1500">$1,500</option>
                  <option value="2000">$2,000</option>
                  <option value="2500">$2,500</option>
                  <option value="3000">$3,000</option>
                  <option value="3500">$3,500</option>
                  <option value="4000">$4,000</option>
                  <option value="4500">$4,500</option>
                  <option value="5000">$5,000</option>
                </select>
                {errors.netIncome && <p className="text-red-500 text-xs">{errors.netIncome}</p>}
                <label className="block mb-1">How often are you paid?</label>
                <select name="payFrequency" value={form.payFrequency} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
                  <option value="">Select frequency</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Bi-Weekly">Bi-Weekly</option>
                  <option value="Semi-Monthly">Semi-Monthly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Every 3 Months">Every 3 Months</option>
                </select>
                {errors.payFrequency && <p className="text-red-500 text-xs">{errors.payFrequency}</p>}
                <label className="block mb-1">Next Pay Date</label>
                <input name="nextPayDate" type="date" value={form.nextPayDate} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.nextPayDate && <p className="text-red-500 text-xs">{errors.nextPayDate}</p>}
                <div className="flex justify-between mt-6">
                  <button type="button" className="bg-gray-200 text-gray-800 px-6 py-2 rounded" onClick={prev}>Back</button>
                  <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded">Next</button>
                </div>
              </form>
            )}
            {/* Step 3: Banking Info */}
            {step === 3 && (
              <form onSubmit={e => {e.preventDefault(); next(["accountType","directDeposit","creditRating","loanPurpose","bankName","bankState","aba","accountNumber"]);}}>
                <label className="block mb-1">Account Type</label>
                <select name="accountType" value={form.accountType} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
                  <option value="">Select type</option>
                  <option value="Checking">Checking</option>
                  <option value="Saving">Saving</option>
                </select>
                {errors.accountType && <p className="text-red-500 text-xs">{errors.accountType}</p>}
                <label className="block mb-1">Is your pay a Direct Deposit?</label>
                <select name="directDeposit" value={form.directDeposit} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.directDeposit && <p className="text-red-500 text-xs">{errors.directDeposit}</p>}
                <label className="block mb-1">Approximate Credit Rating</label>
                <select name="creditRating" value={form.creditRating} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
                  <option value="">Select rating</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
                {errors.creditRating && <p className="text-red-500 text-xs">{errors.creditRating}</p>}
                <label className="block mb-1">Loan Purpose</label>
                <select name="loanPurpose" value={form.loanPurpose} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
                  <option value="">Select purpose</option>
                  <option value="Personal">Personal</option>
                  <option value="Business">Business</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
                {errors.loanPurpose && <p className="text-red-500 text-xs">{errors.loanPurpose}</p>}
                <label className="block mb-1">Bank Name</label>
                <input name="bankName" value={form.bankName} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.bankName && <p className="text-red-500 text-xs">{errors.bankName}</p>}
                <label className="block mb-1">Bank State</label>
                <input name="bankState" value={form.bankState} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.bankState && <p className="text-red-500 text-xs">{errors.bankState}</p>}
                <label className="block mb-1">ABA Routing Number</label>
                <input name="aba" value={form.aba} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.aba && <p className="text-red-500 text-xs">{errors.aba}</p>}
                <label className="block mb-1">Account Number</label>
                <input name="accountNumber" value={form.accountNumber} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.accountNumber && <p className="text-red-500 text-xs">{errors.accountNumber}</p>}
                <div className="flex justify-between mt-6">
                  <button type="button" className="bg-gray-200 text-gray-800 px-6 py-2 rounded" onClick={prev}>Back</button>
                  <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded">Next</button>
                </div>
              </form>
            )}
            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!form.acknowledge) return;

                  // Upload images to Supabase Storage and get public URLs
                  let dlFrontUrl = "";
                  let dlBackUrl = "";
                  try {
                    if (form.dlFront) {
                      const { data, error } = await supabase.storage.from("loan-uploads").upload(`dlFront-${Date.now()}.jpg`, form.dlFront, { cacheControl: "3600", upsert: false });
                      if (error) throw error;
                      dlFrontUrl = data && data.path ? (supabase.storage.from("loan-uploads").getPublicUrl(data.path).data.publicUrl) : "";
                    }
                    if (form.dlBack) {
                      const { data, error } = await supabase.storage.from("loan-uploads").upload(`dlBack-${Date.now()}.jpg`, form.dlBack, { cacheControl: "3600", upsert: false });
                      if (error) throw error;
                      dlBackUrl = data && data.path ? (supabase.storage.from("loan-uploads").getPublicUrl(data.path).data.publicUrl) : "";
                    }
                  } catch (err) {
                    alert("Image upload failed. Please try again.");
                    return;
                  }

                  // Prepare data with image URLs
                  // Prepare data with image URLs
                  const { dlFront, dlBack, ...rest } = form;
                  const dataToSend = { ...rest, dlFront: dlFrontUrl, dlBack: dlBackUrl };

                  try {
                    const functionUrl = process.env.NEXT_PUBLIC_SUPABASE_FUNCTION_URL;
                    if (!functionUrl) {
                      alert("Supabase function URL is not set.");
                      return;
                    }
                    const res = await fetch(functionUrl, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(dataToSend)
                    });
                    if (res.ok) {
                      alert("Application sent successfully!");
                    } else {
                      alert("Failed to send application. Please try again.");
                    }
                  } catch {
                    alert("Network error. Please try again.");
                  }
                }}
              >
                <div className="mb-4 text-left">
                  <h3 className="font-bold text-lg mb-2">Review Your Information</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {/* Show all fields except dlFront, dlBack, acknowledge, and show city/state explicitly for clarity */}
                    {Object.entries(form).map(([key, value]) => (
                      key !== "dlFront" && key !== "dlBack" && key !== "acknowledge" && (
                        <li key={key}><strong>{key === "city" ? "City" : key === "state" ? "State" : key}:</strong> {value ? value.toString() : ""}</li>
                      )
                    ))}
                  </ul>
                </div>
                <label className="flex items-center mb-4">
                  <input type="checkbox" name="acknowledge" checked={form.acknowledge} onChange={handleChange} className="mr-2" />
                  <span className="text-xs text-gray-600">By clicking submit, I acknowledge that I have read and agree to the terms and conditions.</span>
                </label>
                <div className="flex justify-between mt-6">
                  <button type="button" className="bg-gray-200 text-gray-800 px-6 py-2 rounded" onClick={prev}>Back</button>
                  <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded" disabled={!form.acknowledge}>Submit</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      </div>
    </>
  );
}
