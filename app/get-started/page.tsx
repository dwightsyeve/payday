"use client"
import React from "react";
import Link from "next/link";

export default function GetStarted() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
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
          <span className="text-green-500 font-semibold text-lg">Loading...</span>
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
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-8 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/pay.jpg" alt="Payday Loan Logo" className="w-130 h-20 rounded-lg drop-shadow-lg" />
          </div>

        <nav className="flex space-x-8 text-sm">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="/about-us" className="text-gray-600 hover:text-gray-900">About Us</Link>
          </nav>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-100 py-16">
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-10 text-center">
            <h1 className="font-bold text-5xl sm:text-6xl text-gray-800 mb-8">When do you need your loan?</h1>
            <div className="flex flex-col gap-4 items-center mb-8">
              <Link href="/loan-application?timing=immediately" className="w-72 bg-green-400 text-gray-900 font-semibold py-3 rounded hover:bg-green-500 transition">Immediately</Link>
              <Link href="/loan-application?timing=asap" className="w-72 bg-green-400 text-gray-900 font-semibold py-3 rounded hover:bg-green-500 transition">As Soon as Possible</Link>
              <Link href="/loan-application?timing=2days" className="w-72 bg-green-400 text-gray-900 font-semibold py-3 rounded hover:bg-green-500 transition">In The Next 2 Days</Link>
            </div>
            <p className="text-xs text-gray-500 mb-8">*By clicking you are leaving this site</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-start">
            <div className="flex items-center">
            <img src="/pay.jpg" alt="Payday Loan Logo" className="w-130 h-20 rounded-lg drop-shadow-lg" />
          </div>
            <div className="space-y-1 text-sm text-gray-400">
              <p>Address: 6000 Poplar Avenue, Suite 250, Memphis, Tennessee, 38119</p>
              <p>Phone: 888-813-9666</p>
              <p>Email: info@PayDay.com</p>
            </div>
            <div className="flex space-x-3 mt-2">
              <Link href="#" className="text-white hover:text-green-400"><i className="fab fa-facebook-f" /></Link>
              <Link href="#" className="text-white hover:text-green-400"><i className="fab fa-instagram" /></Link>
              <Link href="#" className="text-white hover:text-green-400"><i className="fab fa-linkedin-in" /></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><Link href="/" className="hover:text-green-400">Home</Link></li>
                <li><Link href="#" className="hover:text-green-400">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-green-400">Mobile Program</Link></li>
                <li><Link href="#" className="hover:text-green-400">Login & Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Other Links</h4>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-green-400">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-green-400">Mobile Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-green-400">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-green-400">Mobile Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-400">
          <p>Prime Time Updater™ 2025: PayDay © 2025. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}