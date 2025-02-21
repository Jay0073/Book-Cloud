import React from 'react'
import { 
    BookMarked, 
    Users, 
    Search,
    Clock,
    BookmarkCheck,
    Cloud,
  } from "lucide-react";


const Features = () => {
  return (
    <div>
      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features for Book Lovers
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Experience reading like never before with our comprehensive set of features
              designed to enhance your reading journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Smart Search",
                description: "Find books instantly with our intelligent search system"
              },
              {
                icon: BookMarked,
                title: "Personalized Library",
                description: "Create and organize your own digital book collection"
              },
              {
                icon: Clock,
                title: "Reading Progress",
                description: "Track your reading progress and set reading goals"
              },
              {
                icon: Users,
                title: "Multi-device Sync",
                description: "Seamlessly switch between devices while reading"
              },
              {
                icon: BookmarkCheck,
                title: "Smart Bookmarks",
                description: "Add notes and highlights to your favorite passages"
              },
              {
                icon: Cloud,
                title: "Cloud Storage",
                description: "Access your books anywhere with cloud synchronization"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="
                  bg-white dark:bg-gray-900 
                  p-8 rounded-2xl
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                  border border-gray-100 dark:border-gray-700
                "
              >
                <feature.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
