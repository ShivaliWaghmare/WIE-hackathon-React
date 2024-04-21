import React from 'react'

import PropTypes from 'prop-types'

import './review1.css'

const Review1 = (props) => {
  return (
    <div className={`review1-container ${props.rootClassName} `}>
      <h1 className="review1-text">{props.heading1}</h1>
      <h1 className="review1-text01">{props.heading}</h1>
      <div className="review1-container01">
        <div className="review1-container02">
          <h1 className="review1-text02">{props.heading2}</h1>
          <span className="review1-text03">{props.text}</span>
          <div className="review1-container03">
            <div className="review1-container04">
              <div className="review1-container05">
                <div className="review1-container06">
                  <div className="review1-container07">
                    <div className="review1-container08">
                      <input
                        type="radio"
                        name="radio"
                        className="review1-radiobutton"
                      />
                      <span className="review1-text04">{props.text1}</span>
                    </div>
                    <input
                      type="radio"
                      name="radio"
                      className="review1-radiobutton1"
                    />
                  </div>
                  <span className="review1-text05">{props.text2}</span>
                </div>
                <input
                  type="radio"
                  name="radio"
                  className="review1-radiobutton2"
                />
              </div>
              <span className="review1-text06">{props.text3}</span>
              <input
                type="radio"
                name="radio"
                className="review1-radiobutton3"
              />
              <span className="review1-text07">{props.text4}</span>
            </div>
          </div>
          <span className="review1-text08">{props.text5}</span>
          <span className="review1-text09">{props.text8}</span>
          <span className="review1-text10">{props.text6}</span>
          <span className="review1-text11">{props.text9}</span>
          <span className="review1-text12">{props.text7}</span>
          <span className="review1-text13">{props.text10}</span>
        </div>
      </div>
      <div className="review1-container09">
        <h1 className="review1-text14">{props.heading3}</h1>
        <span className="review1-text15">{props.text5}</span>
        <span className="review1-text16">{props.text11}</span>
        <span className="review1-text17">{props.text6}</span>
        <span className="review1-text18">{props.text12}</span>
        <span className="review1-text19">{props.text7}</span>
        <span className="review1-text20">{props.text13}</span>
      </div>
      <div className="review1-container10">
        <h1 className="review1-text21">{props.heading4}</h1>
        <span className="review1-text22">{props.text14}</span>
      </div>
    </div>
  )
}

Review1.defaultProps = {
  text7: 'Emotional Health',
  text3: 'Fair',
  text9:
    'John expresses feelings of anxiety and stress related to his workload and family responsibilities. He reports difficulty in managing work-life balance and occasional feelings of overwhelm. He mentions having trouble sleeping at times due to racing thoughts and worries about the future.',
  text2: 'Good',
  rootClassName: '',
  text11:
    'Improve posture through regular stretching and strengthening exercises. Incorporate ergonomic adjustments in his workspace to alleviate back pain. Implement relaxation techniques such as deep breathing exercises or yoga to reduce muscle tension and headaches.',
  text13:
    'Engage in activities that promote emotional well-being, such as spending quality time with loved ones or pursuing hobbies. Practice self-compassion and challenge negative thought patterns through cognitive-behavioral techniques. Explore relaxation techniques or mindfulness practices to cultivate a sense of calm and inner peace.',
  heading: 'Your Review',
  text1: 'Excellent',
  heading2: "Patient's current condition",
  text4: 'Poor',
  text14:
    'Encourage John to schedule regular breaks throughout the day to stretch and move around, especially during long periods of sitting. Provide resources or referrals for stress management workshops or support groups in his community. Suggest keeping a daily journal to track mood fluctuations, stress triggers, and progress in implementing self-care strategies. Recommend discussing his concerns with his primary care physician to rule out any underlying medical conditions contributing to his symptoms.',
  heading1: 'THANKS FOR JOINING!',
  heading3: 'Improvements needed',
  text6: 'Mental Health',
  heading4: 'Additional Recommendations',
  text8:
    'John reports experiencing mild back pain and stiffness, particularly in the lower back region. He mentions that the discomfort tends to worsen after prolonged sitting or standing. He also reports occasional headaches, which he attributes to stress and poor posture.',
  text10:
    'John describes feeling emotionally drained and unmotivated lately. He reports a lack of interest in activities he used to enjoy and a general sense of dissatisfaction with life. He mentions experiencing mood swings and irritability, particularly during stressful situations.',
  text5: 'Physical Health',
  textareaPlaceholder3: 'placeholder',
  text12:
    'Develop stress management strategies, such as mindfulness meditation or journaling, to cope with work-related stressors. Establish healthy boundaries and prioritize self-care activities to prevent burnout. Consider seeking counseling or therapy to address underlying anxiety and improve coping skills.',
  text: 'Overall health status',
  button: 'Send',
}

Review1.propTypes = {
  text7: PropTypes.string,
  text3: PropTypes.string,
  text9: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  text13: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
  heading2: PropTypes.string,
  text4: PropTypes.string,
  text14: PropTypes.string,
  heading1: PropTypes.string,
  heading3: PropTypes.string,
  text6: PropTypes.string,
  heading4: PropTypes.string,
  text8: PropTypes.string,
  text10: PropTypes.string,
  text5: PropTypes.string,
  textareaPlaceholder3: PropTypes.string,
  text12: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
}

export default Review1
