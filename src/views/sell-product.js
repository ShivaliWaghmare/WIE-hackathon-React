import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './sell-product.css'

const SellProduct = (props) => {
  return (
    <div className="sell-product-container">
      <Helmet>
        <title>Sell-Product - WIE hackathon</title>
        <meta property="og:title" content="Sell-Product - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <div className="sell-product-container01">
        <Header rootClassName="header-root-class-name4"></Header>
        <div className="sell-product-container02">
          <h1 className="sell-product-text">POST YOUR AD</h1>
        </div>
        <div className="sell-product-hero">
          <span className="sell-product-text1">INCLUDE SOME DETAILS</span>
          <span className="sell-product-key-features">
            Include condition, features and reason for selling
          </span>
          <input
            type="text"
            placeholder
            className="sell-product-textinput input"
          />
          <span className="sell-product-important">*</span>
          <div className="sell-product-container03">
            <div className="sell-product-container04">
              <input
                type="text"
                placeholder
                className="sell-product-textinput1 input"
              />
              <span className="sell-product-key-features1">
                Mention the key features of your item
              </span>
            </div>
            <span className="sell-product-ad-title">Ad Title</span>
            <span className="sell-product-important1">*</span>
          </div>
          <div className="sell-product-feature-card"></div>
          <div className="sell-product-feature-card1"></div>
          <div className="sell-product-set-a-price">
            <input
              type="number"
              placeholder
              className="input sell-product-textinput2"
            />
            <span className="sell-product-ad-title1">Price</span>
            <span className="sell-product-important2">*</span>
          </div>
          <span className="sell-product-text2">Upload Photos</span>
          <span className="sell-product-text3">Set a Price</span>
          <span className="sell-product-ad-title2">Description</span>
          <div className="sell-product-feature-card2">
            <div className="sell-product-container05">
              <div className="sell-product-container06">
                <svg viewBox="0 0 1024 1024" className="sell-product-icon">
                  <path d="M810.667 853.333h-597.333c-70.571 0-128-57.429-128-128v-341.333c0-70.571 57.429-128 128-128h67.669l42.667-42.667c24.704-24.704 68.096-42.667 102.997-42.667h170.667c34.901 0 78.293 17.963 102.997 42.667l42.667 42.667h67.669c70.571 0 128 57.429 128 128v341.333c0 70.571-57.429 128-128 128zM213.333 341.333c-23.552 0-42.667 19.115-42.667 42.667v341.333c0 23.552 19.115 42.667 42.667 42.667h597.333c23.552 0 42.667-19.115 42.667-42.667v-341.333c0-23.552-19.115-42.667-42.667-42.667h-85.333c-11.349 0-22.187-4.48-30.165-12.501l-55.168-55.168c-8.576-8.576-30.507-17.664-42.667-17.664h-170.667c-12.16 0-34.091 9.088-42.667 17.664l-55.168 55.168c-7.979 8.021-18.816 12.501-30.165 12.501h-85.333z"></path>
                  <path d="M512 426.667c58.837 0 106.667 47.829 106.667 106.667s-47.829 106.667-106.667 106.667-106.667-47.829-106.667-106.667 47.829-106.667 106.667-106.667M512 384c-82.517 0-149.333 66.816-149.333 149.333 0 82.432 66.816 149.333 149.333 149.333s149.333-66.901 149.333-149.333c0-82.517-66.816-149.333-149.333-149.333z"></path>
                  <path d="M768 371.157c-30.677 0-55.467 24.832-55.467 55.509s24.789 55.424 55.467 55.424 55.467-24.747 55.467-55.424-24.789-55.509-55.467-55.509z"></path>
                </svg>
              </div>
              <div className="sell-product-container07">
                <svg viewBox="0 0 1024 1024" className="sell-product-icon04">
                  <path d="M810.667 853.333h-597.333c-70.571 0-128-57.429-128-128v-341.333c0-70.571 57.429-128 128-128h67.669l42.667-42.667c24.704-24.704 68.096-42.667 102.997-42.667h170.667c34.901 0 78.293 17.963 102.997 42.667l42.667 42.667h67.669c70.571 0 128 57.429 128 128v341.333c0 70.571-57.429 128-128 128zM213.333 341.333c-23.552 0-42.667 19.115-42.667 42.667v341.333c0 23.552 19.115 42.667 42.667 42.667h597.333c23.552 0 42.667-19.115 42.667-42.667v-341.333c0-23.552-19.115-42.667-42.667-42.667h-85.333c-11.349 0-22.187-4.48-30.165-12.501l-55.168-55.168c-8.576-8.576-30.507-17.664-42.667-17.664h-170.667c-12.16 0-34.091 9.088-42.667 17.664l-55.168 55.168c-7.979 8.021-18.816 12.501-30.165 12.501h-85.333z"></path>
                  <path d="M512 426.667c58.837 0 106.667 47.829 106.667 106.667s-47.829 106.667-106.667 106.667-106.667-47.829-106.667-106.667 47.829-106.667 106.667-106.667M512 384c-82.517 0-149.333 66.816-149.333 149.333 0 82.432 66.816 149.333 149.333 149.333s149.333-66.901 149.333-149.333c0-82.517-66.816-149.333-149.333-149.333z"></path>
                  <path d="M768 371.157c-30.677 0-55.467 24.832-55.467 55.509s24.789 55.424 55.467 55.424 55.467-24.747 55.467-55.424-24.789-55.509-55.467-55.509z"></path>
                </svg>
              </div>
            </div>
            <div className="sell-product-container08">
              <div className="sell-product-container09">
                <svg viewBox="0 0 1024 1024" className="sell-product-icon08">
                  <path d="M810.667 853.333h-597.333c-70.571 0-128-57.429-128-128v-341.333c0-70.571 57.429-128 128-128h67.669l42.667-42.667c24.704-24.704 68.096-42.667 102.997-42.667h170.667c34.901 0 78.293 17.963 102.997 42.667l42.667 42.667h67.669c70.571 0 128 57.429 128 128v341.333c0 70.571-57.429 128-128 128zM213.333 341.333c-23.552 0-42.667 19.115-42.667 42.667v341.333c0 23.552 19.115 42.667 42.667 42.667h597.333c23.552 0 42.667-19.115 42.667-42.667v-341.333c0-23.552-19.115-42.667-42.667-42.667h-85.333c-11.349 0-22.187-4.48-30.165-12.501l-55.168-55.168c-8.576-8.576-30.507-17.664-42.667-17.664h-170.667c-12.16 0-34.091 9.088-42.667 17.664l-55.168 55.168c-7.979 8.021-18.816 12.501-30.165 12.501h-85.333z"></path>
                  <path d="M512 426.667c58.837 0 106.667 47.829 106.667 106.667s-47.829 106.667-106.667 106.667-106.667-47.829-106.667-106.667 47.829-106.667 106.667-106.667M512 384c-82.517 0-149.333 66.816-149.333 149.333 0 82.432 66.816 149.333 149.333 149.333s149.333-66.901 149.333-149.333c0-82.517-66.816-149.333-149.333-149.333z"></path>
                  <path d="M768 371.157c-30.677 0-55.467 24.832-55.467 55.509s24.789 55.424 55.467 55.424 55.467-24.747 55.467-55.424-24.789-55.509-55.467-55.509z"></path>
                </svg>
              </div>
              <div className="sell-product-container10">
                <svg viewBox="0 0 1024 1024" className="sell-product-icon12">
                  <path d="M810.667 853.333h-597.333c-70.571 0-128-57.429-128-128v-341.333c0-70.571 57.429-128 128-128h67.669l42.667-42.667c24.704-24.704 68.096-42.667 102.997-42.667h170.667c34.901 0 78.293 17.963 102.997 42.667l42.667 42.667h67.669c70.571 0 128 57.429 128 128v341.333c0 70.571-57.429 128-128 128zM213.333 341.333c-23.552 0-42.667 19.115-42.667 42.667v341.333c0 23.552 19.115 42.667 42.667 42.667h597.333c23.552 0 42.667-19.115 42.667-42.667v-341.333c0-23.552-19.115-42.667-42.667-42.667h-85.333c-11.349 0-22.187-4.48-30.165-12.501l-55.168-55.168c-8.576-8.576-30.507-17.664-42.667-17.664h-170.667c-12.16 0-34.091 9.088-42.667 17.664l-55.168 55.168c-7.979 8.021-18.816 12.501-30.165 12.501h-85.333z"></path>
                  <path d="M512 426.667c58.837 0 106.667 47.829 106.667 106.667s-47.829 106.667-106.667 106.667-106.667-47.829-106.667-106.667 47.829-106.667 106.667-106.667M512 384c-82.517 0-149.333 66.816-149.333 149.333 0 82.432 66.816 149.333 149.333 149.333s149.333-66.901 149.333-149.333c0-82.517-66.816-149.333-149.333-149.333z"></path>
                  <path d="M768 371.157c-30.677 0-55.467 24.832-55.467 55.509s24.789 55.424 55.467 55.424 55.467-24.747 55.467-55.424-24.789-55.509-55.467-55.509z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="sell-product-feature-card3"></div>
          <button type="button" className="sell-product-button button">
            Post Ad
          </button>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
    </div>
  )
}

export default SellProduct
