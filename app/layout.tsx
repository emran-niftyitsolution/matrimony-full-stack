import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "অর্ধেকদ্বীন - বাংলাদেশী ইসলামিক ম্যাট্রিমনি",
  description: "নিজ উপজেলায় দ্বীনদার পাত্রপাত্রী খোঁজা এখন সহজ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={inter.className}>
        {/* Navigation with Glass Effect */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors duration-200"
                >
                  অর্ধেকদ্বীন
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  হোম
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  আমাদের সম্পর্কে
                </Link>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  জিজ্ঞাসা
                </Link>
                <Link
                  href="/guidelines"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  নির্দেশনা
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  যোগাযোগ
                </Link>
                <div className="flex items-center space-x-4">
                  <select className="text-gray-600 hover:text-green-600 bg-transparent border-none focus:ring-0 cursor-pointer">
                    <option>বাংলা</option>
                    <option>English</option>
                  </select>
                  <button className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    লগইন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Add padding to account for fixed navbar */}
        <div className="pt-20">{children}</div>

        {/* Footer with Modern Design */}
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-400">
                  অর্ধেকদ্বীন
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  নিজ উপজেলায় দ্বীনদার পাত্রপাত্রী খোঁজা এখন সহজ
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-6 text-green-400">
                  দ্রুত লিংক
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      হোম
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      আমাদের সম্পর্কে
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      জিজ্ঞাসা
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guidelines"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      নির্দেশনা
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      যোগাযোগ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-6 text-green-400">
                  সাপোর্ট
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      প্রাইভেসি পলিসি
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      টার্মস এন্ড কন্ডিশন
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      রিফান্ড পলিসি
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-6 text-green-400">
                  যোগাযোগ
                </h4>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    support@ordhekdeen.com
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +৮৮০ ১৭১২৩৪৫৬৭৮
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    ঢাকা, বাংলাদেশ
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; ২০২১-২০২৫ ordhekdeen.com</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
