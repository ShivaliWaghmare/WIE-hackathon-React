import React from 'react'

import PropTypes from 'prop-types'

import './product-card11.css'

const ProductCard11 = (props) => {
  return (
    <div className={`product-card11-product-card ${props.rootClassName} `}>
      <div className="product-card11-container">
        <span className="product-card11-text">{props.text1}</span>
        <span className="product-card11-text1">{props.text2}</span>
        <span className="product-card11-text2">{props.text4}</span>
      </div>
      <img
        alt={props.imageAlt2}
        src="https://i.pinimg.com/736x/3e/ed/24/3eed24795a8ca14bfa6d531908419ae3.jpg"
        className="product-card11-image"
      />
    </div>
  )
}

ProductCard11.defaultProps = {
  text3: 'Nigdi Pradhikaran, Pune',
  imageAlt2: 'image',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc:
    'https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxjaGV0YW4lMjBiaGFnYXQlMjBib29rfGVufDB8fHx8MTcxMjE2ODY1MHww&ixlib=rb-4.0.3&w=400',
  imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  text: 'TODAY',
  imageAlt1: 'image',
  text1: 'Stretchers',
  imageAlt: 'd',
  text2: 'Medical equipments for operation rooms',
  text4: 'Location',
}

ProductCard11.propTypes = {
  text3: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  imageAlt1: PropTypes.string,
  text1: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
}

export default ProductCard11
