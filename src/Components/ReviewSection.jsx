import React from "react";
import { 
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageCircle
} from "lucide-react";

const ReviewSection = () => {
  // Sample review data
  const reviewStats = {
    average: 4.8,
    total: 2462,
    distribution: [
      { stars: 5, count: 1850, percentage: 75 },
      { stars: 4, count: 400, percentage: 16 },
      { stars: 3, count: 150, percentage: 6 },
      { stars: 2, count: 42, percentage: 2 },
      { stars: 1, count: 20, percentage: 1 },
    ]
  };

  const reviews = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        image: "https://placehold.co/100x100",
        reviewCount: 28
      },
      rating: 5,
      date: "2024-02-20",
      content: "This book is absolutely magnificent! The way the author weaves together different storylines while maintaining the central theme is masterful. I couldn't put it down and finished it in two sittings.",
      likes: 245,
      dislikes: 12,
      isVerified: true
    },
    {
      id: 2,
      user: {
        name: "Michael Clark",
        image: "https://placehold.co/100x100",
        reviewCount: 15
      },
      rating: 4,
      date: "2024-02-18",
      content: "A compelling read that keeps you engaged throughout. The character development is exceptional, though the ending felt a bit rushed. Still, I highly recommend it to anyone who enjoys thoughtful fiction.",
      likes: 178,
      dislikes: 8,
      isVerified: true
    },
    {
      id: 3,
      user: {
        name: "Michael Teja",
        image: "https://placehold.co/100x100",
        reviewCount: 15
      },
      rating: 5,
      date: "2024-02-18",
      content: "A compelling read that keeps you engaged throughout. The character development is exceptional, though the ending felt a bit rushed. Still, I highly recommend it to anyone who enjoys thoughtful fiction.",
      likes: 17,
      dislikes: 3,
      isVerified: true
    },
    {
      id: 4,
      user: {
        name: "Ravi Clark",
        image: "https://placehold.co/100x100",
        reviewCount: 10
      },
      rating: 4,
      date: "2024-02-18",
      content: "A compelling read that keeps you engaged throughout. The character development is exceptional, though the ending felt a bit rushed. Still, I highly recommend it to anyone who enjoys thoughtful fiction.",
      likes: 8,
      dislikes: 1,
      isVerified: true
    },
    {
      id: 5,
      user: {
        name: "Seguri Clark",
        image: "https://placehold.co/100x100",
        reviewCount: 5
      },
      rating: 3.5,
      date: "2024-02-18",
      content: "A compelling read that keeps you engaged throughout. The character development is exceptional, though the ending felt a bit rushed. Still, I highly recommend it to anyone who enjoys thoughtful fiction.",
      likes: 1,
      dislikes: 0,
      isVerified: true
    },
  ];

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header - Left Aligned */}
        <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Reviews & Ratings
          </h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full mt-4"></div>
        </div>

        {/* Rating and Reviews Container */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column - Rating Overview */}
          <div className="md:w-1/3">
            <div className="sticky top-4">
              {/* Average Rating */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    {reviewStats.average}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    out of 5
                  </span>
                </div>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(reviewStats.average)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {reviewStats.total.toLocaleString()} reviews
                </p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3">
                {reviewStats.distribution.map((stat) => (
                  <div key={stat.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-12">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.stars}
                      </span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400"
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                    <div className="w-12 text-right text-sm text-gray-600 dark:text-gray-400">
                      {stat.percentage}%
                    </div>
                  </div>
                ))}
              </div>

              {/* Write Review Button */}
              <button className="
                w-full
                mt-8
                px-6 py-3
                bg-indigo-600 hover:bg-indigo-700
                dark:bg-indigo-500 dark:hover:bg-indigo-600
                text-white
                rounded-xl
                flex items-center justify-center gap-2
                font-medium
                transition-colors duration-300
                shadow-lg
              ">
                <MessageCircle className="w-5 h-5" />
                <span>Write a Review</span>
              </button>
            </div>
          </div>

          {/* Right Column - Reviews List */}
          <div className="md:w-2/3">
            <div className="space-y-8">
              {reviews.map((review) => (
                <div 
                  key={review.id}
                  className="pb-8 border-b border-gray-200 dark:border-gray-700 last:border-0"
                >
                  {/* Review Header */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* User Avatar */}
                    <div className="
                      w-12 h-12
                      rounded-full
                      overflow-hidden
                      border-2 border-gray-200 dark:border-gray-700
                    ">
                      <img 
                        src={review.user.image} 
                        alt={review.user.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* User Info & Rating */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {review.user.name}
                        </h4>
                        {review.isVerified && (
                          <span className="
                            px-2 py-0.5
                            bg-green-50 dark:bg-green-900/30
                            text-green-600 dark:text-green-400
                            text-xs font-medium
                            rounded-full
                          ">
                            Verified Reader
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(review.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {review.content}
                  </p>

                  {/* Review Actions */}
                  <div className="flex items-center gap-6">
                    <button className="
                      flex items-center gap-2
                      text-gray-600 dark:text-gray-400
                      hover:text-indigo-600 dark:hover:text-indigo-400
                      transition-colors duration-200
                    ">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{review.likes}</span>
                    </button>
                    <button className="
                      flex items-center gap-2
                      text-gray-600 dark:text-gray-400
                      hover:text-red-600 dark:hover:text-red-400
                      transition-colors duration-200
                    ">
                      <ThumbsDown className="w-4 h-4" />
                      <span className="text-sm">{review.dislikes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
