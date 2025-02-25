import React from "react";
import { Book, Users } from "lucide-react";
import MattHaig from "../assets/Matt-Haig.jpg";

const AuthorSection = () => {
  // Sample author data
  const author = {
    name: "Temple Grandin",
    image: MattHaig, // Replace with actual image path
    totalBooks: "183 books",
    followers: "1,703 followers",
    description: [
      "Mary Temple Grandin is an American academic and animal behaviorist. She is a prominent proponent of the humane treatment of livestock for slaughter and the author of more than 60 scientific papers on animal behavior. Grandin is a consultant to the livestock industry, where she offers advice on animal behavior, and is also an autism spokesperson.",
      "Grandin is one of the first autistic people to document the insights she gained from her personal experiences with autism. She is a faculty member with Animal Sciences in the College of Agricultural Sciences at Colorado State University.",
      "In 2010, Time 100, an annual list of the 100 most influential people in the world, named her in the \"Heroes\" category. She was the subject of the Emmy- and Golden Globe-winning biographical film Temple Grandin. Grandin has been an outspoken proponent of autism rights and neurodiversity movements."
    ]
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          About the author
        </h2>

        {/* Author Header */}
        <div className="flex items-center gap-6 mb-8">
          {/* Author Image */}
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={author.image} 
              alt={author.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Author Quick Info */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {author.name}
              </h3>
              <button className="
                px-6 py-2
                bg-gray-900 dark:bg-gray-800
                text-white
                rounded-full
                text-sm font-medium
                hover:bg-gray-800 dark:hover:bg-gray-700
                transition-colors duration-200
              ">
                Follow
              </button>
            </div>
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Book className="w-4 h-4" />
                <span>{author.totalBooks}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{author.followers}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Author Description */}
        <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
          {author.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Popular Books (Add your book cards component here) */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Popular Books
          </h3>
          {/* Add your book cards grid here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Book cards will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;
