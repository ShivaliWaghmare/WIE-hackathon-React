import React from 'react'

import PropTypes from 'prop-types'

import './login-comp.css'

const LoginComp = (props) => {
  return (
    <div className="login-comp-container">
      <div className="login-comp-container1">
        <button type="button" className="login-comp-button button">
          {props.button}
        </button>
      </div>
      <div className="login-comp-container2">
        <div className="login-comp-container3">
          <input
            type="email"
            name="email"
            placeholder={props.textinputPlaceholder}
            className="login-comp-textinput input"
          />
          <input
            type="password"
            id="Enter Password"
            cols="Enter College Name"
            name="Password"
            placeholder={props.inputPlaceholder}
            className="login-comp-input input"
          />
          <button type="button" className="login-comp-button1 button">
            {props.button1}
          </button>
          <div className="login-comp-container4">
            <span className="login-comp-text">{props.text}</span>
            <span className="login-comp-text1">{props.text1}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

LoginComp.defaultProps = {
  button1: 'Login',
  button: 'Continue with Google\n',
  inputPlaceholder: 'Enter Password',
  text1: 'Register Now',
  text: 'Not Registered ?',
  textinputPlaceholder: 'Enter Email',
}

LoginComp.propTypes = {
  button1: PropTypes.string,
  button: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
}

export default LoginComp
