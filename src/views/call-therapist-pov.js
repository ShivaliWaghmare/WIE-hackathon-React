import React from 'react'

import { Helmet } from 'react-helmet'

import Header2 from '../components/header2'
import CallFooter2 from '../components/call-footer-2'
import './call-therapist-pov.css'

const CallTherapistPov = (props) => {
  return (
    <div className="call-therapist-pov-container">
      <Helmet>
        <title>Call-therapist-pov - WIE hackathon</title>
        <meta
          property="og:title"
          content="Call-therapist-pov - WIE hackathon"
        />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <Header2 rootClassName="header2-root-class-name2"></Header2>
      <div className="call-therapist-pov-container1"></div>
      <h1 className="call-therapist-pov-text">Patient</h1>
      <video
        src
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="call-therapist-pov-video"
      ></video>
      <div className="call-therapist-pov-container2"></div>
      <CallFooter2 rootClassName="call-footer2-root-class-name"></CallFooter2>
    </div>
  )
}

export default CallTherapistPov
