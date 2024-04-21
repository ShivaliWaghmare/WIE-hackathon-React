import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Slider from '../components/slider'
import Events1 from '../components/events1'
import './video-calling.css'

const VideoCalling = (props) => {
  return (
    <div className="video-calling-container">
      <Helmet>
        <title>video-calling - WIE hackathon</title>
        <meta property="og:title" content="video-calling - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="video-calling-container1">
        <div className="video-calling-container2">
          <div className="video-calling-container3">
            <div className="video-calling-feature-card">
              <h2 className="video-calling-text">
                <span>Meditation</span>
                <br></br>
              </h2>
              <svg viewBox="0 0 1024 1024" className="video-calling-icon">
                <path d="M0 128v768h1024v-768h-1024zM192 832h-128v-128h128v128zM192 576h-128v-128h128v128zM192 320h-128v-128h128v128zM768 832h-512v-640h512v640zM960 832h-128v-128h128v128zM960 576h-128v-128h128v128zM960 320h-128v-128h128v128zM384 320v384l256-192z"></path>
              </svg>
            </div>
            <div className="video-calling-feature-card1">
              <h2 className="video-calling-text3">Video Calling</h2>
              <svg viewBox="0 0 1024 1024" className="video-calling-icon2">
                <path d="M726 448l170-170v468l-170-170v150q0 18-13 30t-31 12h-512q-18 0-30-12t-12-30v-428q0-18 12-30t30-12h512q18 0 31 12t13 30v150z"></path>
              </svg>
            </div>
            <div className="video-calling-feature-card2">
              <h2 className="video-calling-text4">
                <span>Calendar</span>
                <br></br>
              </h2>
              <svg viewBox="0 0 1024 1024" className="video-calling-icon4">
                <path d="M854 896v-554h-684v554h684zM854 128q34 0 59 26t25 60v682q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-682q0-34 25-60t59-26h44v-86h84v86h428v-86h84v86h44z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Slider rootClassName="slider-root-class-name"></Slider>
      <Events1 rootClassName="events1-root-class-name"></Events1>
    </div>
  )
}

export default VideoCalling
