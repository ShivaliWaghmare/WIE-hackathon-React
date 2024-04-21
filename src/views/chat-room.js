 import React from 'react'

import { Helmet } from 'react-helmet'

import ChatHeader from '../components/chat-header'
import ChatroomSidebar from '../components/chatroom-sidebar'
import ChatRoomMessageBar from '../components/chat-room-message-bar'
import './chat-room.css'

const ChatRoom = (props) => {
  return (
    <div className="chat-room-container">
      <Helmet>
        <title>Chat-Room - WIE hackathon</title>
        <meta property="og:title" content="Chat-Room - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <ChatHeader rootClassName="chat-header-root-class-name"></ChatHeader>
      <div className="chat-room-container1">
        <ChatroomSidebar rootClassName="chatroom-sidebar-root-class-name"></ChatroomSidebar>
        <div className="chat-room-container2">
          <ChatRoomMessageBar rootClassName="chat-room-message-bar-root-class-name"></ChatRoomMessageBar>
        </div>
        <img
          alt="image"
          sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
          src="/external/untitled%20design%20(2)-1500w.webp"
          srcSet="external//untitled%20design%20(2)-1500w.webp 1200w, external/untitled%20design%20(2)-tablet.webp 800w, external/untitled%20design%20(2)-mobile.webp 480w"
          className="chat-room-image"
        />
      </div>
    </div>
  )
}

export default ChatRoom
