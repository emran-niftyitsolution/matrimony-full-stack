"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-lg"
          : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors duration-200 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            অর্ধেক দীন
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-600 hover:text-green-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              হোম
            </Link>
            <Link
              href="/biodata"
              className={`transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-600 hover:text-green-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              বায়োডাটা
            </Link>
            <Link
              href="/about"
              className={`transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-600 hover:text-green-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              href="/guidelines"
              className={`transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-600 hover:text-green-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              নিয়মাবলী
            </Link>
            <Link
              href="/faq"
              className={`transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-600 hover:text-green-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              প্রশ্নোত্তর
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-600 hover:text-green-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              যোগাযোগ
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className={`px-6 py-2 rounded-xl transition-all duration-200 transform hover:scale-105 ${
                isScrolled
                  ? "bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              লগইন
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
