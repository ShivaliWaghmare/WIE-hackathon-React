import React from 'react'

import PropTypes from 'prop-types'

import './healthgoals1.css'

const Healthgoals1 = (props) => {
  return (
    <div className={`healthgoals1-container ${props.rootClassName} `}>
      <span className="healthgoals1-text">{props.text}</span>
      <input
        type="text"
        placeholder="How many days in a week ?"
        className="healthgoals1-textinput input"
      />
      <span className="healthgoals1-text1">{props.text1}</span>
      <input
        type="text"
        placeholder={props.textinputPlaceholder1}
        className="healthgoals1-textinput1 input"
      />
      <h1 className="healthgoals1-text2">{props.heading}</h1>
      <div className="healthgoals1-container01">
        <div className="healthgoals1-container02">
          <input
            type="radio"
            name="radio"
            className="healthgoals1-radiobutton"
          />
        </div>
        <input
          type="text"
          placeholder="Enter goals"
          className="healthgoals1-textinput2 input"
        />
      </div>
      <div className="healthgoals1-container03">
        <div className="healthgoals1-container04">
          <input
            type="radio"
            name="radio"
            className="healthgoals1-radiobutton1"
          />
        </div>
        <input
          type="text"
          placeholder="Enter goals"
          className="healthgoals1-textinput3 input"
        />
      </div>
      <div className="healthgoals1-container05">
        <div className="healthgoals1-container06">
          <input
            type="radio"
            name="radio"
            className="healthgoals1-radiobutton2"
          />
        </div>
        <input
          type="text"
          placeholder="Enter goals"
          className="healthgoals1-textinput4 input"
        />
      </div>
      <div className="healthgoals1-container07">
        <div className="healthgoals1-container08">
          <div className="healthgoals1-container09">
            <input
              type="radio"
              name="radio"
              className="healthgoals1-radiobutton3"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="Enter goals"
          className="healthgoals1-textinput5 input"
        />
      </div>
      <div className="healthgoals1-container10">
        <div className="healthgoals1-container11">
          <input
            type="radio"
            name="radio"
            className="healthgoals1-radiobutton4"
          />
        </div>
        <input
          type="text"
          placeholder={props.textinputPlaceholder6}
          className="healthgoals1-textinput6 input"
        />
      </div>
      <button type="button" className="healthgoals1-button button">
        {props.button}
      </button>
    </div>
  )
}

Healthgoals1.defaultProps = {
  text2: 'Text',
  button: 'Submit',
  textinputPlaceholder5: 'placeholder',
  text1: 'Weight loss target',
  rootClassName: '',
  text: 'Exercise Frequency',
  textinputPlaceholder1: 'placeholdertarget for this month ?',
  text7: 'Text',
  text5: 'Text',
  textinputPlaceholder4: 'placeholder',
  text6: 'Text',
  heading: 'Set Goals',
  text3: 'Text',
  text4: 'Text',
  textinputPlaceholder3: 'placeholder',
  textinputPlaceholder2: 'placeholder',
  textinputPlaceholder6: 'Enter goals',
  textinputPlaceholder: 'placeholder',
}

Healthgoals1.propTypes = {
  text2: PropTypes.string,
  button: PropTypes.string,
  textinputPlaceholder5: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  text7: PropTypes.string,
  text5: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  text6: PropTypes.string,
  heading: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  textinputPlaceholder3: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  textinputPlaceholder6: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
}

export default Healthgoals1
