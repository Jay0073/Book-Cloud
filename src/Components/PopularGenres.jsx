import React from "react";
import {
  Sword, // for Fantasy
  Heart, // for Romance
  Rocket, // for Sci-Fi
  ChevronRight,
} from "lucide-react";
import fantasy from "../assets/fantasy-genre.jpeg";
import romance from "../assets/romance-genre.jpeg";
import scifi from "../assets/scifi-genre.jpeg";

const PopularGenres = () => {
  const genres = [
    {
      title: "Fantasy",
      description: "Explore magical worlds and epic adventures",
      icon: Sword,
      color: "from-purple-500 to-indigo-600",
      image: fantasy , // Add your image path
    },
    {
      title: "Romance",
      description: "Discover love stories that touch the heart",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      image: romance , // Add your image path
    },
    {
      title: "Science Fiction",
      description: "Journey through space and time",
      icon: Rocket,
      color: "from-cyan-500 to-blue-600",
      image: scifi, // Add your image path
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Genres
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Genre Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl"
            >
              {/* Genre Card */}
              <div className="
                relative h-[400px] p-6
                bg-gradient-to-br ${genre.color}
                transform transition-transform duration-300 group-hover:scale-105
                flex flex-col justify-between
                overflow-hidden
              " style={{backgroundImage:` linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${genre.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <genre.icon className="w-96 h-96 transform rotate-12 translate-x-1/3 -translate-y-1/4" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <genre.icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {genre.title}
                  </h3>
                  <p className="text-white/90">{genre.description}</p>
                </div>

                {/* Button */}
                <button
                  className="
                  mt-6 
                  bg-white/20 hover:bg-white/30
                  text-white 
                  px-6 py-3 
                  rounded-lg
                  backdrop-blur-sm
                  flex items-center justify-center
                  group-hover:gap-2
                  transition-all duration-300
                  cursor-pointer
                "
                >
                  <span>Explore {genre.title}</span>
                  <ChevronRight
                    className="
                    w-5 h-5 
                    opacity-0 group-hover:opacity-100 
                    -translate-x-2 group-hover:translate-x-0
                    transition-all duration-300
                  "
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularGenres;
