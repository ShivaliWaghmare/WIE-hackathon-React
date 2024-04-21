import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ChatroomSearchBar from '../components/chatroom-search-bar'
import ChatRoom2 from '../components/chat-room-2'
import './followers.css'

const Followers = (props) => {
  return (
    <div className="followers-container">
      <Helmet>
        <title>followers - WIE hackathon</title>
        <meta property="og:title" content="followers - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <Header rootClassName="header-root-class-name6"></Header>
      <div className="followers-container1">
        <h1 className="followers-text">
          <span>Follo</span>
          <span className="followers-text2">wers</span>
        </h1>
        <ChatroomSearchBar rootClassName="chatroom-search-bar-root-class-name1"></ChatroomSearchBar>
        <ChatRoom2 rootClassName="chat-room2-root-class-name4"></ChatRoom2>
        <ChatRoom2 rootClassName="chat-room2-root-class-name5"></ChatRoom2>
        <ChatRoom2 rootClassName="chat-room2-root-class-name7"></ChatRoom2>
        <ChatRoom2 rootClassName="chat-room2-root-class-name13"></ChatRoom2>
        <ChatRoom2 rootClassName="chat-room2-root-class-name12"></ChatRoom2>
        <ChatRoom2 rootClassName="chat-room2-root-class-name11"></ChatRoom2>
        <ChatRoom2 rootClassName="chat-room2-root-class-name10"></ChatRoom2>
      </div>
    </div>
  )
}

export default Followers
