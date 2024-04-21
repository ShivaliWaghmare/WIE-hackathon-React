import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SearchBarMarketplace from '../components/search-bar-marketplace'
import ProductCard11 from '../components/product-card11'
import './store.css'

const Store = (props) => {
  return (
    <div className="store-container">
      <Helmet>
        <title>Store - WIE hackathon</title>
        <meta property="og:title" content="Store - WIE hackathon" />
        <meta property="og:description" content="Health Wensite" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="store-container01">
        <Link to="/sell-product" className="store-button button">
          <span className="store-text">
            <span className="store-text01">+Sell</span>
            <br></br>
          </span>
        </Link>
        <SearchBarMarketplace rootClassName="search-bar-marketplace-root-class-name1"></SearchBarMarketplace>
      </div>
      <div className="store-container02">
        <div className="store-container03">
          <div className="store-product-card">
            <div className="store-container04">
              <span className="store-text03">
                <span>Stethoscope</span>
                <br></br>
                <br></br>
              </span>
              <span className="store-text07">
                Medical equipments for operation rooms
              </span>
              <span className="store-text08">Location</span>
            </div>
            <img
              alt="image"
              src="https://i.pinimg.com/736x/3e/ed/24/3eed24795a8ca14bfa6d531908419ae3.jpg"
              className="store-image"
            />
          </div>
          <div className="store-product-card1">
            <div className="store-container05">
              <span className="store-text09">Crutches</span>
              <span className="store-text10">
                Medical equipments for operation rooms
              </span>
              <span className="store-text11">Location</span>
            </div>
            <img
              alt="image"
              src="https://i.pinimg.com/736x/3e/ed/24/3eed24795a8ca14bfa6d531908419ae3.jpg"
              className="store-image1"
            />
          </div>
          <ProductCard11 rootClassName="product-card11-root-class-name4"></ProductCard11>
        </div>
        <div className="store-container06">
          <div className="store-product-card2">
            <div className="store-container07">
              <span className="store-text12">Surgical clothes</span>
              <span className="store-text13">
                Medical equipments for operation rooms
              </span>
              <span className="store-text14">Location</span>
            </div>
            <img
              alt="image"
              src="https://i.pinimg.com/736x/3e/ed/24/3eed24795a8ca14bfa6d531908419ae3.jpg"
              className="store-image2"
            />
          </div>
          <div className="store-product-card3">
            <div className="store-container08">
              <span className="store-text15">Ventilators</span>
              <span className="store-text16">
                Medical equipments for operation rooms
              </span>
              <span className="store-text17">Location</span>
            </div>
            <img
              alt="image"
              src="https://i.pinimg.com/736x/3e/ed/24/3eed24795a8ca14bfa6d531908419ae3.jpg"
              className="store-image3"
            />
          </div>
          <div className="store-product-card4">
            <div className="store-container09">
              <span className="store-text18">Laser equipment</span>
              <span className="store-text19">
                Medical equipments for operation rooms
              </span>
              <span className="store-text20">Location</span>
            </div>
            <img
              alt="image"
              src="https://i.pinimg.com/736x/3e/ed/24/3eed24795a8ca14bfa6d531908419ae3.jpg"
              className="store-image4"
            />
          </div>
        </div>
        <div className="store-container10">
          <div className="store-product-card5">
            <div className="store-container11">
              <span className="store-text21">Patient monitor</span>
              <span className="store-text22">
                Medical equipments for operation rooms
              </span>
              <span className="store-text23">Location</span>
            </div>
            <img
              alt="image"
              src="https://i.pinimg.com/736x/3e/ed/24/3eed24795a8ca14bfa6d531908419ae3.jpg"
              className="store-image5"
            />
          </div>
          <div className="store-product-card6">
            <div className="store-container12">
              <span className="store-text24">Syringes</span>
              <span className="store-text25">
                Medical equipments for operation rooms
              </span>
              <span className="store-text26">Location</span>
            </div>
            <img
              alt="image"
              src="https://i.pinimg.com/736x/3e/ed/24/3eed24795a8ca14bfa6d531908419ae3.jpg"
              className="store-image6"
            />
          </div>
          <div className="store-product-card7">
            <div className="store-container13">
              <span className="store-text27">ECG machines</span>
              <span className="store-text28">
                Medical equipments for operation rooms
              </span>
              <span className="store-text29">Location</span>
            </div>
            <img
              alt="image"
              src="https://i.pinimg.com/736x/3e/ed/24/3eed24795a8ca14bfa6d531908419ae3.jpg"
              className="store-image7"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store
