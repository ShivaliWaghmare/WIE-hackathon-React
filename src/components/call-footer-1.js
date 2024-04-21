import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './call-footer-1.css'

const CallFooter1 = (props) => {
  return (
    <div className={`call-footer-1-container ${props.rootClassName} `}>
      <div className="call-footer-1-container1">
        <button type="button" className="call-footer-1-button button">
          <svg viewBox="0 0 1024 1024" className="call-footer-1-icon">
            <path
              d="M140 86l756 756-54 54-136-136q-12 8-24 8h-512q-18 0-30-12t-12-30v-428q0-18 12-30t30-12h32l-116-116zM896 278v456l-478-478h264q18 0 31 12t13 30v150z"
              className=""
            ></path>
          </svg>
        </button>
        <button type="button" className="call-footer-1-button1 button">
          <svg viewBox="0 0 1024 1024" className="call-footer-1-icon2">
            <path
              d="M182 128l714 714-54 54-178-178q-44 28-110 38v140h-84v-140q-106-16-181-97t-75-189h72q0 94 67 155t159 61q50 0 98-22l-70-70q-16 4-28 4-52 0-90-38t-38-90v-32l-256-256zM640 476l-256-254v-8q0-52 38-90t90-38 90 38 38 90v262zM810 470q0 74-38 140l-52-54q18-40 18-86h72z"
              className=""
            ></path>
          </svg>
        </button>
        <Link to="/review-form" className="call-footer-1-navlink button">
          <svg viewBox="0 0 1024 1024" className="call-footer-1-icon4">
            <path
              d="M512 384q-104 0-196 30v132q0 30-24 40-64 30-114 78-12 12-30 12t-30-12l-106-106q-12-12-12-30t12-30q210-200 500-200t500 200q12 12 12 30t-12 30l-106 106q-12 12-30 12t-30-12q-44-42-114-78-24-10-24-38v-132q-100-32-196-32z"
              className=""
            ></path>
          </svg>
        </Link>
      </div>
      <div className="call-footer-1-container2">
        <div className="call-footer-1-container3">
          <span className="call-footer-1-text">{props.text}</span>
          <video
            src={props.videoSrc}
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            className="call-footer-1-video"
          ></video>
        </div>
      </div>
    </div>
  )
}

CallFooter1.defaultProps = {
  button1: 'Button',
  button: 'End Call',
  videoSrc: '',
  text: 'Patient',
  button2: 'End Call',
  rootClassName: '',
}

CallFooter1.propTypes = {
  button1: PropTypes.string,
  button: PropTypes.string,
  videoSrc: PropTypes.string,
  text: PropTypes.string,
  button2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CallFooter1
