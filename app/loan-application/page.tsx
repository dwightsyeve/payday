// Fix for window.dataLayer TypeScript error
declare global {
  interface Window {
    dataLayer?: any[];
  }
}
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
            const [loading, setLoading] = React.useState(false);
  const [showConsolidationOptions, setShowConsolidationOptions] = useState(false);
  const [customConsolidation, setCustomConsolidation] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [bankSuggestions, setBankSuggestions] = useState<string[]>([]);
  const [showBankSuggestions, setShowBankSuggestions] = useState(false);
  const [bankSearchTimeout, setBankSearchTimeout] = useState<NodeJS.Timeout | null>(null);
  
  // US States for dropdown
  const usStates = [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' },
    { code: 'CA', name: 'California' },
    { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' },
    { code: 'DE', name: 'Delaware' },
    { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' },
    { code: 'HI', name: 'Hawaii' },
    { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' },
    { code: 'IN', name: 'Indiana' },
    { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' },
    { code: 'KY', name: 'Kentucky' },
    { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' },
    { code: 'MD', name: 'Maryland' },
    { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' },
    { code: 'MN', name: 'Minnesota' },
    { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' },
    { code: 'MT', name: 'Montana' },
    { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' },
    { code: 'NH', name: 'New Hampshire' },
    { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' },
    { code: 'NY', name: 'New York' },
    { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' },
    { code: 'OH', name: 'Ohio' },
    { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' },
    { code: 'PA', name: 'Pennsylvania' },
    { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' },
    { code: 'SD', name: 'South Dakota' },
    { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' },
    { code: 'UT', name: 'Utah' },
    { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' },
    { code: 'WA', name: 'Washington' },
    { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' },
    { code: 'WY', name: 'Wyoming' }
  ];
  
  // Validation functions
  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
    return phoneRegex.test(phone);
  };
  
  const validateSSN = (ssn: string) => {
    const ssnRegex = /^\d{3}[-.]?\d{2}[-.]?\d{4}$/;
    return ssnRegex.test(ssn);
  };
  
  const Head = require('next/head').default;
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    
    // Get user's location when component mounts
    const getLocation = async () => {
      if (!navigator.geolocation) {
        setLocationError('Geolocation is not supported by your browser');
        return;
      }

      setIsLocating(true);
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          });
        });

        // Use OpenStreetMap's Nominatim for reverse geocoding
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&addressdetails=1`
        );
        const data = await response.json();

        if (data.address) {
          setForm(prev => ({
            ...prev,
            city: data.address.city || data.address.town || data.address.village || '',
            state: data.address.state || '',
            zip: data.address.postcode || ''
          }));
        }
      } catch (error) {
        console.error('Error getting location:', error);
        setLocationError('Could not determine your location. Please enter manually.');
      } finally {
        setIsLocating(false);
      }
    };

    getLocation();
    
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

  const validate = (fields: (keyof FormType)[] = []) => {
    const newErrors: Partial<Record<keyof FormType, string>> = {};
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validPhone = /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    const validSSN = /^\d{3}-?\d{2}-?\d{4}$/;
    const validABA = /^\d{9}$/;
    const validAccountNumber = /^\d{4,17}$/;

    const fieldsToValidate = fields.length > 0 ? fields : (Object.keys(form) as (keyof FormType)[]);

    // Special validation for ABA Routing Number
    if ((fieldsToValidate.includes('aba') || fieldsToValidate.length === 0) && form.aba) {
      if (!validABA.test(form.aba)) {
        newErrors.aba = 'Please enter a valid 9-digit ABA routing number';
      }
    }

    // Special validation for Account Number
    if ((fieldsToValidate.includes('accountNumber') || fieldsToValidate.length === 0) && form.accountNumber) {
      if (!validAccountNumber.test(form.accountNumber)) {
        newErrors.accountNumber = 'Account number must be between 4-17 digits';
      }
    }

    for (const field of fieldsToValidate) {
      if (!form[field]) {
        newErrors[field] = "Required";
      } else if (field === 'phone' && !validatePhoneNumber(form.phone)) {
        newErrors.phone = "Please enter a valid phone number (e.g., 123-456-7890)";
      } else if (field === 'ssn' && !validateSSN(form.ssn)) {
        newErrors.ssn = "Please enter a valid SSN (e.g., 123-45-6789)";
      } else if (field === 'aba' && !validABA.test(form.aba)) {
        newErrors.aba = 'Please enter a valid 9-digit ABA routing number';
      } else if (field === 'accountNumber' && !validAccountNumber.test(form.accountNumber)) {
        newErrors.accountNumber = 'Account number must be between 4-17 digits';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // Common US banks for suggestions
  const commonBanks = [
    'Bank of America', 'Chase', 'Wells Fargo', 'Citibank', 'U.S. Bank',
    'Truist Bank', 'PNC Bank', 'TD Bank', 'Capital One', 'Ally Bank',
    'USAA', 'Navy Federal Credit Union', 'Charles Schwab Bank', 'Discover Bank'
  ];

  const searchBanks = (query: string) => {
    if (!query.trim()) {
      setBankSuggestions(commonBanks);
      return;
    }
    const filtered = commonBanks.filter(bank => 
      bank.toLowerCase().includes(query.toLowerCase())
    );
    setBankSuggestions(filtered);
  };

  const handleBankNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm(prev => ({ ...prev, bankName: value }));
    
    // Clear any existing timeout
    if (bankSearchTimeout) {
      clearTimeout(bankSearchTimeout);
    }
    
    // Set a new timeout
    const timeout = setTimeout(() => {
      searchBanks(value);
    }, 200); // 200ms delay
    
    setBankSearchTimeout(timeout);
  };

  const handleBankSelect = (bankName: string) => {
    setForm(prev => ({ ...prev, bankName }));
    setShowBankSuggestions(false);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    
    // Special handling for bank name to show suggestions
    if (name === 'bankName') {
      handleBankNameChange(e as React.ChangeEvent<HTMLInputElement>);
      return;
    }
    
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? (files ? files[0] : null) : value
    }));
  }

  const handleLoanPurposeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setShowConsolidationOptions(value === 'Debt Consolidation');
    if (value !== 'Debt Consolidation') {
      setForm(prev => ({ ...prev, loanPurpose: value }));
    }
  };

  const handleConsolidationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setForm(prev => ({
      ...prev,
      loanPurpose: value === 'others' ? 'others' : value
    }));
  };

  const handleCustomConsolidationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomConsolidation(value);
    setForm(prev => ({ ...prev, loanPurpose: value || 'Other Debt Consolidation' }));
  };

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
                <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md">
                  <img src="/pay.jpg" alt="Payday Loan Logo" className="w-130 h-20 rounded-lg drop-shadow-lg hover:opacity-90 transition-opacity" />
                </Link>
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
            
              <form onSubmit={e => {
                e.preventDefault();
                const fields: (keyof FormType)[] = ["firstName","lastName","email","phone","zip","street","city","state","dob","ssn","dlFront","dlBack"];
                
                // If user selected 'others' and typed something, use that as the loan purpose
                if (form.loanPurpose === 'others' && customConsolidation) {
                  setForm(prev => ({ ...prev, loanPurpose: customConsolidation }));
                }
                
                fields.push('loanPurpose');
                next(fields);
              }}>
                <label className="block mb-1">Loan Type</label>
                <select 
                  name="loanPurpose" 
                  value={form.loanPurpose === 'Debt Consolidation' ? 'Debt Consolidation' : form.loanPurpose} 
                  onChange={handleLoanPurposeChange} 
                  className="w-full mb-4 p-2 border rounded"
                >
                  <option value="">Select type</option>
                  <optgroup label="Standard Purposes">
                    <option value="Personal">Personal Loan</option>
                    <option value="Business">Credit Repair</option>
                    <option value="Education">Student Loan Assistance</option>
                    <option value="Medical">Business Loan</option>
                    <option value="Debt Consolidation">Debt Consolidation</option>
                  </optgroup>  
                </select>

                {showConsolidationOptions && (
                  <div className="mt-2 pl-4 border-l-4 border-blue-200">
                    <label className="block mb-1 text-sm text-gray-600">Consolidation Type</label>
                    <select 
                      value={form.loanPurpose} 
                      onChange={handleConsolidationChange}
                      className="w-full mb-2 p-2 border rounded text-sm"
                    >
                      <option value="">Select consolidation type</option>
                      <option value="Student Loan Consolidation">Student Loan Consolidation</option>
                      <option value="Home Equity Line of Credit (HELOC)">Home Equity Line of Credit (HELOC)</option>
                      <option value="Personal Loan for Debt Consolidation">Personal Loan for Debt Consolidation</option>
                      <option value="Credit Card Balance Transfer">Credit Card Balance Transfer</option>
                      <option value="Debt Settlement">Debt Settlement</option>
                      <option value="others">Others (please specify)</option>
                    </select>
                    
                    {(form.loanPurpose === 'others' || customConsolidation) && (
                      <div className="mt-2">
                        <input
                          type="text"
                          value={customConsolidation}
                          onChange={handleCustomConsolidationChange}
                          onFocus={() => setForm(prev => ({ ...prev, loanPurpose: 'others' }))}
                          placeholder="Please specify the consolidation type"
                          className="w-full p-2 border rounded text-sm"
                        />
                      </div>
                    )}
                  </div>
                )}
                {errors.loanPurpose && <p className="text-red-500 text-xs">{errors.loanPurpose}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <div className="relative">
                      <input 
                        name="firstName" 
                        value={form.firstName} 
                        onChange={handleChange} 
                        placeholder="John"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                      />
                    </div>
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <div className="relative">
                      <input 
                        name="lastName" 
                        value={form.lastName} 
                        onChange={handleChange} 
                        placeholder="Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                      />
                    </div>
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <label className="block mb-1">Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                <div>
                  <label className="block mb-1">Mobile Number</label>
                  <input 
                    name="phone" 
                    value={form.phone} 
                    onChange={(e) => {
                      // Format phone number as user types
                      const value = e.target.value.replace(/\D/g, '').substring(0, 10);
                      const formatted = value.replace(/(\d{3})(\d{0,3})(\d{0,4})/, (_, p1, p2, p3) => 
                        p2 ? `(${p1}) ${p2}${p3 ? `-${p3}` : ''}` : p1
                      );
                      setForm(prev => ({ ...prev, phone: formatted }));
                    }}
                    placeholder="(123) 456-7890"
                    className="w-full mb-1 p-2 border rounded" 
                  />
                  {errors.phone ? (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  ) : (
                    <p className="text-xs text-gray-500">Format: (123) 456-7890</p>
                  )}
                </div>
                <div className="relative">
                  <label className="block mb-1">Zip Code</label>
                  <div className="relative">
                    <input 
                      name="zip" 
                      value={form.zip} 
                      onChange={handleChange} 
                      className="w-full mb-4 p-2 border rounded pr-10" 
                      placeholder={isLocating ? 'Detecting...' : 'Enter zip code'}
                      disabled={isLocating}
                    />
                    {isLocating && (
                      <div className="absolute right-3 top-3">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                      </div>
                    )}
                  </div>
                  {errors.zip && <p className="text-red-500 text-xs -mt-3 mb-2">{errors.zip}</p>}
                </div>

                <label className="block mb-1">Street Address</label>
                <input 
                  name="street" 
                  value={form.street} 
                  onChange={handleChange} 
                  className="w-full mb-4 p-2 border rounded" 
                  placeholder="Enter street address"
                />
                {errors.street && <p className="text-red-500 text-xs -mt-3 mb-2">{errors.street}</p>}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1">City</label>
                    <input 
                      name="city" 
                      value={form.city} 
                      onChange={handleChange} 
                      className="w-full mb-4 p-2 border rounded" 
                      placeholder={isLocating ? 'Detecting...' : 'City'}
                      disabled={isLocating}
                    />
                    {errors.city && <p className="text-red-500 text-xs -mt-3 mb-2">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block mb-1">State</label>
                    <select
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      className="w-full mb-4 p-2 border rounded bg-white"
                      disabled={isLocating}
                    >
                      <option value="">Select State</option>
                      {usStates.map((state) => (
                        <option key={state.code} value={state.code}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                    {errors.state && <p className="text-red-500 text-xs -mt-3 mb-2">{errors.state}</p>}
                  </div>
                </div>
                
                {locationError && (
                  <div className="text-sm text-amber-600 bg-amber-50 p-2 rounded mb-4">
                    {locationError}
                  </div>
                )}
                <label className="block mb-1">Date of Birth</label>
                <input name="dob" type="date" value={form.dob} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.dob && <p className="text-red-500 text-xs">{errors.dob}</p>}
                <div>
                  <label className="block mb-1">SSN <span className="text-xs text-gray-400">(This will never affect your credit score)</span></label>
                  <input 
                    name="ssn" 
                    value={form.ssn} 
                    onChange={(e) => {
                      // Format SSN as user types
                      const value = e.target.value.replace(/\D/g, '').substring(0, 9);
                      const formatted = value.replace(/^(\d{3})(\d{0,2})(\d{0,4})/, (_, p1, p2, p3) => 
                        p2 ? `${p1}-${p2}${p3 ? `-${p3}` : ''}` : p1
                      );
                      setForm(prev => ({ ...prev, ssn: formatted }));
                    }}
                    placeholder="123-45-6789"
                    className="w-full mb-1 p-2 border rounded" 
                  />
                  {errors.ssn ? (
                    <p className="text-red-500 text-xs">{errors.ssn}</p>
                  ) : (
                    <p className="text-xs text-gray-500">Format: 123-45-6789</p>
                  )}
                </div>
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
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button 
                    type="button" 
                    onClick={prev}
                    className="px-6 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}
            {/* Step 2: Employment & Income */}
            {step === 2 && (
              <form onSubmit={e => {
                e.preventDefault(); 
                const baseFields: (keyof FormType)[] = [
                  "incomeSource",
                  "netIncome",
                  "payFrequency",
                  "nextPayDate"
                ];
                const employmentFields: (keyof FormType)[] = form.incomeSource === 'Employment' 
                  ? ["employerName", "employerPhone"] 
                  : [];
                const allFields = [...baseFields, ...employmentFields];
                next(allFields);
              }}>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Source of Income</label>
                    <select 
                      name="incomeSource" 
                      value={form.incomeSource} 
                      onChange={handleChange} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select your income source</option>
                      <option value="Employment">Employment</option>
                      <option value="Self-Employed">Self-Employed</option>
                      <option value="Benefits">Benefits</option>
                      <option value="Other">Other Income Source</option>
                    </select>
                    {errors.incomeSource && (
                      <p className="mt-1 text-sm text-red-600">{errors.incomeSource}</p>
                    )}
                  </div>
                  
                  {form.incomeSource === 'Employment' && (
                    <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Employer Name</label>
                        <input 
                          name="employerName" 
                          value={form.employerName} 
                          onChange={handleChange} 
                          placeholder="Company Name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                        />
                        {errors.employerName && (
                          <p className="mt-1 text-sm text-red-600">{errors.employerName}</p>
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Employer Phone Number</label>
                        <input 
                          name="employerPhone" 
                          value={form.employerPhone} 
                          onChange={handleChange} 
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                        />
                        {errors.employerPhone && (
                          <p className="mt-1 text-sm text-red-600">{errors.employerPhone}</p>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Monthly Net Income</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <select 
                          name="netIncome" 
                          value={form.netIncome} 
                          onChange={handleChange} 
                          className="w-full pl-8 pr-12 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select monthly income</option>
                          <option value="1000">$1,000</option>
                          <option value="1500">$1,500</option>
                          <option value="2000">$2,000</option>
                          <option value="2500">$2,500</option>
                          <option value="3000">$3,000</option>
                          <option value="3500">$3,500</option>
                          <option value="4000">$4,000</option>
                          <option value="4500">$4,500</option>
                          <option value="5000">$5,000+</option>
                        </select>
                      </div>
                      {errors.netIncome && (
                        <p className="mt-1 text-sm text-red-600">{errors.netIncome}</p>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Pay Frequency</label>
                      <select 
                        name="payFrequency" 
                        value={form.payFrequency} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select frequency</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-Weekly">Bi-Weekly</option>
                        <option value="Semi-Monthly">Semi-Monthly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Every 3 Months">Every 3 Months</option>
                      </select>
                      {errors.payFrequency && (
                        <p className="mt-1 text-sm text-red-600">{errors.payFrequency}</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Next Pay Date</label>
                      <input 
                        name="nextPayDate" 
                        type="date" 
                        value={form.nextPayDate} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.nextPayDate && (
                        <p className="mt-1 text-sm text-red-600">{errors.nextPayDate}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button 
                    type="button" 
                    onClick={prev}
                    className="px-6 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}
            {/* Step 3: Banking Info */}
            {step === 3 && (
              <form onSubmit={e => {e.preventDefault(); next(["accountType","directDeposit","creditRating","loanAmount","bankName","bankState","aba","accountNumber"]);}}>
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
                
                <label className="block mb-2 font-semibold">Loan Amount</label>
                <select name="loanAmount" value={form.loanAmount} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
                  <option value="">Select amount</option>
                  <option value="1000">$1 - $1,000</option>
                  <option value="5000">$1,000 - $5,000</option>
                  <option value="10000">$5,000 - $10,000</option>
                  <option value="25000">$10,000 - $25,000</option>
                  <option value="50000">$25,000 - $50,000</option>
                  <option value="100000">$50,000 - $100,000</option>
                  <option value="200000">$100,000 - $200,000</option>
                  <option value="500000">$200,000 - $500,000</option>
                  <option value="1m">$500,000 - $1m</option>
                  <option value="1m above"> over $1m</option>
                  
                </select>
                {errors.loanAmount && <p className="text-red-500 text-xs mb-2">{errors.loanAmount}</p>}

                <div className="relative mb-4">
                  <label className="block mb-1 text-sm font-medium text-gray-700">Bank Name</label>
                  <input 
                    name="bankName" 
                    value={form.bankName} 
                    onChange={handleChange}
                    onFocus={() => {
                      searchBanks(form.bankName);
                      setShowBankSuggestions(true);
                    }}
                    onBlur={() => {
                      // Small delay to allow click on suggestions
                      setTimeout(() => setShowBankSuggestions(false), 200);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    autoComplete="off"
                  />
                  {showBankSuggestions && bankSuggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                      {bankSuggestions.map((bank) => (
                        <div
                          key={bank}
                          className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                          onMouseDown={(e) => {
                            e.preventDefault(); // Prevent input blur
                            handleBankSelect(bank);
                          }}
                        >
                          {bank}
                        </div>
                      ))}
                    </div>
                  )}
                  {errors.bankName && (
                    <p className="mt-1 text-sm text-red-600">{errors.bankName}</p>
                  )}
                </div>
                <label className="block mb-1">Bank State</label>
                <input name="bankState" value={form.bankState} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
                {errors.bankState && <p className="text-red-500 text-xs">{errors.bankState}</p>}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">ABA Routing Number</label>
                  <input 
                    name="aba" 
                    value={form.aba} 
                    onChange={(e) => {
                      // Only allow numbers and format as 9 digits
                      const value = e.target.value.replace(/\D/g, '').substring(0, 9);
                      setForm(prev => ({ ...prev, aba: value }));
                    }}
                    placeholder="123456789"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                  {errors.aba ? (
                    <p className="mt-1 text-sm text-red-600">{errors.aba}</p>
                  ) : (
                    <p className="mt-1 text-xs text-gray-500">9-digit number</p>
                  )}
                </div>
                
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Account Number</label>
                  <input 
                    name="accountNumber" 
                    value={form.accountNumber} 
                    onChange={(e) => {
                      // Only allow numbers and limit to 17 digits (standard US account number max)
                      const value = e.target.value.replace(/\D/g, '').substring(0, 17);
                      setForm(prev => ({ ...prev, accountNumber: value }));
                    }}
                    placeholder="Enter your account number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                  {errors.accountNumber ? (
                    <p className="mt-1 text-sm text-red-600">{errors.accountNumber}</p>
                  ) : (
                    <p className="mt-1 text-xs text-gray-500">4-17 digits, numbers only</p>
                  )}
                </div>
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button 
                    type="button" 
                    onClick={prev}
                    className="px-6 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}
            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!form.acknowledge || loading) return;
                  setLoading(true);
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({ event: "loan_submit", value: form.loanAmount });
                  
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
                    setLoading(false);
                    return;
                  }
                  
                  // Prepare data with image URLs
                  const { dlFront, dlBack, ...rest } = form;
                  const dataToSend = { ...rest, dlFront: dlFrontUrl, dlBack: dlBackUrl };
                  
                  try {
                    const functionUrl = process.env.NEXT_PUBLIC_SUPABASE_FUNCTION_URL;
                    if (!functionUrl) {
                      alert("Supabase function URL is not set.");
                      setLoading(false);
                      return;
                    }
                    
                    const res = await fetch(functionUrl, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(dataToSend)
                    });
                    
                    if (res.ok) {
                      // Success page with better styling
                      document.write(`
                        <!DOCTYPE html>
                        <html>
                        <head>
                          <title>Application Submitted Successfully</title>
                          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
                          <style>
                            body {
                              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              min-height: 100vh;
                              margin: 0;
                              background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                              padding: 1rem;
                            }
                            .success-container {
                              max-width: 32rem;
                              width: 100%;
                              text-align: center;
                              background: white;
                              border-radius: 1rem;
                              padding: 2.5rem;
                              box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
                              border: 1px solid #e0e7ff;
                            }
                            .success-icon {
                              display: inline-flex;
                              align-items: center;
                              justify-content: center;
                              width: 5rem;
                              height: 5rem;
                              border-radius: 9999px;
                              background-color: #d1fae5;
                              margin: 0 auto 1.5rem;
                            }
                            .success-icon svg {
                              width: 2.5rem;
                              height: 2.5rem;
                              color: #10b981;
                            }
                            h1 {
                              font-size: 1.5rem;
                              font-weight: 700;
                              color: #111827;
                              margin-bottom: 1rem;
                            }
                            p {
                              color: #4b5563;
                              margin-bottom: 2rem;
                              line-height: 1.6;
                            }
                            .loading-bar {
                              height: 4px;
                              background: #e5e7eb;
                              border-radius: 2px;
                              overflow: hidden;
                              margin-top: 1.5rem;
                            }
                            .loading-progress {
                              height: 100%;
                              width: 0%;
                              background: #10b981;
                              animation: loading 5s linear forwards;
                            }
                            @keyframes loading {
                              to { width: 100%; }
                            }
                          </style>
                        </head>
                        <body>
                          <div class="success-container">
                            <div class="success-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <h1>Application Submitted Successfully!</h1>
                            <p>Thank you for choosing us. Your application is being processed. You'll be redirected to our homepage shortly.</p>
                            <div class="loading-bar">
                              <div class="loading-progress"></div>
                            </div>
                          </div>
                          <script>
                            setTimeout(() => {
                              window.location.href = '/';
                            }, 5000);
                          </script>
                        </body>
                        </html>
                      `);
                      document.close();
                      return;
                    } else {
                      alert("We're sorry, but we couldn't process your application at this time. Please try again later.");
                    }
                  } catch (error) {
                    console.error('Submission error:', error);
                    alert("A network error occurred. Please check your internet connection and try again.");
                  }
                  setLoading(false);
                }}
              >
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Review Your Application</h3>
                    
                    {/* Personal Information Section */}
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Personal Information
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Full Name</p>
                            <p className="font-medium">{form.firstName} {form.lastName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium">{form.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium">{form.phone}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Date of Birth</p>
                            <p className="font-medium">{form.dob}</p>
                          </div>
                          <div className="md:col-span-2">
                            <p className="text-sm text-gray-500">Address</p>
                            <p className="font-medium">{form.street}</p>
                            <p className="font-medium">{form.city}, {form.state} {form.zip}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Employment & Income Section */}
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 16h.01M16 12h.01M12 12h.01M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7" />
                        </svg>
                        Employment & Income
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Income Source</p>
                            <p className="font-medium">{form.incomeSource}</p>
                          </div>
                          {form.employerName && (
                            <div>
                              <p className="text-sm text-gray-500">Employer</p>
                              <p className="font-medium">{form.employerName}</p>
                            </div>
                          )}
                          {form.employerPhone && (
                            <div>
                              <p className="text-sm text-gray-500">Employer Phone</p>
                              <p className="font-medium">{form.employerPhone}</p>
                            </div>
                          )}
                          <div>
                            <p className="text-sm text-gray-500">Monthly Net Income</p>
                            <p className="font-medium">${parseInt(form.netIncome || '0').toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Pay Frequency</p>
                            <p className="font-medium">{form.payFrequency}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Next Pay Date</p>
                            <p className="font-medium">{form.nextPayDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Banking Information Section */}
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        Banking Information
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Bank Name</p>
                            <p className="font-medium">{form.bankName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Account Type</p>
                            <p className="font-medium">{form.accountType}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Routing Number</p>
                            <p className="font-mono">••••••{form.aba ? form.aba.slice(-4) : ''}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Account Number</p>
                            <p className="font-mono">••••••{form.accountNumber ? form.accountNumber.slice(-4) : ''}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Loan Details Section */}
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Loan Details
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Loan Amount</p>
                            <p className="font-medium">${form.loanAmount ? parseInt(form.loanAmount).toLocaleString() : '0'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Loan Purpose</p>
                            <p className="font-medium">{form.loanPurpose}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Credit Rating</p>
                            <p className="font-medium">{form.creditRating}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="acknowledge"
                        name="acknowledge"
                        type="checkbox"
                        checked={form.acknowledge}
                        onChange={handleChange}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="acknowledge" className="font-medium text-gray-700">
                        I certify that all the information provided is accurate and complete to the best of my knowledge.
                      </label>
                      <p className="text-gray-500 mt-1">
                        By submitting this application, you agree to our{' '}
                        <a href="/terms" className="text-blue-600 hover:text-blue-500 font-medium">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" className="text-blue-600 hover:text-blue-500 font-medium">
                          Privacy Policy
                        </a>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
                  <button
                    type="button"
                    onClick={prev}
                    className="inline-flex items-center px-6 py-2.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!form.acknowledge || loading}
                    className={`inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${(!form.acknowledge || loading) ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Submit Application
                      </>
                    )}
                  </button>
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
