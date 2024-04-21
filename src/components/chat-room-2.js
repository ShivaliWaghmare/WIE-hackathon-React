import React from 'react'

import PropTypes from 'prop-types'

import './chat-room-2.css'

const ChatRoom2 = (props) => {
  return (
    <div className={`chat-room-2-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="chat-room-2-icon">
        <path
          d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
          className=""
        ></path>
      </svg>
      <div className="chat-room-2-container1">
        <span className="chat-room-2-text">{props.text1}</span>
        <div className="chat-room-2-container2">
          <span className="chat-room-2-text1">{props.text2}</span>
        </div>
      </div>
    </div>
  )
}

ChatRoom2.defaultProps = {
  text1: 'UserName',
  rootClassName: '',
  text: 'Username',
  text2: 'Message',
}

ChatRoom2.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default ChatRoom2
