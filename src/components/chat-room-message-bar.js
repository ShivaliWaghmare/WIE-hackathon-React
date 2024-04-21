import React from 'react'

import PropTypes from 'prop-types'

import './chat-room-message-bar.css'

const ChatRoomMessageBar = (props) => {
  return (
    <div className={`chat-room-message-bar-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="chat-room-message-bar-icon">
        <path
          d="M512 746q-74 0-133-41t-85-107h436q-26 66-85 107t-133 41zM362 470q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19zM662 470q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="chat-room-message-bar-icon2">
        <path
          d="M884.608 441.301l-392.107 392.107c-41.685 41.685-96.256 62.507-150.955 62.507s-109.269-20.821-150.955-62.507-62.507-96.256-62.507-150.955 20.821-109.269 62.507-150.955l392.107-392.107c25.003-25.003 57.728-37.504 90.581-37.504s65.536 12.501 90.581 37.504 37.504 57.728 37.504 90.581-12.501 65.536-37.504 90.581l-392.533 392.107c-8.363 8.363-19.243 12.544-30.208 12.544s-21.845-4.181-30.208-12.501-12.501-19.2-12.501-30.208 4.181-21.845 12.501-30.208l362.24-361.813c16.683-16.64 16.683-43.648 0.043-60.331s-43.648-16.683-60.331-0.043l-362.24 361.813c-25.003 25.003-37.504 57.856-37.504 90.539s12.501 65.536 37.504 90.539 57.856 37.504 90.539 37.504 65.536-12.501 90.539-37.504l392.533-392.107c41.685-41.685 62.507-96.341 62.507-150.912s-20.864-109.269-62.507-150.912-96.341-62.507-150.912-62.507-109.269 20.864-150.912 62.507l-392.107 392.107c-58.325 58.325-87.509 134.869-87.509 211.285s29.184 152.96 87.509 211.285 134.869 87.509 211.285 87.509 152.96-29.184 211.285-87.509l392.107-392.107c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"
          className=""
        ></path>
      </svg>
      <input
        type="text"
        placeholder={props.textinputPlaceholder}
        className="chat-room-message-bar-textinput input"
      />
      <svg viewBox="0 0 1024 1024" className="chat-room-message-bar-icon4">
        <path
          d="M738 470h72q0 108-75 189t-181 97v140h-84v-140q-106-16-181-97t-75-189h72q0 94 67 155t159 61 159-61 67-155zM512 598q-52 0-90-38t-38-90v-256q0-52 38-90t90-38 90 38 38 90v256q0 52-38 90t-90 38z"
          className=""
        ></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="chat-room-message-bar-icon6">
        <path d="M86 896v-298l640-86-640-86v-298l896 384z" className=""></path>
      </svg>
    </div>
  )
}

ChatRoomMessageBar.defaultProps = {
  rootClassName: '',
  text: 'Text a Message',
  text1: 'Text',
  textinputPlaceholder: 'Type a message...',
  text2: 'Text',
}

ChatRoomMessageBar.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text2: PropTypes.string,
}

export default ChatRoomMessageBar
