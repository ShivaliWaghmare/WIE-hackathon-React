import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './slider.css'

const Slider = (props) => {
  return (
    <div className={`slider-container ${props.rootClassName} `}>
      <div
        data-thq="slider"
        data-autoplay="true"
        data-navigation="true"
        data-pagination="true"
        className="slider-slider swiper"
      >
        <div data-thq="slider-wrapper" className="swiper-wrapper">
          <div
            data-thq="slider-slide"
            className="slider-slider-slide swiper-slide"
          >
            <div className="slider-container1">
              <div className="slider-testimonial-card">
                <div className="slider-testimonial">
                  <span className="slider-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum.
                  </span>
                  <span className="slider-text1">John Doe</span>
                </div>
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&amp;ixlib=rb-1.2.1&amp;w=200"
                  className="slider-image"
                />
              </div>
            </div>
          </div>
          <div
            data-thq="slider-slide"
            className="slider-slider-slide1 swiper-slide"
          >
            <div className="slider-testimonial-card1">
              <div className="slider-testimonial1">
                <span className="slider-text2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  lorem lorem, malesuada in metus vitae, scelerisque accumsan
                  ipsum.
                </span>
                <span className="slider-text3">John Doe</span>
              </div>
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&amp;ixlib=rb-1.2.1&amp;w=200"
                className="slider-image1"
              />
            </div>
          </div>
          <div
            data-thq="slider-slide"
            className="slider-slider-slide2 swiper-slide"
          >
            <div className="slider-testimonial-card2">
              <div className="slider-testimonial2">
                <span className="slider-text4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  lorem lorem, malesuada in metus vitae, scelerisque accumsan
                  ipsum.
                </span>
                <span className="slider-text5">John Doe</span>
              </div>
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&amp;ixlib=rb-1.2.1&amp;w=200"
                className="slider-image2"
              />
            </div>
          </div>
          <div
            data-thq="slider-slide"
            className="slider-slider-slide3 swiper-slide"
          >
            <div className="slider-testimonial-card3">
              <div className="slider-testimonial3">
                <span className="slider-text6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  lorem lorem, malesuada in metus vitae, scelerisque accumsan
                  ipsum.
                </span>
                <span className="slider-text7">John Doe</span>
              </div>
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&amp;ixlib=rb-1.2.1&amp;w=200"
                className="slider-image3"
              />
            </div>
          </div>
        </div>
        <div
          data-thq="slider-pagination"
          className="slider-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
        >
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
        </div>
        <div
          data-thq="slider-button-prev"
          className="slider-slider-button-prev swiper-button-prev"
        ></div>
        <div
          data-thq="slider-button-next"
          className="slider-slider-button-next swiper-button-next"
        ></div>
      </div>
      <Link to="/before-call" className="slider-navlink">
        <svg viewBox="0 0 1024 1024" className="slider-icon">
          <path
            d="M726 448l170-170v468l-170-170v150q0 18-13 30t-31 12h-512q-18 0-30-12t-12-30v-428q0-18 12-30t30-12h512q18 0 31 12t13 30v150z"
            className=""
          ></path>
        </svg>
      </Link>
    </div>
  )
}

Slider.defaultProps = {
  videoSrc1: '',
  videoSrc: '',
  rootClassName: '',
}

Slider.propTypes = {
  videoSrc1: PropTypes.string,
  videoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Slider
