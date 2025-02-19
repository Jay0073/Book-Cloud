import React from "react";
import {
  Book,
  BookOpen,
  Library,
  BookmarkIcon,
  GraduationCap,
  Quote,
  BookText,
  BookCopy,
  ScrollText,
  BookMarked,
  Bookmark,
} from "lucide-react";
import { Link } from "react-router-dom";

const FloatingIcon = ({ icon: Icon, delay, color, rotate, scale }) => (
  <div
    className="absolute animate-float"
    style={{
      animationDelay: `${delay}s`,
      transform: `rotate(${rotate}deg) scale(${scale})`,
      color: color,
    }}
  >
    <Icon className="w-8 h-8 md:w-12 md:h-12" />
  </div>
);

const Hero = () => {
  // Array of blue colors from light to dark
  const blueColors = [
    "#E0F2FF", // Lightest blue
    "#BAE6FD",
    "#7DD3FC",
    "#38BDF8",
    "#0EA5E9",
    "#0284C7",
    "#0369A1",
    "#075985", // Darkest blue
  ];

  // Array of icons
  const icons = [
    Book,
    BookOpen,
    Library,
    BookmarkIcon,
    GraduationCap,
    BookText,
    BookCopy,
    ScrollText,
    BookMarked,
    Bookmark,
  ];

  // Generate random positions for icons
  const generateIconProps = (index) => {
    return {
      icon: icons[index % icons.length],
      delay: Math.random() * 5,
      color: blueColors[index % blueColors.length],
      rotate: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.5,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      },
    };
  };

  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden h-[93vh]">
      {/* Background Icons Layer */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FloatingIcon {...generateIconProps(i)} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="text-center">
          <Quote className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-6" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            A room without books is like <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              a body without a soul
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 italic">
            - Marcus Tullius Cicero
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              className="
              px-8 py-3 rounded-lg
              bg-indigo-600 hover:bg-indigo-700
              dark:bg-indigo-500 dark:hover:bg-indigo-600
              text-white font-medium text-lg
              transition duration-150 ease-in-out
              flex items-center justify-center
              shadow-lg hover:shadow-xl
            "
            >
              <BookOpen className="h-5 w-5 mr-2" />
              <Link to="/library">
              Browse Library
              </Link> 
            </button>

            <button
              className="
              px-8 py-3 rounded-lg
              bg-white hover:bg-gray-50
              dark:bg-gray-800 dark:hover:bg-gray-700
              text-indigo-600 dark:text-indigo-400 
              font-medium text-lg
              border-2 border-indigo-600 dark:border-indigo-400
              transition duration-150 ease-in-out
              flex items-center justify-center
              shadow-lg hover:shadow-xl
            "
            >
              <BookmarkIcon className="h-5 w-5 mr-2" />
              My Collection
            </button>
          </div>

          {/* Feature Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-left">
  <div className="
    flex items-start space-x-4 p-6 rounded-xl 
    bg-white/30 dark:bg-gray-800/20 
    backdrop-blur-sm
    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
    dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
    border border-white/50 dark:border-gray-700/50
    hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
    dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]
    transition-all duration-300
  ">
    <Library className="h-8 w-8 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Vast Collection</h3>
      <p className="text-gray-600 dark:text-gray-300">Access thousands of books across various genres</p>
    </div>
  </div>
  
  <div className="
    flex items-start space-x-4 p-6 rounded-xl 
    bg-white/30 dark:bg-gray-800/20 
    backdrop-blur-sm
    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
    dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
    border border-white/50 dark:border-gray-700/50
    hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
    dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]
    transition-all duration-300
  ">
    <GraduationCap className="h-8 w-8 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Learn Anywhere</h3>
      <p className="text-gray-600 dark:text-gray-300">Read on any device, anytime, anywhere</p>
    </div>
  </div>
  
  <div className="
    flex items-start space-x-4 p-6 rounded-xl 
    bg-white/30 dark:bg-gray-800/20 
    backdrop-blur-sm
    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
    dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
    border border-white/50 dark:border-gray-700/50
    hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
    dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]
    transition-all duration-300
  ">
    <BookmarkIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Personal Library</h3>
      <p className="text-gray-600 dark:text-gray-300">Build and organize your own collection</p>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-current text-white dark:text-gray-800" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div> */}
    </div>
  );
};

// Add this to your CSS/Tailwind
const style = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

export default Hero;
