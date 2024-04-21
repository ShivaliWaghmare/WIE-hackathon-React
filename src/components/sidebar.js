import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './sidebar.css'

const Sidebar = (props) => {
  return (
    <div className={`sidebar-sidebar ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="sidebar-icon">
        <path
          d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
          className=""
        ></path>
      </svg>
      <h1 className="sidebar-text">{props.heading}</h1>
      <Link to="/profile" className="sidebar-navlink">
        <div className="sidebar-container">
          <div className="sidebar-container1">
            <svg viewBox="0 0 1024 1024" className="sidebar-icon02">
              <path
                d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                className=""
              ></path>
            </svg>
            <span className="sidebar-text1 button">{props.text}</span>
          </div>
        </div>
      </Link>
      <Link to="/chat-room" className="sidebar-navlink1">
        <div className="sidebar-container2">
          <div className="sidebar-container3">
            <svg viewBox="0 0 1024 1024" className="sidebar-icon04">
              <path
                d="M768 342v-86h-512v86h512zM598 598v-86h-342v86h342zM256 384v86h512v-86h-512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"
                className=""
              ></path>
            </svg>
            <span className="sidebar-text2 button">{props.text1}</span>
          </div>
        </div>
      </Link>
      <Link to="/followers" className="sidebar-navlink2">
        <div className="sidebar-container4">
          <div className="sidebar-container5">
            <svg viewBox="0 0 1024 1024" className="sidebar-icon06">
              <path
                d="M384 736c0-151.234 95.874-280.486 230.032-330.2 16.28-36.538 25.968-77.164 25.968-117.8 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h397.306c-8.664-30.53-13.306-62.732-13.306-96z"
                className=""
              ></path>
              <path
                d="M736 448c-159.058 0-288 128.942-288 288s128.942 288 288 288c159.056 0 288-128.942 288-288s-128.942-288-288-288zM896 768h-128v128h-64v-128h-128v-64h128v-128h64v128h128v64z"
                className=""
              ></path>
            </svg>
            <span className="sidebar-text3 button">{props.text3}</span>
          </div>
        </div>
      </Link>
      <a href="#healthcare" className="sidebar-link">
        <div className="sidebar-container6">
          <div className="sidebar-container7">
            <div className="sidebar-container8">
              <svg viewBox="0 0 1024 1024" className="sidebar-icon09">
                <path
                  d="M731.429 585.143h174.286c-6.857 7.429-11.429 11.429-12.571 12.571l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-1.143-0.571-5.714-4.571-12-11.429h210.857c16.571 0 31.429-11.429 35.429-27.429l40-160.571 108.571 381.143c4.571 15.429 18.857 26.286 35.429 26.286v0c16 0 30.286-10.857 34.857-26.286l83.429-277.143 32 64c6.286 12 18.857 20 32.571 20zM1024 340.571c0 65.714-28.571 125.714-58.857 171.429h-210.857l-63.429-126.286c-6.286-13.143-21.143-21.143-35.429-20-15.429 1.714-28 11.429-32 26.286l-73.714 245.714-112-392c-4.571-15.429-18.857-26.286-36-26.286-16.571 0-30.857 11.429-34.857 27.429l-66.286 265.143h-241.714c-30.286-45.714-58.857-105.714-58.857-171.429 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"
                  className=""
                ></path>
              </svg>
            </div>
            <span className="sidebar-text4 button">{props.text4}</span>
          </div>
        </div>
      </a>
    </div>
  )
}

Sidebar.defaultProps = {
  text4: 'Health care',
  rootClassName: '',
  text1: 'Chat',
  text2: 'Security',
  heading: 'Username',
  text: 'Profile',
  text3: 'Followers',
}

Sidebar.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
}

export default Sidebar
