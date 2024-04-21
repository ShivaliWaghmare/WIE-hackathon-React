import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './profile-header.css'

const ProfileHeader = (props) => {
  return (
    <div className={`profile-header-container68 ${props.rootClassName} `}>
      <div className="profile-header-container71">
        <div className="profile-header-avatar9">
          <img
            alt={props.rectangleAlt}
            src={props.rectangleSrc}
            className="profile-header-rectangle"
          />
          <div className="profile-header-frame">
            <span className="profile-header-text">{props.text}</span>
          </div>
        </div>
        <span className="profile-header-text01">
          <span className="">View profile</span>
        </span>
        <div className="profile-header-sidebar-menu1">
          <div className="profile-header-frame1">
            <span className="profile-header-text03">
              <span className="">Analytics</span>
            </span>
          </div>
          <div className="profile-header-frame2">
            <img
              alt={props.rectangleAlt1}
              src={props.rectangleSrc1}
              className="profile-header-rectangle1"
            />
            <span className="profile-header-text05">
              <span className="">Dashboard</span>
            </span>
          </div>
          <div className="profile-header-frame3">
            <span className="profile-header-text07">
              <span className="">Projects</span>
            </span>
          </div>
          <div className="profile-header-frame4">
            <span className="profile-header-text09">
              <span className="">Integrations</span>
            </span>
          </div>
          <div className="profile-header-frame5">
            <span className="profile-header-text11">
              <span className="">Teams</span>
            </span>
          </div>
          <div className="profile-header-frame6">
            <span className="profile-header-text13">
              <span className="">Messages</span>
            </span>
          </div>
        </div>
        <span className="profile-header-text15">
          <span className="">Amanda</span>
        </span>
        <div className="profile-header-image75">
          <div className="profile-header-group">
            <div className="profile-header-group01">
              <div className="profile-header-group02">
                <div className="profile-header-group03">
                  <div className="profile-header-group04"></div>
                  <div className="profile-header-group05"></div>
                  <div className="profile-header-group06"></div>
                  <div className="profile-header-group07"></div>
                  <div className="profile-header-group08"></div>
                  <div className="profile-header-group09"></div>
                  <div className="profile-header-group10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-header-container">
        <Link to="/" className="profile-header-text17">
          <span className="profile-header-text18">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="profile-header-text19">Vitality</span>
          <span className="profile-header-text20">Roots</span>
        </Link>
        <Link to="/" className="profile-header-navlink">
          <div className="profile-header-container1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="profile-header-icon"
            >
              <path
                d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"
                className=""
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="profile-header-textinput input"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

ProfileHeader.defaultProps = {
  textinputPlaceholder: 'placeholder',
  rootClassName: '',
  rectangleSrc1: 'e825c0fd-417e-445e-944f-a50e0368900c',
  rectangleAlt1: 'Rectangle1356',
  text: '',
  rectangleAlt: 'Rectangle1344',
  rectangleSrc: '01d39209-2e18-4df6-9647-8465e74839c9',
}

ProfileHeader.propTypes = {
  textinputPlaceholder: PropTypes.string,
  rootClassName: PropTypes.string,
  rectangleSrc1: PropTypes.string,
  rectangleAlt1: PropTypes.string,
  text: PropTypes.string,
  rectangleAlt: PropTypes.string,
  rectangleSrc: PropTypes.string,
}

export default ProfileHeader
