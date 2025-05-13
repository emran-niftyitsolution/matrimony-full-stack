"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-600 via-green-500 to-green-400 py-20">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {isLogin ? "লগইন করুন" : "অ্যাকাউন্ট তৈরি করুন"}
              </h1>
              <p className="text-gray-600">
                {isLogin
                  ? "আপনার অ্যাকাউন্টে লগইন করুন"
                  : "নতুন অ্যাকাউন্ট তৈরি করুন"}
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-4 mb-8">
              <button className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <Image
                  src="/google.svg"
                  alt="Google"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <span className="text-gray-700">
                  {isLogin
                    ? "Google দিয়ে লগইন করুন"
                    : "Google দিয়ে সাইন আপ করুন"}
                </span>
              </button>
              <button className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <span className="text-gray-700">
                  {isLogin
                    ? "Facebook দিয়ে লগইন করুন"
                    : "Facebook দিয়ে সাইন আপ করুন"}
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">অথবা</span>
              </div>
            </div>

            {/* Login Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ইমেইল
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                  placeholder="আপনার ইমেইল লিখুন"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  পাসওয়ার্ড
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                />
              </div>
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    পাসওয়ার্ড নিশ্চিত করুন
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                  />
                </div>
              )}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-700">
                      মনে রাখুন
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-green-600 hover:text-green-500"
                  >
                    পাসওয়ার্ড ভুলে গেছেন?
                  </Link>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-colors duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {isLogin ? "লগইন করুন" : "অ্যাকাউন্ট তৈরি করুন"}
              </button>
            </form>

            {/* Toggle Login/Signup */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-green-600 hover:text-green-500"
              >
                {isLogin
                  ? "নতুন অ্যাকাউন্ট তৈরি করতে ক্লিক করুন"
                  : "ইতিমধ্যে অ্যাকাউন্ট আছে? লগইন করুন"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
