import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer1.css'

const Footer1 = (props) => {
  return (
    <div className={`footer1-container ${props.rootClassName} `}>
      <span className="footer1-text">
        <span className="footer1-text01"> Vitality</span>
        <span className="footer1-text02">Roots</span>
      </span>
      <div className="footer1-container1">
        <div className="footer1-container2">
          <div className="footer1-container3">
            <span className="footer1-text03">
              <span className="">About us</span>
            </span>
            <span className="footer1-text05">
              <span className="">Resources</span>
            </span>
            <span className="footer1-text07">
              <span className="">Social</span>
            </span>
          </div>
          <span className="footer1-text09">
            <span className="footer1-text10">2024 Vitality</span>
            <span className="footer1-text11">Roots</span>
            <span className="">, All right reserved</span>
          </span>
        </div>
        <div className="footer1-container4">
          <span className="footer1-text13">
            <span className="">Join our Newsletter</span>
          </span>
          <div className="footer1-container5">
            <div className="footer1-rectangle2">
              <span className="footer1-text15">{props.text}</span>
            </div>
            <Link to="/login" className="footer1-navlink">
              <div className="footer1-rectangle4">
                <span className="">{props.text1}</span>
              </div>
            </Link>
          </div>
          <img
            alt={props.line2Alt}
            src={props.line2Src}
            className="footer1-line2"
          />
          <span className="footer1-text17">
            <span className="">Mental Health Helplines</span>
          </span>
          <div className="footer1-rectangle3">
            <span className="">{props.text2}</span>
          </div>
        </div>
      </div>
      <span className="footer1-text20">
        <span className="">Get help</span>
      </span>
    </div>
  )
}

Footer1.defaultProps = {
  text1: 'Sign up',
  rootClassName: '',
  line2Alt: 'Line2227',
  text2: 'Get Help',
  text: 'Email Address',
  line2Src: '/external/line2227-qg7p.svg',
}

Footer1.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  line2Alt: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  line2Src: PropTypes.string,
}

export default Footer1
