import React from 'react'

import { Helmet } from 'react-helmet'

import Header2 from '../components/header2'
import Review1 from '../components/review1'
import './patient-form.css'

const PatientForm = (props) => {
  return (
    <div className="patient-form-container">
      <Helmet>
        <title>patient-form - WIE hackathon</title>
        <meta property="og:title" content="patient-form - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <Header2 rootClassName="header2-root-class-name4"></Header2>
      <div className="patient-form-container1"></div>
      <Review1 rootClassName="review1-root-class-name"></Review1>
    </div>
  )
}

export default PatientForm
