export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            আমাদের সম্পর্কে
          </h1>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-gray-600 text-lg mb-6">
              অর্ধেকদ্বীন হল একটি ইসলামিক ম্যাট্রিমনি প্ল্যাটফর্ম যা বাংলাদেশী
              মুসলিম পাত্র-পাত্রীদের জন্য তৈরি করা হয়েছে। আমাদের লক্ষ্য হল
              দ্বীনদার পাত্র-পাত্রীদের মধ্যে বিবাহের সুযোগ তৈরি করা।
            </p>
            <p className="text-gray-600 text-lg mb-6">
              আমরা বিশ্বাস করি যে বিবাহ হল ইসলামের অর্ধেক। তাই আমরা চেষ্টা করি
              সহজ, নিরাপদ এবং দ্বীনদার পরিবেশে বিবাহের সুযোগ তৈরি করতে।
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  আমাদের লক্ষ্য
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-green-500"
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
                    দ্বীনদার পাত্র-পাত্রীদের মধ্যে বিবাহের সুযোগ তৈরি করা
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-green-500"
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
                    সহজ এবং নিরাপদ প্ল্যাটফর্ম প্রদান করা
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-green-500"
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
                    ইসলামিক মূল্যবোধ রক্ষা করা
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  আমাদের সেবা
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-green-500"
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
                    বিনামূল্যে বায়োডাটা তৈরি
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-green-500"
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
                    সহজে বায়োডাটা খোঁজা
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-green-500"
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
                    ২৪/৭ সাপোর্ট সেবা
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
