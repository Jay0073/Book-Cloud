import React from "react";
import { 
  BookOpen, 
  BookMarked, 
  BookText, 
  Layout, 
  Users, 
  Search,
  Clock,
  BookmarkCheck,
  BookOpenCheck,
  Cloud,
  Bookmark,
  Shield,
  HeartHandshake,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <BookOpen className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Discover the World of Digital Reading
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to Book Cloud, your premier destination for digital reading. 
              We're transforming how people discover, access, and enjoy books in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100K+</div>
              <div className="text-gray-600 dark:text-gray-300">Books Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Active Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">1M+</div>
              <div className="text-gray-600 dark:text-gray-300">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4.8</div>
              <div className="text-gray-600 dark:text-gray-300">User Rating</div>
            </div>
          </div>
        </div>
      </section>

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
                icon: Clock,
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

      {/* Advantages Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Book Cloud?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover the advantages that make Book Cloud the preferred choice for digital reading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Bank-grade security for your account and reading data"
              },
              {
                icon: HeartHandshake,
                title: "User-Friendly",
                description: "Intuitive interface designed for readers of all ages"
              },
              {
                icon: Sparkles,
                title: "Regular Updates",
                description: "New books and features added regularly"
              },
              {
                icon: TrendingUp,
                title: "Growing Community",
                description: "Join thousands of readers sharing their passion for books"
              }
            ].map((advantage, index) => (
              <div 
                key={index}
                className="
                  flex items-start gap-6
                  p-8
                  bg-gray-50 dark:bg-gray-800
                  rounded-2xl
                "
              >
                <advantage.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Reading Journey?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of readers who have already discovered the joy of digital reading with Book Cloud.
          </p>
          
          
          <button className="
            px-8 py-4
            bg-white dark:bg-gray-900
            text-indigo-600 dark:text-indigo-400
            rounded-xl
            font-semibold
            hover:bg-gray-50 dark:hover:bg-gray-800
            transition-colors duration-300
            shadow-lg
          ">
            <Link to="/explore">
            Get Started Now
            </Link>
          </button>
          
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;

