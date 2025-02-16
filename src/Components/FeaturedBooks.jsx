import React from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import BookCard from "../Components/BookCard";

const FeaturedBooks = () => {
  const scrollLeft = () => {
    const slider = document.getElementById("book-slider");
    slider.scrollLeft -= slider.offsetWidth;
  };

  const scrollRight = () => {
    const slider = document.getElementById("book-slider");
    slider.scrollLeft += slider.offsetWidth;
  };

  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Books
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Book Slider */}
        <div className="relative">
          <div
            id="book-slider"
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE and Edge
              WebkitOverflowScrolling: "touch",
            }}
          >
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            {/* See More Card */}
            <div
              className="min-w-[280px] flex flex-col items-center justify-center z-11
              bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700
              rounded-2xl p-6 group cursor-pointer transition-transform duration-300 hover:to-indigo-900"
            >
              <ArrowRight className="w-12 h-12 text-white mb-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                See More
              </h3>
              <p className="text-white/80 text-sm text-center transform group-hover:translate-x-2 transition-transform duration-300">
                Discover our complete collection
              </p>
            </div>
          </div>

          {/* Navigation Buttons (Hidden on Mobile) */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 
                bg-indigo-600 hover:bg-indigo-700
                dark:bg-indigo-500 dark:hover:bg-indigo-600
                border border-gray-600 dark:border-gray-700 shadow-md
                transition-all duration-300 z-10 hidden sm:flex"
          >
            <ChevronLeft className="w-8 h-8 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-10
              bg-indigo dark:bg-indigo-800 border border-gray-600 dark:border-gray-700 shadow-md
              hover:bg-indigo-100 dark:hover:bg-gray-700 transition-all duration-300 z-10
              hidden sm:flex"
          >
            <ChevronRight className="w-8 h-8 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
