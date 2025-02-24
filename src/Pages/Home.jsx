import React from 'react'
import Hero from '../Components/Hero'
import PopularGenres from '../Components/PopularGenres'
import FeaturedBooks from '../Components/FeaturedBooks'
import RecommendedBooks from '../Components/RecommendedBooks'
import Discover from '../Components/Discover'
import Footer from '../Components/Footer'
import Features from '../Components/Features'
import Advantages from '../Components/Advantages'

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularGenres />
      <Features />
      <Advantages />
      <FeaturedBooks />
      <RecommendedBooks />
      <Discover />
      <Footer />
    </div>
  )
}

export default Home
