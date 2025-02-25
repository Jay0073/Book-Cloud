import React from "react";
import { BookX, Home, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import './CSS/Notfound.css'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          {/* Large 404 */}
          <h1 className="text-[150px] md:text-[200px] font-bold text-gray-100 dark:text-gray-800 select-none">
            404
          </h1>
          
          {/* Animated Book Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-bounce">
              <BookX className="w-24 h-24 md:w-32 md:h-32 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>

          {/* Animated Lines */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute h-0.5 bg-indigo-600/20 dark:bg-indigo-400/20"
                style={{
                  top: `${30 + (i * 20)}%`,
                  left: '-100%',
                  width: '40%',
                  animation: `slideRight 3s ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>

        {/* Quote */}
        <div className="max-w-md mx-auto mb-8">
          <p className="text-gray-600 dark:text-gray-300 italic">
            "Sometimes the most interesting chapters in our story are the ones we didn't plan to write."
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="
              px-6 py-3
              bg-indigo-600 hover:bg-indigo-700
              dark:bg-indigo-500 dark:hover:bg-indigo-600
              text-white
              rounded-xl
              flex items-center gap-2
              transition-all duration-300
              transform hover:scale-105
              shadow-lg hover:shadow-xl
            "
          >
            <Home className="w-5 h-5" />
            <span>Return Home</span>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="
              px-6 py-3
              bg-white hover:bg-gray-50
              dark:bg-gray-800 dark:hover:bg-gray-700
              text-gray-900 dark:text-white
              rounded-xl
              flex items-center gap-2
              transition-all duration-300
              transform hover:scale-105
              shadow-lg hover:shadow-xl
              border border-gray-200 dark:border-gray-700
            "
          >
            <MoveLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default NotFound;
