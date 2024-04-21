import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import ChatroomSearchBar from './chatroom-search-bar'
import ChatRoom2 from './chat-room-2'
import './chatroom-sidebar.css'

const ChatroomSidebar = (props) => {
  return (
    <div className={`chatroom-sidebar-container ${props.rootClassName} `}>
      <h1 className="chatroom-sidebar-text">
        <span className="chatroom-sidebar-text1">Chat</span>
        <span className="chatroom-sidebar-text2">Room</span>
      </h1>
      <ChatroomSearchBar
        rootClassName="chatroom-search-bar-root-class-name"
        className=""
      ></ChatroomSearchBar>
      <ChatRoom2
        rootClassName="chat-room2-root-class-name"
        className=""
      ></ChatRoom2>
      <ChatRoom2
        rootClassName="chat-room2-root-class-name1"
        className=""
      ></ChatRoom2>
      <ChatRoom2
        rootClassName="chat-room2-root-class-name2"
        className=""
      ></ChatRoom2>
      <Link to="/profile" className="chatroom-sidebar-navlink">
        <div className="chatroom-sidebar-container1">
          <span className="chatroom-sidebar-text3">
            <span className="">User profile</span>
            <br className=""></br>
          </span>
          <div className="chatroom-sidebar-container2">
            <span className="chatroom-sidebar-text6">{props.text}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

ChatroomSidebar.defaultProps = {
  text: 'Settings',
  rootClassName: '',
}

ChatroomSidebar.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ChatroomSidebar
