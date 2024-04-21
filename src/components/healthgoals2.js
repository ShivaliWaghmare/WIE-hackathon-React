import React from 'react'

import PropTypes from 'prop-types'

import './healthgoals2.css'

const Healthgoals2 = (props) => {
  return (
    <div className={`healthgoals2-container ${props.rootClassName} `}>
      <span className="healthgoals2-text">{props.text}</span>
      <input
        type="text"
        placeholder="How many days in a week ?"
        className="healthgoals2-textinput input"
      />
      <span className="healthgoals2-text1">{props.text1}</span>
      <input
        type="text"
        placeholder="What was your calorie intake this week ?"
        className="healthgoals2-textinput1 input"
      />
      <button type="button" className="healthgoals2-button button">
        {props.button}
      </button>
    </div>
  )
}

Healthgoals2.defaultProps = {
  rootClassName: '',
  heading: 'Set Goals',
  button: 'Submit',
  text1: 'Calorie intake',
  text: 'Exercise Done',
  textinputPlaceholder1: 'placeholdertarget for this month ?',
  textinputPlaceholder6: 'Enter goals',
}

Healthgoals2.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder6: PropTypes.string,
}

export default Healthgoals2
