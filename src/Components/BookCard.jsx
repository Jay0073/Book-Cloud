import React from "react";
import { Eye, BookOpen, Tag } from "lucide-react";
import midnightlibrary from '../assets/midnight-library.jpg'

const BookCard = () => {
  const book = {
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Contemporary Fiction",
    image: midnightlibrary,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    rating: 4.5,
  };

  return (
    <div className="
      relative 
      bg-white dark:bg-gray-800 
      rounded-2xl 
      overflow-hidden
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      border border-gray-100 dark:border-gray-700
      hover:shadow-[0_8px_35px_rgba(0,0,0,0.12)]
      dark:hover:shadow-[0_8px_35px_rgba(0,0,0,0.4)]
      transition-all duration-300
      min-w-[300px]
    ">
      {/* Book Cover Image - Reduced height from 300px to 250px */}
      <div className="relative h-[250px] overflow-hidden group">
        <img 
          src={book.image} 
          alt={book.title}
          className="
            w-full h-full 
            object-cover
            transform group-hover:scale-105
            transition-transform duration-300
          "
        />
        {/* Gradient Overlay */}
        <div className="
          absolute inset-0 
          bg-gradient-to-t from-black/50 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "/>
        
        {/* Quick View Button */}
        <button className="
          absolute bottom-4 left-1/2 -translate-x-1/2

          px-3 py-2
          bg-white dark:bg-gray-800
          text-gray-900 dark:text-white
          rounded-full
          flex items-center gap-2
          transform translate-y-12 group-hover:translate-y-0
          opacity-0 group-hover:opacity-100
          transition-all duration-300
          shadow-lg
        ">
          <Eye className="w-4 h-4" />
          <span>Quick View</span>
        </button>
      </div>

      
      <div className="p-4"> 
        <div className="flex items-center gap-2 mb-2"> 
          <Tag className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span className="
            text-sm 
            text-indigo-600 dark:text-indigo-400
            font-medium
          ">
            {book.genre}
          </span>
        </div>

        {/* Title */}
        <h3 className="
          text-lg font-bold 
          text-gray-900 dark:text-white
          mb-1
          line-clamp-1
        ">
          {book.title}
        </h3>

        {/* Author */}
        <p className="
          text-sm 
          text-gray-600 dark:text-gray-400
          mb-2
        ">
          by <span className="font-medium">{book.author}</span>
        </p>

        {/* Description */}
        <p className="
          text-gray-600 dark:text-gray-300
          mb-4
          line-clamp-2
          text-sm
        ">
          {book.description}
        </p>

        {/* View Button */}
        <button className="
          w-full
          px-4 py-2
          bg-indigo-600 hover:bg-indigo-700
          dark:bg-indigo-500 dark:hover:bg-indigo-600
          text-white
          rounded-lg
          flex items-center justify-center gap-2
          font-medium
          transition-colors duration-300
          text-sm
        ">
          <BookOpen className="w-4 h-4" />
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
