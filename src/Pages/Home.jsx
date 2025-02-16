import React from 'react'
import Hero from '../Components/Hero'
import PopularGenres from '../Components/PopularGenres'
import FeaturedBooks from '../Components/FeaturedBooks'
import BookSlider from '../Components/BookSlider'

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularGenres />
      <FeaturedBooks />
    </div>
  )
}

export default Home
