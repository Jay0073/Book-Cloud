import React from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import BookCard from '../Components/BookCard'
import { Link } from 'react-router-dom';

const BookSlider = () => {
      const scrollRight = () => {
        const slider = document.getElementById('book-slider');
        slider.scrollLeft += slider.offsetWidth;
      };


      const scrollLeft = () => {
        const slider = document.getElementById('book-slider');
        slider.scrollLeft -= slider.offsetWidth;
      };
    

  return (
      <div className="py-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Books
            </h2>
            <div className="w-20 h-1 bg-indigo-600 rounded-full"></div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="
                p-2 rounded-full
                bg-white dark:bg-gray-800
                hover:bg-gray-100 dark:hover:bg-gray-700
                border border-gray-200 dark:border-gray-700
                shadow-sm
                transition-all duration-200
                group
              "
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
            </button>
            <button 
              onClick={scrollRight}
              className="
                p-2 rounded-full
                bg-white dark:bg-gray-800
                hover:bg-gray-100 dark:hover:bg-gray-700
                border border-gray-200 dark:border-gray-700
                shadow-sm
                transition-all duration-200
                group
              "
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div 
            id="book-slider"
            className="
              flex gap-6 overflow-x-auto
              scroll-smooth scrollbar-hide
              pb-4 /* Added padding to accommodate shadow */
            "
            style={{
              scrollbarWidth: 'none',  /* Firefox */
              msOverflowStyle: 'none',  /* IE and Edge */
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            
            {/* See More Card */}
            <Link to='/genre/:id' className="
              min-w-[280px] /* Match BookCard width */
              flex flex-col items-center justify-center
              bg-gradient-to-r from-indigo-500 to-indigo-600
              dark:from-indigo-600 dark:to-indigo-700
              rounded-2xl
              p-6
              group
              cursor-pointer
              transition-transform duration-300
              hover:scale-105
            ">
              
              <ArrowRight className="w-12 h-12 text-white mb-4 
                transform group-hover:translate-x-2 transition-transform duration-300" 
              />
              <h3 className="text-xl font-bold text-white mb-2">See More</h3>
              <p className="text-white/80 text-sm text-center">
                Discover our complete collection
              </p>
              </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BookSlider
