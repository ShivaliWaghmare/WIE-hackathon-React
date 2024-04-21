import React from 'react'

import PropTypes from 'prop-types'

import './events1.css'

const Events1 = (props) => {
  return (
    <div className={`events1-container ${props.rootClassName} `}>
      <div className="events1-container01">
        <div className="events1-container02">
          <h1 className="events1-text">{props.heading}</h1>
        </div>
        <h1 className="events1-text01">{props.heading1}</h1>
      </div>
      <div className="events1-container03">
        <div className="events1-feature-card">
          <h2 className="events1-text02">Effects of covid Vaccine</h2>
          <div className="events1-container04">
            <img
              alt="image"
              src="https://www.fda.gov/files/iStock-157317886.jpg"
              className="events1-image"
            />
            <div className="events1-container05">
              <h1 className="events1-text03">{props.heading2}</h1>
              <span className="events1-text04">{props.text}</span>
            </div>
          </div>
        </div>
        <div className="events1-feature-card1">
          <h2 className="events1-text05">What is Anxiety ?</h2>
          <div className="events1-container06">
            <div className="events1-container07">
              <img
                alt="image"
                src="https://hips.hearstapps.com/hmg-prod/images/mental-health-package-anxiety-disorder-1586889763.jpg?crop=0.5xw:1xh;center,top&amp;resize=640:*"
                className="events1-image1"
              />
            </div>
            <div className="events1-container08">
              <h1 className="events1-text06">{props.heading3}</h1>
              <span className="events1-text07">{props.text1}</span>
            </div>
          </div>
        </div>
        <div className="events1-feature-card2">
          <h2 className="events1-text08">Benefits of yoga</h2>
          <div className="events1-container09">
            <img
              alt="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdDsKev8gAT-2Dzx-33MWtyhEZPY0J-RS9k_CxCa038Kg85FBpQWJQXemMAlYaLaCAaU&amp;usqp=CAU"
              className="events1-image2"
            />
            <div className="events1-container10">
              <h1 className="events1-text09">{props.heading4}</h1>
              <span className="events1-text10">{props.text2}</span>
            </div>
          </div>
        </div>
        <div className="events1-feature-card3">
          <h2 className="events1-text11">Self control, Addiction</h2>
          <div className="events1-container11">
            <img
              alt="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3E5DI9ohS3vCc-CXQ81XW46ZMSW7K8PCf0EwBsSzKbCGl6RfS38IQshCkMtJC8_ZX9dU&amp;usqp=CAU"
              className="events1-image3"
            />
            <div className="events1-container12">
              <h1 className="events1-text12">{props.heading5}</h1>
              <span className="events1-text13">{props.text3}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Events1.defaultProps = {
  heading4: '20th',
  heading1: 'Events',
  text1: "April'24",
  heading3: '20th',
  text2: "April'24",
  text: "April'24",
  heading5: '24th',
  rootClassName: '',
  heading2: '18th',
  text3: "April'24",
  heading: 'Upcoming',
}

Events1.propTypes = {
  heading4: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  heading3: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  heading5: PropTypes.string,
  rootClassName: PropTypes.string,
  heading2: PropTypes.string,
  text3: PropTypes.string,
  heading: PropTypes.string,
}

export default Events1
