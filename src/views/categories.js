import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './categories.css'

const Categories = (props) => {
  return (
    <div className="categories-container">
      <Helmet>
        <title>Categories - WIE hackathon</title>
        <meta property="og:title" content="Categories - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <div className="categories-features">
        <h1 className="categories-text">Choose a category</h1>
        <div className="categories-container01">
          <div className="categories-feature-card">
            <h2 className="categories-text1">Mental Health</h2>
            <div className="categories-container02">
              <img
                alt="image"
                src="/external/1-200w.webp"
                className="categories-image"
              />
              <input type="checkbox" className="categories-checkbox" />
            </div>
          </div>
          <div className="categories-feature-card1">
            <h2 className="categories-text2">Nutrition</h2>
            <div className="categories-container03">
              <img
                alt="image"
                src="/external/2-200w.webp"
                className="categories-image1"
              />
              <input type="checkbox" className="categories-checkbox1" />
            </div>
          </div>
          <div className="categories-feature-card2">
            <h2 className="categories-text3">Chronic illness</h2>
            <div className="categories-container04">
              <img
                alt="image"
                src="/external/3-200w.webp"
                className="categories-image2"
              />
              <input type="checkbox" className="categories-checkbox2" />
            </div>
          </div>
        </div>
        <div className="categories-container05">
          <div className="categories-feature-card3">
            <h2 className="categories-text4">Stress Management</h2>
            <div className="categories-container06">
              <img
                alt="image"
                src="/external/4-300w.webp"
                className="categories-image3"
              />
              <input type="checkbox" className="categories-checkbox3" />
            </div>
          </div>
          <div className="categories-feature-card4">
            <h2 className="categories-text5">Substance addiction</h2>
            <div className="categories-container07">
              <img
                alt="image"
                src="/external/5-300w.webp"
                className="categories-image4"
              />
              <input type="checkbox" className="categories-checkbox4" />
            </div>
          </div>
        </div>
        <Link to="/login" className="categories-navlink button">
          <span className="categories-text6">Next</span>
          <svg viewBox="0 0 1024 1024" className="categories-icon">
            <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
          </svg>
        </Link>
      </div>
      <div className="categories-container08">
        <div className="categories-container09">
          <div className="categories-container10"></div>
        </div>
      </div>
    </div>
  )
}

export default Categories
