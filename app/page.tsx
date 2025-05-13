export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              বাংলাদেশী ইসলামিক ম্যাট্রিমনি
            </h1>
            <p className="text-2xl mb-8 text-green-100">
              নিজ উপজেলায় দ্বীনদার পাত্রপাত্রী খোঁজা এখন সহজ
            </p>
            <p className="text-xl mb-12 italic text-green-100 bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              যে ব্যক্তি বিয়ে করলো সে তার অর্ধেক দ্বীন পূর্ণ করে ফেললো। বাকি
              অর্ধেকের জন্য সে আল্লাহকে ভয় করুক।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                বায়োডাটা তৈরি করুন
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                বায়োডাটা খুঁজুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Filters with Glass Effect */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              বায়োডাটা খুঁজুন
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  আমি খুঁজছি
                </label>
                <select className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200">
                  <option>সকল পাত্রের বায়োডাটা</option>
                  <option>পাত্রীর বায়োডাটা</option>
                </select>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  বৈবাহিক অবস্থা
                </label>
                <select className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200">
                  <option>সকল</option>
                  <option>অবিবাহিত</option>
                  <option>বিবাহিত</option>
                  <option>ডিভোর্সড</option>
                  <option>বিধবা</option>
                  <option>বিপত্নীক</option>
                </select>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  স্থায়ী ঠিকানা
                </label>
                <select className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200">
                  <option>ঠিকানা নির্বাচন করুন</option>
                  <option>বাংলাদেশ</option>
                </select>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  বর্তমান ঠিকানা
                </label>
                <select className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200">
                  <option>ঠিকানা নির্বাচন করুন</option>
                  <option>বাংলাদেশ</option>
                </select>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                বায়োডাটা খুঁজুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section with Modern Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            অর্ধেকদ্বীন সেবা গ্রহীতার পরিসংখ্যান
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-green-500 mb-4">10K+</div>
              <div className="text-gray-600 text-lg">
                সর্বমোট পাত্র-পাত্রীর বায়োডাটা
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-green-500 mb-4">5K+</div>
              <div className="text-gray-600 text-lg">
                সর্বমোট পাত্রের বায়োডাটা
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-green-500 mb-4">5K+</div>
              <div className="text-gray-600 text-lg">
                সর্বমোট পাত্রীর বায়োডাটা
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-green-500 mb-4">1K+</div>
              <div className="text-gray-600 text-lg">সর্বমোট সফল বিবাহ</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section with Modern Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            অর্ধেকদ্বীন যেভাবে কাজ করে
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                বায়োডাটা তৈরি করুন
              </h3>
              <p className="text-gray-600 text-center">
                খুব সহজেই বিনামূল্যে অর্ধেকদ্বীনে বায়োডাটা তৈরি করতে পারবেন
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                বায়োডাটা খুঁজুন
              </h3>
              <p className="text-gray-600 text-center">
                বয়স, উপজেলা, পেশা, শিক্ষাগত যোগ্যতা সহ অনেক ফিল্টার ব্যবহার করে
                সহজেই বায়োডাটা খুঁজতে পারবেন
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
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
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                যোগাযোগ করুন
              </h3>
              <p className="text-gray-600 text-center">
                আপনার বায়োডাটা কেউ পছন্দ করলে অথবা আপনি কারো বায়োডাটা পছন্দ
                করলে সরাসরি অভিভাবকের সাথে যোগাযোগ করতে পারবেন
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                বিবাহ সম্পন্ন করুন
              </h3>
              <p className="text-gray-600 text-center">
                বায়োডাটা ও কথাবার্তা পছন্দ হলে নিজ দায়িত্বে ভালভাবে খোঁজ নিয়ে
                সুন্নতি বিবাহ সম্পন্ন করুন
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
