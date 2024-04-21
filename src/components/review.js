import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './review.css'

const Review = (props) => {
  return (
    <div className={`review-container ${props.rootClassName} `}>
      <h1 className="review-text">{props.heading}</h1>
      <div className="review-container01">
        <div className="review-container02">
          <h1 className="review-text01">{props.heading2}</h1>
          <span className="review-text02">{props.text}</span>
          <div className="review-container03">
            <div className="review-container04">
              <div className="review-container05">
                <div className="review-container06">
                  <div className="review-container07">
                    <div className="review-container08">
                      <input
                        type="radio"
                        name="radio"
                        className="review-radiobutton"
                      />
                      <span className="review-text03">{props.text1}</span>
                    </div>
                    <input
                      type="radio"
                      name="radio"
                      className="review-radiobutton1"
                    />
                  </div>
                  <span className="review-text04">{props.text2}</span>
                </div>
                <input
                  type="radio"
                  name="radio"
                  className="review-radiobutton2"
                />
              </div>
              <span className="review-text05">{props.text3}</span>
              <input
                type="radio"
                name="radio"
                className="review-radiobutton3"
              />
              <span className="review-text06">{props.text4}</span>
            </div>
          </div>
          <span className="review-text07">{props.text5}</span>
          <textarea
            placeholder="Describe here"
            className="review-textarea textarea"
          ></textarea>
          <span className="review-text08">{props.text6}</span>
          <textarea
            placeholder="Describe here"
            className="review-textarea1 textarea"
          ></textarea>
          <span className="review-text09">{props.text7}</span>
          <textarea
            placeholder="Describe here"
            className="review-textarea2 textarea"
          ></textarea>
        </div>
        <div className="review-container09">
          <h1 className="review-text10">{props.heading3}</h1>
          <span className="review-text11">{props.text5}</span>
          <textarea
            placeholder="Describe here"
            className="review-textarea3 textarea"
          ></textarea>
          <span className="review-text12">{props.text6}</span>
          <textarea
            placeholder="Describe here"
            className="review-textarea4 textarea"
          ></textarea>
          <span className="review-text13">{props.text7}</span>
          <textarea
            placeholder="Describe here"
            className="review-textarea5 textarea"
          ></textarea>
        </div>
        <div className="review-container10">
          <h1 className="review-text14">{props.heading4}</h1>
          <textarea
            placeholder={props.textareaPlaceholder3}
            className="review-textarea6 textarea"
          ></textarea>
        </div>
      </div>
      <Link to="/" className="review-navlink button">
        {props.button}
      </Link>
    </div>
  )
}

Review.defaultProps = {
  heading4: 'Additional Recommendations',
  text7: 'Emotional Health',
  text1: 'Excellent',
  button: 'Send',
  text6: 'Mental Health',
  text8: 'Text',
  textareaPlaceholder3: 'placeholder',
  textareaPlaceholder2: 'placeholder',
  heading: 'Fill your review',
  textareaPlaceholder1: 'placeholder',
  text4: 'Poor',
  text5: 'Physical Health',
  heading1: 'Heading',
  heading2: "Patient's current condition",
  rootClassName: '',
  text3: 'Fair',
  text: 'Overall health status',
  text2: 'Good',
  heading3: 'Improvements needed',
  textareaPlaceholder: 'placeholder',
}

Review.propTypes = {
  heading4: PropTypes.string,
  text7: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  textareaPlaceholder3: PropTypes.string,
  textareaPlaceholder2: PropTypes.string,
  heading: PropTypes.string,
  textareaPlaceholder1: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  heading3: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
}

export default Review
