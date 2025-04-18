import React from "react";
import { 
  User, 
  Book, 
  Award,
  ExternalLink,
  BookOpen,
  Star,
  Globe
} from "lucide-react";
import MattHaig from '../assets/Matt-Haig.jpg'

const AuthorSection = () => {
  const author = {
    name: "Matt Haig",
    image: MattHaig,
    totalBooks: 28,
    awards: 12,
    readersCount: "2.5M",
    averageRating: 4.6,
    website: "www.authorwebsite.com",
    bio: "Matt Haig is a British author for children and adults. His memoir Reasons to Stay Alive was a number one bestseller, staying in the British top ten for 46 weeks. His children's book A Boy Called Christmas was a runaway hit and is translated in over 40 languages.",
    description: "Matt Haig is known for his ability to write across multiple genres, from children's literature to adult fiction and non-fiction. His work often explores themes of mental health, the modern world, and what it means to be human in an increasingly technological age. His books have been translated into over 40 languages and have received numerous accolades worldwide.",
    expertise: ["Contemporary Fiction", "Mental Health", "Science Fiction", "Children's Literature"]
  };

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About the Author
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="
          bg-white dark:bg-gray-900
          rounded-2xl
          shadow-xl
          overflow-hidden
        ">
          <div className="
            relative
            bg-transparent
            px-8 pt-8
          ">
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="
                w-40 h-40 md:w-48 md:h-48
                rounded-full
                overflow-hidden
                shadow-2xl
              ">
                <img 
                  src={author.image} 
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center md:text-left shadow-lg p-4 rounded-lg bg-white dark:bg-gray-900">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {author.name}
                </h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Book className="w-5 h-5" />
                    <span>{author.totalBooks} Books</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Award className="w-5 h-5" />
                    <span>{author.awards} Awards</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Star className="w-5 h-5" />
                    <span>{author.averageRating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <User className="w-5 h-5" />
                    <span>{author.readersCount} Readers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 pt-5">
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {author.bio}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {author.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((area, index) => (
                  <span 
                    key={index}
                    className="
                      px-4 py-2
                      bg-indigo-50 dark:bg-indigo-900/30
                      text-indigo-600 dark:text-indigo-400
                      rounded-full
                      text-sm font-medium
                    "
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="
                px-6 py-3
                bg-indigo-600 hover:bg-indigo-700
                dark:bg-indigo-500 dark:hover:bg-indigo-600
                text-white
                rounded-xl
                flex items-center gap-2
                font-medium
                transition-colors duration-300
                shadow-lg
              ">
                <BookOpen className="w-5 h-5" />
                <span>View All Books</span>
              </button>

              <button className="
                px-6 py-3
                bg-white hover:bg-gray-50
                dark:bg-gray-800 dark:hover:bg-gray-700
                text-gray-900 dark:text-white
                rounded-xl
                flex items-center gap-2
                font-medium
                transition-colors duration-300
                shadow-lg
                border border-gray-200 dark:border-gray-700
              ">
                <Globe className="w-5 h-5" />
                <span>Visit Website</span>
              </button>

              <button className="
                px-6 py-3
                bg-purple-50 hover:bg-purple-100
                dark:bg-purple-900/30 dark:hover:bg-purple-900/50
                text-purple-600 dark:text-purple-400
                rounded-xl
                flex items-center gap-2
                font-medium
                transition-colors duration-300
                shadow-lg
              ">
                <ExternalLink className="w-5 h-5" />
                <span>Full Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;
