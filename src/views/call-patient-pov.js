import React from 'react'

import { Helmet } from 'react-helmet'

import Header2 from '../components/header2'
import CallFooter1 from '../components/call-footer-1'
import './call-patient-pov.css'

const CallPatientPov = (props) => {
  return (
    <div className="call-patient-pov-container">
      <Helmet>
        <title>Call-patient-pov - WIE hackathon</title>
        <meta property="og:title" content="Call-patient-pov - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <Header2 rootClassName="header2-root-class-name1"></Header2>
      <div className="call-patient-pov-container1"></div>
      <h1 className="call-patient-pov-text">Therapist</h1>
      <video
        src
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="call-patient-pov-video"
      ></video>
      <div className="call-patient-pov-container2"></div>
      <CallFooter1 rootClassName="call-footer1-root-class-name1"></CallFooter1>
    </div>
  )
}

export default CallPatientPov
