import React from 'react'
import BookDetail from '../Components/BookDetail'
import AuthorSection from '../Components/AuthorSection'
import Footer from '../Components/Footer'
import SimilarBooks from '../Components/SimilarBooks'
import FeaturedBooks from '../Components/FeaturedBooks'
import ReviewSection from '../Components/ReviewSection'

const BookPage = () => {
  return (
    <div>
      <BookDetail />
      <AuthorSection />
      <ReviewSection />
      <SimilarBooks />
      <SimilarBooks />
      <Footer />
    </div>
  )
}

export default BookPage
