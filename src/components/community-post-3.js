import React from 'react'

import PropTypes from 'prop-types'

import './community-post-3.css'

const CommunityPost3 = (props) => {
  return (
    <div className={`community-post-3-container ${props.rootClassName} `}>
      <div className="community-post-3-container1">
        <svg viewBox="0 0 1024 1024" className="community-post-3-icon">
          <path
            d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
            className=""
          ></path>
        </svg>
        <span className="community-post-3-text">{props.text}</span>
        <button type="button" className="community-post-3-button button">
          {props.button}
        </button>
      </div>
      <div className="community-post-3-container2">
        <h1 className="community-post-3-text1">{props.heading}</h1>
        <span className="community-post-3-text2">{props.text1}</span>
        <div className="community-post-3-container3">
          <svg viewBox="0 0 1024 1024" className="community-post-3-icon2">
            <path
              d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="community-post-3-icon4">
            <path
              d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM938 170v768l-170-170h-598q-34 0-59-26t-25-60v-512q0-34 25-59t59-25h684q34 0 59 25t25 59z"
              className=""
            ></path>
          </svg>
          <svg
            viewBox="0 0 1025.1702857142857 1024"
            className="community-post-3-icon6"
          >
            <path
              d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="community-post-3-container4">
          <div className="community-post-3-container5"></div>
        </div>
      </div>
    </div>
  )
}

CommunityPost3.defaultProps = {
  text1:
    '10. Sleep. Well.  9. Gently splash your eyes with cold water every morning. This helps increase the longevity of your eyes. And keeps them healthy.  8. Read books. Books are the fodder for mind, just as food is for body.  7. Avoid junk food as much as possible. Eat healthy.  6. Talk to people. Share your thoughts and problems. Or the lack of them. Basically anything. Loneliness is major cause of depression. Always remember.  5. Take breaks. Relax. Cause you know, "All work and no play makes Jack a dull boy."  4. Fruits and vegetables. There\'s something about the raw nutrition in them that gives you a longer and healthier life.  3. Drink loads of water! Water is possibly the healthiest thing out there.  2. Exercise. Accepting curves and criticism of the stereotypical sizes is one thing. But being fit is another. Be fit.  1. Be happy. Smile a lot. Laugh even more',
  rootClassName: '',
  heading: 'Heading',
  text: 'Name',
  button: 'Follow',
}

CommunityPost3.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
}

export default CommunityPost3
