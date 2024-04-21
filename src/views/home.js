import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import HomeCategories from '../components/home-categories';
import CommunityPost1 from '../components/community-post-1';
import PostComp from '../components/post-comp';
import Footer1 from '../components/footer1';
import './home.css';

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  const handlePost = (text) => {
    // Add the new post to the array of posts
    setPosts([...posts, text]);
  };

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
          {/* Render each post from the posts array */}
          {posts.map((post, index) => (
            <CommunityPost1
              key={index}
              heading="New Post"
              text1={post} // Pass the post text as text1 prop
              rootClassName="community-post1-root-class-name"
            />
          ))}
        </div>
        {/* Pass the handlePost function to the PostComp component */}
        <PostComp
          rootClassName="post-comp-root-class-name"
          onPost={handlePost}
        />
      </div>
      <Footer1 rootClassName="footer1-root-class-name"></Footer1>
    </div>
  );
};

export default Home;
