import React from 'react'

import { Helmet } from 'react-helmet'

import Header2 from '../components/header2'
import Review from '../components/review'
import './review-form.css'

const ReviewForm = (props) => {
  return (
    <div className="review-form-container">
      <Helmet>
        <title>review-form - WIE hackathon</title>
        <meta property="og:title" content="review-form - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <Header2 rootClassName="header2-root-class-name3"></Header2>
      <div className="review-form-container1">
        <Review rootClassName="review-root-class-name"></Review>
        <h1 className="review-form-text">THANKS FOR JOINING!</h1>
      </div>
    </div>
  )
}

export default ReviewForm
