export default function GuidelinesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            ব্যবহারের নিয়মাবলী
          </h1>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              সাইট ব্যবহারের নিয়মাবলী
            </h2>
            <p className="text-gray-600 leading-relaxed">
              আমাদের সাইট ব্যবহার করার সময় নিম্নলিখিত নিয়মাবলী অনুসরণ করুন। এই
              নিয়মাবলী আমাদের সম্প্রদায়কে নিরাপদ এবং সম্মানজনক রাখতে সাহায্য
              করে।
            </p>
          </div>

          {/* Guidelines Sections */}
          <div className="space-y-8">
            {/* Profile Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
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
                <h2 className="text-2xl font-semibold text-gray-800">
                  প্রোফাইল নিয়মাবলী
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">১</span>
                  </div>
                  <p className="text-gray-600">
                    সঠিক এবং সত্য তথ্য প্রদান করুন
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">২</span>
                  </div>
                  <p className="text-gray-600">
                    স্পষ্ট এবং সাম্প্রতিক ছবি ব্যবহার করুন
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">৩</span>
                  </div>
                  <p className="text-gray-600">নিয়মিত প্রোফাইল আপডেট করুন</p>
                </div>
              </div>
            </div>

            {/* Communication Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  যোগাযোগের নিয়মাবলী
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">১</span>
                  </div>
                  <p className="text-gray-600">সম্মানজনক ভাষা ব্যবহার করুন</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">২</span>
                  </div>
                  <p className="text-gray-600">
                    অনুপযুক্ত বার্তা পাঠানো থেকে বিরত থাকুন
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">৩</span>
                  </div>
                  <p className="text-gray-600">প্রাইভেসি রেসপেক্ট করুন</p>
                </div>
              </div>
            </div>

            {/* Safety Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  নিরাপত্তা নিয়মাবলী
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">১</span>
                  </div>
                  <p className="text-gray-600">পাসওয়ার্ড শেয়ার করবেন না</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">২</span>
                  </div>
                  <p className="text-gray-600">
                    অনলাইন সাক্ষাতের সময় সতর্কতা অবলম্বন করুন
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">৩</span>
                  </div>
                  <p className="text-gray-600">
                    সন্দেহজনক কার্যকলাপ রিপোর্ট করুন
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
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
                <h2 className="text-2xl font-semibold text-gray-800">
                  পেমেন্ট নিয়মাবলী
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">১</span>
                  </div>
                  <p className="text-gray-600">
                    শুধুমাত্র অনুমোদিত পেমেন্ট পদ্ধতি ব্যবহার করুন
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">২</span>
                  </div>
                  <p className="text-gray-600">পেমেন্ট রসিদ সংরক্ষণ করুন</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-sm">৩</span>
                  </div>
                  <p className="text-gray-600">সন্দেহজনক লেনদেন এড়িয়ে চলুন</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">আরও তথ্য প্রয়োজন?</p>
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
