import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.text1}
      </Link>
      <Link to="/video-calling" className="navigation-links-navlink1">
        {props.text}
      </Link>
      <Link to="/store" className="navigation-links-navlink2">
        {props.text5}
      </Link>
      <Link to="/medical-insurance" className="navigation-links-navlink3">
        {props.text2}
      </Link>
      <Link to="/about-us" className="navigation-links-navlink4">
        {props.text3}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Blog',
  text1: 'Home',
  text5: 'Store',
  rootClassName: '',
  text3: 'About us',
  text: 'VirtualVerve',
  text2: 'Medical Insurance',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
