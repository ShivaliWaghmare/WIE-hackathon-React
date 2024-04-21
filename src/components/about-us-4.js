import React from 'react'

import PropTypes from 'prop-types'

import './about-us-4.css'

const AboutUs4 = (props) => {
  return (
    <div className={`about-us-4-container ${props.rootClassName} `}>
      <div className="about-us-4-container1">
        <span className="about-us-4-text">{props.text1}</span>
      </div>
    </div>
  )
}

AboutUs4.defaultProps = {
  rootClassName: '',
  text1:
    'Why Choose Us?  Comprehensive Approach: We offer a holistic approach to healthcare, integrating community support, telehealth services, and essential tools. Personalized Care: Our platform is designed to cater to your unique health needs and preferences. Innovation and Convenience: Experience seamless telehealth solutions and online medical services for your convenience.',
  text: '',
}

AboutUs4.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default AboutUs4
