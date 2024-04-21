import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './profile-comp.css'

const ProfileComp = (props) => {
  return (
    <div className={`profile-comp-container ${props.rootClassName} `}>
      <div className="profile-comp-container01">
        <Link to="/followers" className="profile-comp-navlink">
          <div className="profile-comp-feature-card">
            <h2 className="profile-comp-text">48</h2>
            <h2 className="profile-comp-text01">Followers</h2>
          </div>
        </Link>
        <Link to="/chat-room" className="profile-comp-navlink1">
          <div className="profile-comp-feature-card1">
            <h2 className="profile-comp-text02">11</h2>
            <h2 className="profile-comp-text03">Chats</h2>
          </div>
        </Link>
      </div>
      <h1 className="profile-comp-text04">{props.heading}</h1>
      <div className="profile-comp-container02">
        <div className="profile-comp-container03">
          <div className="profile-comp-container04">
            <div className="profile-comp-container05">
              <div className="profile-comp-container06">
                <span className="profile-comp-text05">{props.text11}</span>
              </div>
            </div>
          </div>
          <div className="profile-comp-container07">
            <div className="profile-comp-container08">
              <div className="profile-comp-container09">
                <span className="profile-comp-text06">{props.text62}</span>
              </div>
            </div>
          </div>
          <div className="profile-comp-container10">
            <div className="profile-comp-container11">
              <div className="profile-comp-container12">
                <span className="profile-comp-text07">{props.text612}</span>
              </div>
            </div>
          </div>
          <div className="profile-comp-container13">
            <div className="profile-comp-container14">
              <div className="profile-comp-container15">
                <span className="profile-comp-text08">{props.text6112}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-comp-container16">
          <input
            type="text"
            placeholder="Your name"
            className="profile-comp-textinput input"
          />
          <input
            type="text"
            placeholder="Not provided"
            className="profile-comp-textinput1 input"
          />
          <input
            type="text"
            placeholder="You location"
            className="profile-comp-textinput2 input"
          />
          <input
            type="text"
            placeholder="Tell us about yourself(interets, experience, etc.)"
            className="profile-comp-textinput3 input"
          />
        </div>
        <div className="profile-comp-container17">
          <button type="button" className="profile-comp-button button">
            {props.button2}
          </button>
          <button type="button" className="profile-comp-button1 button">
            {props.button26}
          </button>
          <button type="button" className="profile-comp-button2 button">
            {props.button25}
          </button>
          <button type="button" className="profile-comp-button3 button">
            {props.button24}
          </button>
        </div>
      </div>
      <h1 className="profile-comp-text09">{props.heading2}</h1>
      <div className="profile-comp-container18">
        <div className="profile-comp-container19">
          <div className="profile-comp-container20">
            <div className="profile-comp-container21">
              <div className="profile-comp-container22">
                <span className="profile-comp-text10">{props.text111}</span>
              </div>
            </div>
          </div>
          <div className="profile-comp-container23">
            <div className="profile-comp-container24">
              <div className="profile-comp-container25">
                <span className="profile-comp-text11">{props.text621}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-comp-container26">
          <input
            type="text"
            placeholder="Add a workplace"
            className="profile-comp-textinput4 input"
          />
          <input
            type="text"
            placeholder="Add a school"
            className="profile-comp-textinput5 input"
          />
        </div>
        <div className="profile-comp-container27">
          <button type="button" className="profile-comp-button4 button">
            {props.button27}
          </button>
          <button type="button" className="profile-comp-button5 button">
            {props.button261}
          </button>
        </div>
      </div>
      <div className="profile-comp-container28">
        <div className="profile-comp-container29"></div>
      </div>
    </div>
  )
}

ProfileComp.defaultProps = {
  text621: 'Education',
  textinputPlaceholder131: 'placeholder',
  button11: 'Edit',
  text61111122: 'Twitter',
  button: 'Edit',
  button1111111: 'Edit',
  text6111114: 'LinkedIn',
  button212: 'Button',
  button2112: 'Edit',
  button25: 'Edit',
  button11111: 'Edit',
  text11: 'Name',
  button24: 'Edit',
  text6111113: 'LinkedIn',
  text6111111: 'Name',
  button111111: 'Edit',
  text611112: 'Github',
  textinputPlaceholder: 'placeholder',
  text612: 'Location',
  text: 'Name',
  text61111123: 'Twitter',
  text9: 'Name',
  text6113: 'Summary',
  textinputPlaceholder15: 'placeholder',
  textinputPlaceholder161: 'placeholder',
  text61111111: 'Name',
  heading2: 'Experience',
  button211: 'Edit',
  heading: 'Account',
  textinputPlaceholder11: 'placeholder',
  button111: 'Edit',
  textinputPlaceholder16: 'placeholder',
  heading1: 'Heading',
  button2: 'Edit',
  button1111: 'Edit',
  text8: 'Name',
  text61111: 'Github',
  text611111221: 'Twitter',
  text3: 'Text',
  button1111112111: 'Edit',
  text61: 'Location',
  text63: 'Gender',
  textinputPlaceholder151: 'placeholder',
  text4: 'Text',
  button21: 'Button',
  text61111121: 'Name',
  text6112: 'Summary',
  text1: 'Text',
  textinputPlaceholder1: 'placeholder',
  text61112: 'Website',
  button23: 'Edit',
  text6111121: 'Github',
  textinputPlaceholder141: 'placeholder',
  text111: 'Work',
  button1: 'Edit',
  textinputPlaceholder17: 'placeholder',
  text611121: 'Website',
  button11111111: 'Edit',
  textinputPlaceholder111: 'placeholder',
  button26: 'Edit',
  text62: 'Gender',
  button251: 'Edit',
  textinputPlaceholder121: 'placeholder',
  text61121: 'Summary',
  text10: 'Name',
  text5: 'Text',
  textinputPlaceholder14: 'placeholder',
  button261: 'Edit',
  text6: 'Gender',
  button241: 'Button',
  button27: 'Edit',
  text6111112: 'Twitter',
  textinputPlaceholder13: 'placeholder',
  button111111211: 'Edit',
  button231: 'Button',
  textinputPlaceholder171: 'placeholder',
  text611111: 'LinkedIn',
  text61111131: 'LinkedIn',
  button11111121: 'Edit',
  text7: 'Name',
  text611: 'Summary',
  text12: 'Name',
  text613: 'Location',
  text2: 'Text',
  text6111: 'Website',
  text611111211: 'Name',
  text6121: 'Skills',
  text61113: 'Website',
  button22: 'Edit',
  text611113: 'Github',
  button221: 'Button',
  text51: 'Text',
  textinputPlaceholder12: 'placeholder',
  button1111112: 'Edit',
  rootClassName: '',
  text6111112111: 'Name',
  textinputPlaceholder18: 'placeholder',
  button2111: 'Button',
}

ProfileComp.propTypes = {
  text621: PropTypes.string,
  textinputPlaceholder131: PropTypes.string,
  button11: PropTypes.string,
  text61111122: PropTypes.string,
  button: PropTypes.string,
  button1111111: PropTypes.string,
  text6111114: PropTypes.string,
  button212: PropTypes.string,
  button2112: PropTypes.string,
  button25: PropTypes.string,
  button11111: PropTypes.string,
  text11: PropTypes.string,
  button24: PropTypes.string,
  text6111113: PropTypes.string,
  text6111111: PropTypes.string,
  button111111: PropTypes.string,
  text611112: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text612: PropTypes.string,
  text: PropTypes.string,
  text61111123: PropTypes.string,
  text9: PropTypes.string,
  text6113: PropTypes.string,
  textinputPlaceholder15: PropTypes.string,
  textinputPlaceholder161: PropTypes.string,
  text61111111: PropTypes.string,
  heading2: PropTypes.string,
  button211: PropTypes.string,
  heading: PropTypes.string,
  textinputPlaceholder11: PropTypes.string,
  button111: PropTypes.string,
  textinputPlaceholder16: PropTypes.string,
  heading1: PropTypes.string,
  button2: PropTypes.string,
  button1111: PropTypes.string,
  text8: PropTypes.string,
  text61111: PropTypes.string,
  text611111221: PropTypes.string,
  text3: PropTypes.string,
  button1111112111: PropTypes.string,
  text61: PropTypes.string,
  text63: PropTypes.string,
  textinputPlaceholder151: PropTypes.string,
  text4: PropTypes.string,
  button21: PropTypes.string,
  text61111121: PropTypes.string,
  text6112: PropTypes.string,
  text1: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  text61112: PropTypes.string,
  button23: PropTypes.string,
  text6111121: PropTypes.string,
  textinputPlaceholder141: PropTypes.string,
  text111: PropTypes.string,
  button1: PropTypes.string,
  textinputPlaceholder17: PropTypes.string,
  text611121: PropTypes.string,
  button11111111: PropTypes.string,
  textinputPlaceholder111: PropTypes.string,
  button26: PropTypes.string,
  text62: PropTypes.string,
  button251: PropTypes.string,
  textinputPlaceholder121: PropTypes.string,
  text61121: PropTypes.string,
  text10: PropTypes.string,
  text5: PropTypes.string,
  textinputPlaceholder14: PropTypes.string,
  button261: PropTypes.string,
  text6: PropTypes.string,
  button241: PropTypes.string,
  button27: PropTypes.string,
  text6111112: PropTypes.string,
  textinputPlaceholder13: PropTypes.string,
  button111111211: PropTypes.string,
  button231: PropTypes.string,
  textinputPlaceholder171: PropTypes.string,
  text611111: PropTypes.string,
  text61111131: PropTypes.string,
  button11111121: PropTypes.string,
  text7: PropTypes.string,
  text611: PropTypes.string,
  text12: PropTypes.string,
  text613: PropTypes.string,
  text2: PropTypes.string,
  text6111: PropTypes.string,
  text611111211: PropTypes.string,
  text6121: PropTypes.string,
  text61113: PropTypes.string,
  button22: PropTypes.string,
  text611113: PropTypes.string,
  button221: PropTypes.string,
  text51: PropTypes.string,
  textinputPlaceholder12: PropTypes.string,
  button1111112: PropTypes.string,
  rootClassName: PropTypes.string,
  text6111112111: PropTypes.string,
  textinputPlaceholder18: PropTypes.string,
  button2111: PropTypes.string,
}

export default ProfileComp
