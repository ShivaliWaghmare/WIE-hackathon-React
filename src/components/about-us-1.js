import React from 'react'

import PropTypes from 'prop-types'

import './about-us-1.css'

const AboutUs1 = (props) => {
  return (
    <div className={`about-us-1-container ${props.rootClassName} `}>
      <span className="about-us-1-text">{props.text}</span>
    </div>
  )
}

AboutUs1.defaultProps = {
  text: 'Our Mission: At VitalityRoots, our mission is to revolutionize healthcare by providing personalized, accessible, and comprehensive solutions that inspire individuals to thrive in their health journeys.',
  rootClassName: '',
}

AboutUs1.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AboutUs1
