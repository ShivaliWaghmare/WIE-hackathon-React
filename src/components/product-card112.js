import React from 'react'

import PropTypes from 'prop-types'

import './product-card112.css'

const ProductCard112 = (props) => {
  return (
    <div className={`product-card112-product-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card112-image"
      />
      <span className="product-card112-text">{props.text}</span>
      <span className="product-card112-text1">{props.text1}</span>
      <span className="product-card112-text2">{props.text2}</span>
      <span className="product-card112-text3">{props.text3}</span>
    </div>
  )
}

ProductCard112.defaultProps = {
  text3: 'Baner, Pune, Maharashtra',
  text1: '₹ 750',
  text2: 'Copper Chess Wooden Board Premium',
  imageAlt1: 'image',
  text: 'TODAY',
  imageSrc:
    'https://images.unsplash.com/photo-1573141335932-9b22c45aa2df?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDcxfHxjaGVzc3xlbnwwfHx8fDE3MTIxNzE2NDJ8MA&ixlib=rb-4.0.3&w=400',
  rootClassName: '',
  imageAlt: 'image',
  imageSrc1:
    'https://images.unsplash.com/photo-1582925250462-d012a22ef727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxjaGVzc3xlbnwwfHx8fDE3MTIxNzE1ODZ8MA&ixlib=rb-4.0.3&q=80&h=400',
}

ProductCard112.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  imageAlt1: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default ProductCard112
