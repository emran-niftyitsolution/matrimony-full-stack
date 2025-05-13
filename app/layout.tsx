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
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-green-600">
                  অর্ধেকদ্বীন
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-green-600">
                  হোম
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-green-600"
                >
                  আমাদের সম্পর্কে
                </Link>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-green-600"
                >
                  জিজ্ঞাসা
                </Link>
                <Link
                  href="/guidelines"
                  className="text-gray-600 hover:text-green-600"
                >
                  নির্দেশনা
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-green-600"
                >
                  যোগাযোগ
                </Link>
                <div className="flex items-center space-x-4">
                  <select className="text-gray-600 hover:text-green-600 bg-transparent border-none focus:ring-0">
                    <option>বাংলা</option>
                    <option>English</option>
                  </select>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    লগইন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">অর্ধেকদ্বীন</h3>
                <p className="text-gray-400">
                  নিজ উপজেলায় দ্বীনদার পাত্রপাত্রী খোঁজা এখন সহজ
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">দ্রুত লিংক</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white">
                      হোম
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white"
                    >
                      আমাদের সম্পর্কে
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-gray-400 hover:text-white"
                    >
                      জিজ্ঞাসা
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guidelines"
                      className="text-gray-400 hover:text-white"
                    >
                      নির্দেশনা
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white"
                    >
                      যোগাযোগ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">সাপোর্ট</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-400 hover:text-white"
                    >
                      প্রাইভেসি পলিসি
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-white"
                    >
                      টার্মস এন্ড কন্ডিশন
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund"
                      className="text-gray-400 hover:text-white"
                    >
                      রিফান্ড পলিসি
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>ইমেইল: support@ordhekdeen.com</li>
                  <li>ফোন: +৮৮০ ১৭১২৩৪৫৬৭৮</li>
                  <li>ঠিকানা: ঢাকা, বাংলাদেশ</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; ২০২১-২০২৫ ordhekdeen.com</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
