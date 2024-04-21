import React from 'react'

import { Helmet } from 'react-helmet'

import ProfileHeader from '../components/profile-header'
import Sidebar from '../components/sidebar'
import ProfileComp from '../components/profile-comp'
import Healthgoals1 from '../components/healthgoals1'
import Healthgoals2 from '../components/healthgoals2'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - WIE hackathon</title>
        <meta property="og:title" content="Profile - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <ProfileHeader rootClassName="profile-header-root-class-name3"></ProfileHeader>
      <div className="profile-container01">
        <Sidebar rootClassName="sidebar-root-class-name"></Sidebar>
        <div className="profile-container02">
          <div className="profile-container03">
            <div className="profile-container04">
              <div className="profile-container05">
                <div className="profile-container06">
                  <div className="profile-container07">
                    <span className="profile-text">Dashboard</span>
                  </div>
                  <ProfileComp rootClassName="profile-comp-root-class-name"></ProfileComp>
                </div>
              </div>
              <div id="healthcare" className="profile-container08">
                <Healthgoals1 rootClassName="healthgoals1-root-class-name"></Healthgoals1>
                <Healthgoals2 rootClassName="healthgoals2-root-class-name"></Healthgoals2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-container09">
        <span className="profile-text01">
          <span className="profile-text02"> Vitality</span>
          <span className="profile-text03">Roots</span>
        </span>
        <div className="profile-container10">
          <div className="profile-container11">
            <div className="profile-container12">
              <span className="profile-text04">
                <span>About us</span>
              </span>
              <span className="profile-text06">
                <span>Resources</span>
              </span>
              <span className="profile-text08">
                <span>Social</span>
              </span>
            </div>
            <span className="profile-text10">
              <span className="profile-text11">2024 Vitality</span>
              <span className="profile-text12">Roots</span>
              <span>, All right reserved</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
