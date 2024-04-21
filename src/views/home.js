import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import HomeCategories from '../components/home-categories'
import CommunityPost1 from '../components/community-post-1'
import CommunityPost2 from '../components/community-post-2'
import CommunityPost3 from '../components/community-post-3'
import PostComp from '../components/post-comp'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>WIE hackathon</title>
        <meta property="og:title" content="WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-container1"></div>
      <div className="home-container2">
        <HomeCategories rootClassName="home-categories-root-class-name"></HomeCategories>
        <div className="home-container3">
          <CommunityPost1 rootClassName="community-post1-root-class-name"></CommunityPost1>
          <CommunityPost2 rootClassName="community-post2-root-class-name"></CommunityPost2>
          <CommunityPost3 rootClassName="community-post3-root-class-name"></CommunityPost3>
        </div>
        <PostComp rootClassName="post-comp-root-class-name"></PostComp>
      </div>
      <Footer1 rootClassName="footer1-root-class-name"></Footer1>
    </div>
  )
}

export default Home
