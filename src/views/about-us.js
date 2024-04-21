import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import AboutUs1 from '../components/about-us-1'
import AboutUs3 from '../components/about-us-3'
import AboutUs4 from '../components/about-us-4'
import Footer from '../components/footer'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-us - WIE hackathon</title>
        <meta property="og:title" content="About-us - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <div className="about-us-container1">
        <span className="about-us-text">
          <span>About Us: Redefining Healthcare Together</span>
          <br></br>
        </span>
      </div>
      <span className="about-us-text03">
        <span>
          Welcome to VitalityRoots, where we empower individuals to prioritize
          their health and wellness through community, telehealth services, and
          educational resources
        </span>
        <span>.</span>
        <br></br>
      </span>
      <AboutUs1 rootClassName="about-us1-root-class-name"></AboutUs1>
      <AboutUs3 rootClassName="about-us3-root-class-name"></AboutUs3>
      <AboutUs4 rootClassName="about-us4-root-class-name"></AboutUs4>
      <div className="about-us-container2">
        <Link to="/register" className="about-us-navlink button">
          <span className="about-us-text07">
            <span>Join Us Now!</span>
            <br></br>
          </span>
        </Link>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default AboutUs
