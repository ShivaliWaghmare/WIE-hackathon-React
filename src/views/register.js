import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - WIE hackathon</title>
        <meta property="og:title" content="Register - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <div className="register-container1">
        <span className="register-text">
          <span>Register</span>
          <br></br>
        </span>
        <div className="register-container2">
          <div className="register-container3">
            <div className="register-container4">
              <div className="register-container5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Name"
                  className="register-textinput input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="register-textinput1 input"
                />
                <input
                  type="password"
                  id="Enter Password"
                  cols="Enter College Name"
                  name="Password"
                  placeholder="Enter Password"
                  className="register-input input"
                />
                <Link to="/categories" className="register-navlink button">
                  <span>
                    <span>Register</span>
                    <br></br>
                  </span>
                </Link>
                <div className="register-container6">
                  <span className="register-text6">
                    <span>Already Registered ?</span>
                    <br></br>
                  </span>
                  <Link to="/login" className="register-navlink1">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
