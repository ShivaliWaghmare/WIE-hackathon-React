import React from 'react'

import PropTypes from 'prop-types'

import './home-categories.css'

const HomeCategories = (props) => {
  return (
    <div className={`home-categories-container ${props.rootClassName} `}>
      <h1 className="home-categories-text">{props.heading}</h1>
      <div className="home-categories-container1">
        <button type="button" className="home-categories-button button">
          <svg viewBox="0 0 1024 1024" className="home-categories-icon">
            <path
              d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"
              className=""
            ></path>
          </svg>
          <span className="">{props.text5}</span>
        </button>
        <span className="home-categories-text02">{props.text}</span>
      </div>
      <div className="home-categories-container2">
        <button type="button" className="home-categories-button1 button">
          <span className=""></span>
          <svg viewBox="0 0 1024 1024" className="home-categories-icon02">
            <path
              d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"
              className=""
            ></path>
          </svg>
        </button>
        <span className="home-categories-text04">{props.text1}</span>
      </div>
      <div className="home-categories-container3">
        <button type="button" className="home-categories-button2 button">
          <span className=""></span>
          <svg viewBox="0 0 1024 1024" className="home-categories-icon04">
            <path
              d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"
              className=""
            ></path>
          </svg>
        </button>
        <span className="home-categories-text06">{props.text2}</span>
      </div>
      <div className="home-categories-container4">
        <button type="button" className="home-categories-button3 button">
          <span className=""></span>
          <svg viewBox="0 0 1024 1024" className="home-categories-icon06">
            <path
              d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"
              className=""
            ></path>
          </svg>
        </button>
        <span className="home-categories-text08">{props.text3}</span>
      </div>
      <div className="home-categories-container5">
        <button type="button" className="home-categories-button4 button">
          <span className=""></span>
          <svg viewBox="0 0 1024 1024" className="home-categories-icon08">
            <path
              d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"
              className=""
            ></path>
          </svg>
        </button>
        <span className="home-categories-text10">{props.text4}</span>
      </div>
    </div>
  )
}

HomeCategories.defaultProps = {
  text5: '',
  text3: 'Stress Management',
  heading: 'Add Categories',
  button2: '',
  text1: 'Nutrition',
  rootClassName: '',
  button: '',
  button1: '',
  button3: '',
  button4: '',
  text2: 'Chronic illness',
  text: 'Mental Health',
  text4: 'Substance Addiction',
}

HomeCategories.propTypes = {
  text5: PropTypes.string,
  text3: PropTypes.string,
  heading: PropTypes.string,
  button2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
  button3: PropTypes.string,
  button4: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default HomeCategories
