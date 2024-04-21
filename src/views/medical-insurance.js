import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './medical-insurance.css'

const MedicalInsurance = (props) => {
  return (
    <div className="medical-insurance-container">
      <Helmet>
        <title>Medical-Insurance - WIE hackathon</title>
        <meta property="og:title" content="Medical-Insurance - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="medical-insurance-container1">
        <span className="medical-insurance-text">
          <span className="medical-insurance-text01">
            Medical
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="medical-insurance-text02">Insurance</span>
        </span>
        <div className="medical-insurance-container2">
          <span className="medical-insurance-text03">
            <br className="medical-insurance-text04"></br>
            <br></br>
          </span>
          <h1 className="medical-insurance-text06">Top 5 Insurance Policies</h1>
        </div>
        <div className="medical-insurance-container3">
          <div className="medical-insurance-feature-card">
            <h2 className="medical-insurance-text07">
              <span>Health Insurance</span>
              <br></br>
            </h2>
            <a
              href="https://www.starhealth.in/"
              target="_blank"
              rel="noreferrer noopener"
              className="medical-insurance-link button"
            >
              Get Policies
            </a>
          </div>
          <div className="medical-insurance-feature-card1">
            <h2 className="medical-insurance-text10">
              Unit-Linked Insurance Plans
            </h2>
            <a
              href="https://www.hdfclife.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="medical-insurance-link1 button"
            >
              Get Policies
            </a>
          </div>
          <div className="medical-insurance-feature-card2">
            <h1 className="medical-insurance-text11">Term Insurance</h1>
            <a
              href="https://www.licindia.in/"
              target="_blank"
              rel="noreferrer noopener"
              className="medical-insurance-link2 button"
            >
              Get Policies
            </a>
          </div>
        </div>
        <div className="medical-insurance-container4">
          <div className="medical-insurance-feature-card3">
            <h2 className="medical-insurance-text12">
              <span>Endowment Plans</span>
              <br></br>
            </h2>
            <a
              href="https://www.bajajallianzlife.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="medical-insurance-link3 button"
            >
              Get Policies
            </a>
          </div>
          <div className="medical-insurance-feature-card4">
            <h2 className="medical-insurance-text15">
              <span>Mediclaim insurance</span>
              <br></br>
            </h2>
            <a
              href="https://www.manipalcigna.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="medical-insurance-link4 button"
            >
              Get Policies
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalInsurance
