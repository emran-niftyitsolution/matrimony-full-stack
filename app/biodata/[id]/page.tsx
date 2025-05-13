export default function BiodataPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section with Glass Effect */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Image with Modern Frame */}
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 p-1">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <svg
                    className="w-24 h-24 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Verified
              </div>
            </div>

            {/* Basic Info with Modern Layout */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                  বায়োডাটা নং : ODM-12275
                </h1>
                <div className="flex space-x-3">
                  <button className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-colors duration-200 flex items-center">
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
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    ShortList
                  </button>
                  <button className="border border-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    Ignore
                  </button>
                  <button className="border border-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center">
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
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copy Link
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">বায়োডাটার ধরন</p>
                  <p className="font-semibold text-gray-800">
                    পাত্রের বায়োডাটা
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">বৈবাহিক অবস্থা</p>
                  <p className="font-semibold text-gray-800">অবিবাহিত</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">জন্মসন</p>
                  <p className="font-semibold text-gray-800">August, 1992</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">উচ্চতা</p>
                  <p className="font-semibold text-gray-800">৫′ ৫″</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">গাত্রবর্ণ</p>
                  <p className="font-semibold text-gray-800">উজ্জ্বল শ্যামলা</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">ওজন</p>
                  <p className="font-semibold text-gray-800">৬৬ কেজি</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">রক্তের গ্রুপ</p>
                  <p className="font-semibold text-gray-800">A+</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">জাতীয়তা</p>
                  <p className="font-semibold text-gray-800">বাংলাদেশী</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Sections with Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Address Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">ঠিকানা</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-medium text-gray-800 mb-2">
                    স্থায়ী ঠিকানা
                  </h3>
                  <p className="text-gray-600">
                    ফরিদপুর সদর, ফরিদপুর, ঢাকা, বাংলাদেশ
                  </p>
                  <p className="text-gray-600 mt-1">
                    এলাকার নাম: কমলাপুর ডি আই বি বটতলা, ফরিদপুর সদর, ফরিদপুর।
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-medium text-gray-800 mb-2">
                    বর্তমান ঠিকানা
                  </h3>
                  <p className="text-gray-600">
                    ফরিদপুর সদর, ফরিদপুর, ঢাকা, বাংলাদেশ
                  </p>
                  <p className="text-gray-600 mt-1">
                    এলাকার নাম: কমলাপুর ডি আই বি বটতলা, ফরিদপুর সদর, ফরিদপুর।
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-medium text-gray-800 mb-2">
                    কোথায় বড় হয়েছেন?
                  </h3>
                  <p className="text-gray-600">
                    ফরিদপুর, পড়াশোনার জন্য ৭বছর ঢাকাতে ছিলাম।
                  </p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  শিক্ষাগত যোগ্যতা
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    আপনার শিক্ষা মাধ্যম
                  </p>
                  <p className="font-semibold text-gray-800">জেনারেল</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      এস.এস.সি / দাখিল / সমমান পাসের সন
                    </p>
                    <p className="font-semibold text-gray-800">২০০৯</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-gray-600">
                        বিভাগ: বিজ্ঞান বিভাগ
                      </p>
                      <p className="text-sm text-gray-600">ফলাফল: A</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      এইচ.এস.সি / আলিম / সমমান পাসের সন
                    </p>
                    <p className="font-semibold text-gray-800">২০১৩</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-gray-600">
                        বিভাগ: বিজ্ঞান বিভাগ
                      </p>
                      <p className="text-sm text-gray-600">ফলাফল: B</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    স্নাতক / স্নাতক (সম্মান) / ফাজিল পড়াশোনার বিষয়
                  </p>
                  <p className="font-semibold text-gray-800">
                    বিএসসি ইন মেডিকেল ফিজিক্স এন্ড বায়োমেডিকেল ইন্জিনিয়ারিং
                  </p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">
                      শিক্ষাপ্রতিষ্ঠানের নাম: গণ বিশ্ববিদ্যালয়
                    </p>
                    <p className="text-sm text-gray-600">পাসের সন: ২০১৮</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    স্নাতকোত্তর / কামিল পড়াশোনার বিষয়
                  </p>
                  <p className="font-semibold text-gray-800">
                    এম এস সি ইন এপ্লাইড ফিজিক্স এন্ড ইলেকট্রনিক্স
                  </p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">
                      শিক্ষাপ্রতিষ্ঠানের নাম: জাহাঙ্গীরনগর বিশ্ববিদ্যালয়
                    </p>
                    <p className="text-sm text-gray-600">পাসের সন: ২০২০</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Family Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  পারিবারিক তথ্য
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    আপনার পিতা কি জীবিত?
                  </p>
                  <p className="font-semibold text-gray-800">জী, জীবিত</p>
                  <p className="text-sm text-gray-600 mt-2">
                    পিতার পেশার বিবরণ: অবসর প্রাপ্ত শিক্ষক এবং হোমিওপ্যাথি
                    চিকিৎসক
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    আপনার মাতা কি জীবিত?
                  </p>
                  <p className="font-semibold text-gray-800">জী, জীবিত</p>
                  <p className="text-sm text-gray-600 mt-2">
                    মাতার পেশার বিবরণ: গৃহিণী, আম্মু ও হোমিওপ্যাথি চিকিৎসক,
                    আব্বুর সাথে মাঝে মাঝে বসতেন, এখন বসা হয়না
                  </p>
                </div>
              </div>
            </div>

            {/* Expected Partner */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  প্রত্যাশিত জীবনসঙ্গী
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">বয়স</p>
                  <p className="font-semibold text-gray-800">18-26</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">গাত্রবর্ণ</p>
                  <p className="font-semibold text-gray-800">
                    উজ্জল শ্যামলা, ফর্সা, উজ্জল ফর্সা
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">উচ্চতা</p>
                  <p className="font-semibold text-gray-800">
                    ৪&apos;১১&Prime;-৫&apos;৫&Prime;
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">শিক্ষাগত যোগ্যতা</p>
                  <p className="font-semibold text-gray-800">
                    অন্তত এসএসসি পাশ
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 md:col-span-2">
                  <p className="text-sm text-gray-500 mb-2">জেলা</p>
                  <p className="font-semibold text-gray-800">
                    ফরিদপুর হলে ভালো হয়, ঢাকা বিভাগ হলেও হবে। এছাড়া যশোর,
                    খুলনা বা রাজশাহী হলেও চলবে।
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">বৈবাহিক অবস্থা</p>
                  <p className="font-semibold text-gray-800">অবিবাহিত</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">পেশা</p>
                  <p className="font-semibold text-gray-800">দরকার নেই।</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">অর্থনৈতিক অবস্থা</p>
                  <p className="font-semibold text-gray-800">মধ্যবিত্ত।</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 md:col-span-2">
                  <p className="text-sm text-gray-500 mb-2">
                    জীবনসঙ্গীর যেসব বৈশিষ্ট্য বা গুণাবলী প্রত্যাশা করেন
                  </p>
                  <p className="font-semibold text-gray-800">
                    একজন মানুষ যে কিনা আমার ভরসার মুক্তা হবে। মুক্তা কেনো বললাম,
                    ঝিনুক কিন্তু প্রদাহের কারণে মুক্তা দেয় যা অনেক দামি বস্তু।
                    দুনিয়াতে ঈমানদারদের আল্লাহ দিয়ে এবং নিয়ে পরীক্ষা নিবেন।
                    সেই পরীক্ষাতে আমার ভরসাপূর্ণ সঙ্গী চাই। এমন একজন তিনি চাই
                    যার সাথে জান্নাতের পথ আল্লাহ সহজ করে দেন। আমিন।
                  </p>
                </div>
              </div>
            </div>

            {/* Declaration Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-yellow-600"
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
                  অঙ্গীকারনামা
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    OrdhekDeen.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন, তা আপনার
                    অভিভাবক জানেন?
                  </p>
                  <p className="font-semibold text-gray-800">হ্যাঁ</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    আল্লাহ&apos;র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিয়েছেন সব
                    সত্য?
                  </p>
                  <p className="font-semibold text-gray-800">হ্যাঁ</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    কোনো মিথ্যা তথ্য প্রদান করলে দুনিয়াবী আইনগত এবং আখিরাতের
                    দায়ভার OrdhekDeen.com কর্তৃপক্ষ নিবে না। আপনি কি সম্মত?
                  </p>
                  <p className="font-semibold text-gray-800">হ্যাঁ</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <p className="text-red-600 mb-4">
                  সতর্কতা - বিয়ের সিদ্ধান্ত নেয়ার পূর্বে স্থানীয়ভাবে খোঁজ
                  নিয়ে বায়োডাটার সমস্ত তথ্য যাচাই করবেন।
                </p>
                <p className="text-gray-600 mb-6">
                  এই বায়োডাটার অভিভাবকের যোগাযোগের তথ্য দেখতে আপনার ১টি কানেকশন
                  খরচ হবে।
                </p>
                <button className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center mx-auto">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  যোগাযোগের তথ্য দেখুন
                </button>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-green-500 hover:text-green-600 transition-colors duration-200 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                    যেভাবে যোগাযোগ তথ্য দেখবেন
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
