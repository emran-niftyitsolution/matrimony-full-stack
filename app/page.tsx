export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              বাংলাদেশী ইসলামিক ম্যাট্রিমনি
            </h1>
            <p className="text-xl mb-8">
              নিজ উপজেলায় দ্বীনদার পাত্রপাত্রী খোঁজা এখন সহজ
            </p>
            <p className="text-lg mb-8 italic">
              যে ব্যক্তি বিয়ে করলো সে তার অর্ধেক দ্বীন পূর্ণ করে ফেললো। বাকি
              অর্ধেকের জন্য সে আল্লাহকে ভয় করুক।
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                বায়োডাটা তৈরি করুন
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                বায়োডাটা খুঁজুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Filters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">
              বায়োডাটা খুঁজুন
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  আমি খুঁজছি
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600">
                  <option>সকল পাত্রের বায়োডাটা</option>
                  <option>পাত্রীর বায়োডাটা</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  বৈবাহিক অবস্থা
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600">
                  <option>সকল</option>
                  <option>অবিবাহিত</option>
                  <option>বিবাহিত</option>
                  <option>ডিভোর্সড</option>
                  <option>বিধবা</option>
                  <option>বিপত্নীক</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  স্থায়ী ঠিকানা
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600">
                  <option>ঠিকানা নির্বাচন করুন</option>
                  <option>বাংলাদেশ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  বর্তমান ঠিকানা
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600">
                  <option>ঠিকানা নির্বাচন করুন</option>
                  <option>বাংলাদেশ</option>
                </select>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                বায়োডাটা খুঁজুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            অর্ধেকদ্বীন সেবা গ্রহীতার পরিসংখ্যান
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">
                সর্বমোট পাত্র-পাত্রীর বায়োডাটা
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5K+</div>
              <div className="text-gray-600">সর্বমোট পাত্রের বায়োডাটা</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5K+</div>
              <div className="text-gray-600">সর্বমোট পাত্রীর বায়োডাটা</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1K+</div>
              <div className="text-gray-600">সর্বমোট সফল বিবাহ</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            অর্ধেকদ্বীন যেভাবে কাজ করে
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              <h3 className="text-xl font-semibold mb-2">
                বায়োডাটা তৈরি করুন
              </h3>
              <p className="text-gray-600">
                খুব সহজেই বিনামূল্যে অর্ধেকদ্বীনে বায়োডাটা তৈরি করতে পারবেন
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              <h3 className="text-xl font-semibold mb-2">বায়োডাটা খুঁজুন</h3>
              <p className="text-gray-600">
                বয়স, উপজেলা, পেশা, শিক্ষাগত যোগ্যতা সহ অনেক ফিল্টার ব্যবহার করে
                সহজেই বায়োডাটা খুঁজতে পারবেন
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              <h3 className="text-xl font-semibold mb-2">যোগাযোগ করুন</h3>
              <p className="text-gray-600">
                আপনার বায়োডাটা কেউ পছন্দ করলে অথবা আপনি কারো বায়োডাটা পছন্দ
                করলে সরাসরি অভিভাবকের সাথে যোগাযোগ করতে পারবেন
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              <h3 className="text-xl font-semibold mb-2">বিবাহ সম্পন্ন করুন</h3>
              <p className="text-gray-600">
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
