export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            সাধারণ প্রশ্নাবলী
          </h1>

          {/* FAQ Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                অ্যাকাউন্ট সম্পর্কিত
              </h2>
              <p className="text-gray-600">
                অ্যাকাউন্ট তৈরি, লগইন এবং প্রোফাইল ম্যানেজমেন্ট সম্পর্কিত প্রশ্ন
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                বায়োডাটা সম্পর্কিত
              </h2>
              <p className="text-gray-600">
                বায়োডাটা তৈরি, আপডেট এবং ম্যানেজমেন্ট সম্পর্কিত প্রশ্ন
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                পেমেন্ট সম্পর্কিত
              </h2>
              <p className="text-gray-600">
                পেমেন্ট পদ্ধতি, রিফান্ড এবং সাবস্ক্রিপশন সম্পর্কিত প্রশ্ন
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                সাধারণ প্রশ্ন
              </h2>
              <p className="text-gray-600">
                সাইট ব্যবহার এবং অন্যান্য সাধারণ প্রশ্ন
              </p>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                কিভাবে অ্যাকাউন্ট তৈরি করব?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                অ্যাকাউন্ট তৈরি করতে নিম্নলিখিত ধাপগুলি অনুসরণ করুন:
              </p>
              <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-600">
                <li>হোম পেজে "লগইন" বাটনে ক্লিক করুন</li>
                <li>"নতুন অ্যাকাউন্ট তৈরি করুন" অপশনে ক্লিক করুন</li>
                <li>আপনার নাম, ইমেইল এবং পাসওয়ার্ড দিন</li>
                <li>ইমেইল ভেরিফিকেশন সম্পন্ন করুন</li>
                <li>প্রোফাইল তথ্য পূরণ করুন</li>
              </ol>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                বায়োডাটা তৈরি করার নিয়মাবলী
              </h3>
              <p className="text-gray-600 leading-relaxed">
                বায়োডাটা তৈরি করার সময় নিম্নলিখিত নিয়মাবলী অনুসরণ করুন:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>সঠিক এবং সত্য তথ্য প্রদান করুন</li>
                <li>স্পষ্ট এবং সাম্প্রতিক ছবি ব্যবহার করুন</li>
                <li>সম্পূর্ণ যোগাযোগের তথ্য দিন</li>
                <li>শিক্ষাগত যোগ্যতা এবং পেশার বিস্তারিত তথ্য দিন</li>
                <li>পরিবারের তথ্য সঠিকভাবে দিন</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                পেমেন্ট পদ্ধতি
              </h3>
              <p className="text-gray-600 leading-relaxed">
                আমরা নিম্নলিখিত পেমেন্ট পদ্ধতি গ্রহণ করি:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>বিকাশ</li>
                <li>নগদ</li>
                <li>রকেট</li>
                <li>ক্রেডিট/ডেবিট কার্ড</li>
                <li>মোবাইল ব্যাংকিং</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                সুরক্ষা এবং গোপনীয়তা
              </h3>
              <p className="text-gray-600 leading-relaxed">
                আমরা আপনার তথ্যের সুরক্ষা এবং গোপনীয়তা নিশ্চিত করি:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>সমস্ত তথ্য এনক্রিপ্ট করা থাকে</li>
                <li>শুধুমাত্র ভেরিফাইড ব্যবহারকারীরা যোগাযোগ করতে পারবেন</li>
                <li>অননুমোদিত অ্যাক্সেস প্রতিরোধ করা হয়</li>
                <li>নিয়মিত সিকিউরিটি আপডেট</li>
              </ul>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">আরও প্রশ্ন আছে?</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              আমাদের সাথে যোগাযোগ করুন
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
