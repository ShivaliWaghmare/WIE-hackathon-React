import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - WIE hackathon</title>
        <meta property="og:title" content="Login - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <div className="login-container1">
        <span className="login-text">
          <span>Login</span>
          <br></br>
        </span>
        <div className="login-container2">
          <div className="login-container3">
            <div className="login-container4">
              <button type="button" className="login-button button">
                Continue with Google
              </button>
            </div>
            <div className="login-container5"></div>
            <div className="login-container6">
              <div className="login-container7">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="login-textinput input"
                />
                <input
                  type="password"
                  id="Enter Password"
                  cols="Enter College Name"
                  name="Password"
                  placeholder="Enter Password"
                  className="login-input input"
                />
                <Link to="/" className="login-navlink button">
                  Login
                </Link>
                <div className="login-container8">
                  <span className="login-text3">Not Registered ?</span>
                  <Link to="/register" className="login-navlink1">
                    Register Now
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

export default Login
