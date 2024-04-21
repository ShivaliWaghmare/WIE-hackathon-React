import React from 'react'

import PropTypes from 'prop-types'

import './about-us-3.css'

const AboutUs3 = (props) => {
  return (
    <div className={`about-us-3-container ${props.rootClassName} `}>
      <h1 className="about-us-3-text">{props.heading8}</h1>
      <div className="about-us-3-container1">
        <div className="about-us-3-feature-card">
          <h1 className="about-us-3-text1">{props.heading6}</h1>
          <span className="about-us-3-text2">{props.text2}</span>
        </div>
        <div className="about-us-3-feature-card1">
          <h1 className="about-us-3-text3">{props.heading7}</h1>
          <span className="about-us-3-text4">{props.text3}</span>
        </div>
      </div>
      <div className="about-us-3-container2">
        <div className="about-us-3-container3">
          <div className="about-us-3-feature-card2">
            <h1 className="about-us-3-text5">{props.heading4}</h1>
            <span className="about-us-3-text6">{props.text}</span>
          </div>
          <div className="about-us-3-feature-card3">
            <h1 className="about-us-3-text7">{props.heading5}</h1>
            <span className="about-us-3-text8">{props.text1}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutUs3.defaultProps = {
  heading8: 'Features of our website',
  heading2: 'Personalized Community',
  text3:
    'Experience healthcare from the comfort of your home with our advanced telehealth services. Connect instantly with trusted healthcare providers through video consultations. Within seconds, receive comprehensive mental health reports and personalized advice. Engage in interactive webinars led by top healthcare experts to stay informed and empowered.',
  text: 'Explore our online store offering a range of daily required medical devices. Whether you need monitoring equipment, mobility aids, or wellness products, find quality items conveniently delivered to your doorstep.',
  heading:
    "Access the best medical insurance plans tailored to your needs. We partner with leading insurance providers to offer comprehensive coverage and peace of mind for you and your family's healthcare expenses",
  text61:
    'Join a vibrant community of individuals who understand and share your health journey. Our unique personalized matching system connects you with like-minded individuals and healthcare professionals based on your specific health interests and conditions. Share experiences, offer support, and find inspiration tailored to your needs.',
  heading3: 'Integrated Telehealth Services',
  text6:
    'Join a vibrant community of individuals who understand and share your health journey. Our unique personalized matching system connects you with like-minded individuals and healthcare professionals based on your specific health interests and conditions. Share experiences, offer support, and find inspiration tailored to your needs.',
  heading5: 'Medical Insurance Services',
  heading4: 'Medical Device Store',
  text2:
    'Join a vibrant community of individuals who understand and share your health journey. Our unique personalized matching system connects you with like-minded individuals and healthcare professionals based on your specific health interests and conditions. Share experiences, offer support, and find inspiration tailored to your needs.',
  rootClassName: '',
  heading7: 'Integrated Telehealth Services:',
  heading6: 'Personalized Community',
  text62:
    'Join a vibrant community of individuals who understand and share your health journey. Our unique personalized matching system connects you with like-minded individuals and healthcare professionals based on your specific health interests and conditions. Share experiences, offer support, and find inspiration tailored to your needs.',
  text1:
    "Access the best medical insurance plans tailored to your needs. We partner with leading insurance providers to offer comprehensive coverage and peace of mind for you and your family's healthcare expenses",
  heading1: 'Personalized Community',
}

AboutUs3.propTypes = {
  heading8: PropTypes.string,
  heading2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  text61: PropTypes.string,
  heading3: PropTypes.string,
  text6: PropTypes.string,
  heading5: PropTypes.string,
  heading4: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  heading7: PropTypes.string,
  heading6: PropTypes.string,
  text62: PropTypes.string,
  text1: PropTypes.string,
  heading1: PropTypes.string,
}

export default AboutUs3
