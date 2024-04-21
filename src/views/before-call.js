import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './before-call.css'

const BeforeCall = (props) => {
  return (
    <div className="before-call-container">
      <Helmet>
        <title>before-call - WIE hackathon</title>
        <meta property="og:title" content="before-call - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <div className="before-call-container1">
        <h1 className="before-call-text">Join As</h1>
        <div className="before-call-container2">
          <Link to="/call-therapist-pov" className="before-call-navlink">
            <div className="before-call-feature-card">
              <img
                alt="image"
                src="/external/user-200h-300h.webp"
                className="before-call-image"
              />
              <h2 className="before-call-text1">
                <span>Therapist</span>
                <br></br>
              </h2>
            </div>
          </Link>
          <Link to="/call-patient-pov" className="before-call-navlink1">
            <div className="before-call-feature-card1">
              <img
                alt="image"
                src="/external/user-200h-300h.webp"
                className="before-call-image1"
              />
              <h2 className="before-call-text4">Patient</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BeforeCall
