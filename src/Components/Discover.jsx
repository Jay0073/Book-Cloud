import React from "react";
import { BookOpen, Mail, Github, Chrome } from "lucide-react";

const Discover = () => {
  return (
    <div className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="
          flex flex-col md:flex-row
          items-center justify-between
          gap-12 md:gap-20
          bg-white dark:bg-gray-900/80
          rounded-3xl
          p-8 md:p-12
          shadow-xl shadow-indigo-100 dark:shadow-none
          border border-indigo-50 dark:border-gray-700
        ">
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Discover & Read More
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join our community of book lovers. Get personalized recommendations, 
              track your reading progress, and connect with fellow readers.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="
                px-4 py-2 
                bg-indigo-50 dark:bg-gray-700 
                text-indigo-600 dark:text-indigo-400
                rounded-full 
                text-sm font-medium
              ">
                100K+ Books
              </span>
              <span className="
                px-4 py-2 
                bg-indigo-50 dark:bg-gray-700 
                text-indigo-600 dark:text-indigo-400
                rounded-full 
                text-sm font-medium
              ">
                50+ Genres
              </span>
              <span className="
                px-4 py-2 
                bg-indigo-50 dark:bg-gray-700 
                text-indigo-600 dark:text-indigo-400
                rounded-full 
                text-sm font-medium
              ">
                Free Access
              </span>
            </div>
          </div>

          {/* Right Content - Sign In Options */}
          <div className="
            w-full md:w-auto
            flex flex-col gap-4
            min-w-[320px]
          ">
            {/* Email Sign In */}
            <button className="
              w-full
              px-6 py-3
              bg-indigo-600 hover:bg-indigo-700
              dark:bg-indigo-500 dark:hover:bg-indigo-600
              text-white
              rounded-xl
              flex items-center justify-center gap-3
              font-medium
              transition-colors duration-300
              shadow-md hover:shadow-lg
            ">
              <Mail className="w-5 h-5" />
              <span>Sign in with Email</span>
            </button>

            {/* Google Sign In */}
            <button className="
              w-full
              px-6 py-3
              bg-white hover:bg-gray-50
              dark:bg-gray-700 dark:hover:bg-gray-600
              text-gray-700 dark:text-white
              rounded-xl
              flex items-center justify-center gap-3
              font-medium
              transition-colors duration-300
              border-2 border-gray-200 dark:border-gray-600
              shadow-md hover:shadow-lg
            ">
              <Chrome className="w-5 h-5" />
              <span>Sign in with Google</span>
            </button>

            {/* Github Sign In */}
            <button className="
              w-full
              px-6 py-3
              bg-gray-900 hover:bg-gray-800
              dark:bg-gray-700 dark:hover:bg-gray-600
              text-white
              rounded-xl
              flex items-center justify-center gap-3
              font-medium
              transition-colors duration-300
              shadow-md hover:shadow-lg
            ">
              <Github className="w-5 h-5" />
              <span>Sign in with GitHub</span>
            </button>

            {/* Terms */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              By signing in, you agree to our{' '}
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Terms</a>
              {' '}and{' '}
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;

