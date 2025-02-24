import React from 'react'
import {
    Shield,
    HeartHandshake,
    Sparkles,
    TrendingUp,
  } from "lucide-react";

const Advantages = () => {
  return (
    <div>
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
    </div>
  )
}

export default Advantages
