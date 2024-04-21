import React from 'react'

import PropTypes from 'prop-types'

import './product-card116.css'

const ProductCard116 = (props) => {
  return (
    <div className={`product-card116-product-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card116-image"
      />
      <div className="product-card116-container"></div>
      <span className="product-card116-text">{props.text}</span>
      <span className="product-card116-text1">{props.text1}</span>
      <span className="product-card116-text2">{props.text2}</span>
      <span className="product-card116-text3">{props.text3}</span>
    </div>
  )
}

ProductCard116.defaultProps = {
  text: 'TODAY',
  imageSrc1:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&h=400',
  text2: 'PS5 Gaming Controller',
  imageAlt2: 'image',
  imageAlt: 'image',
  imageAlt4: 'image',
  imageAlt1: 'image',
  rootClassName: '',
  text1: '₹ 1,500',
  imageSrc4:
    'https://images.unsplash.com/photo-1618836958889-76f62f3724cb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fHBsYXklMjBzdGF0aW9ufGVufDB8fHx8MTcxMjE3MjIzM3ww&ixlib=rb-4.0.3&h=400',
  imageAlt5: 'image',
  imageSrc3:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&q=80&w=200',
  imageSrc5:
    'https://images.unsplash.com/photo-1618836958889-76f62f3724cb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fHBsYXklMjBzdGF0aW9ufGVufDB8fHx8MTcxMjE3MjIzM3ww&ixlib=rb-4.0.3&h=400',
  imageSrc:
    'https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHBsYXklMjBzdGF0aW9ufGVufDB8fHx8MTcxMjE3MjIzM3ww&ixlib=rb-4.0.3&w=400',
  imageSrc2:
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx3YXRjaHxlbnwwfHx8fDE3MTIxNzE3ODR8MA&ixlib=rb-4.0.3&h=400',
  text3: 'Koregaon Park, Pune',
  imageAlt3: 'image',
}

ProductCard116.propTypes = {
  text: PropTypes.string,
  imageSrc1: PropTypes.string,
  text2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc2: PropTypes.string,
  text3: PropTypes.string,
  imageAlt3: PropTypes.string,
}

export default ProductCard116
