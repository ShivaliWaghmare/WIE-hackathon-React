import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <span className="footer-text">
        <span className="footer-text01"> Vitality</span>
        <span className="footer-text02">Roots</span>
      </span>
      <div className="footer-container1">
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text03">
              <span className="">About us</span>
            </span>
            <span className="footer-text05">
              <span className="">Resources</span>
            </span>
            <span className="footer-text07">
              <span className="">Social</span>
            </span>
          </div>
          <span className="footer-text09">
            <span className="footer-text10">2024 Vitality</span>
            <span className="footer-text11">Roots</span>
            <span className="">, All right reserved</span>
          </span>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  ellipse2Alt: 'Ellipse2114',
  text2: 'Get Help',
  text: 'Email Address',
  rootClassName: '',
  rectangle1Alt: 'Rectangle112',
  rectangle4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/24f3202f-9e19-46ca-9cef-9d18d824e6a2/c6e0910d-7ce0-4687-9506-088f4e73f627?org_if_sml=1183&force_format=original',
  text1: 'Sign up',
  rectangle1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/24f3202f-9e19-46ca-9cef-9d18d824e6a2/cf0f0a08-e075-491d-909a-74c2621be601?org_if_sml=11671&force_format=original',
  rectangle2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/24f3202f-9e19-46ca-9cef-9d18d824e6a2/5704031a-9fb5-4bbf-90a8-8d57b1a1628b?org_if_sml=1219&force_format=original',
  line2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/24f3202f-9e19-46ca-9cef-9d18d824e6a2/891bfb57-c78d-449c-aba0-9d2a2eedfe24?org_if_sml=1153&force_format=original',
  rectangle5Alt: 'Rectangle5229',
  ellipse1Alt: 'Ellipse1113',
  ellipse3Alt: 'Ellipse3215',
  line1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/24f3202f-9e19-46ca-9cef-9d18d824e6a2/654feab3-f06c-48a6-ae94-79943f2c0d65?org_if_sml=1180&force_format=original',
  ellipse1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/24f3202f-9e19-46ca-9cef-9d18d824e6a2/e3da7ac7-2b67-4126-80d0-f79f120da522?org_if_sml=1767&force_format=original',
  rectangle2Alt: 'Rectangle2220',
  rectangle3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/24f3202f-9e19-46ca-9cef-9d18d824e6a2/c4529700-98f3-46b0-a682-a7af68d1f4fc?org_if_sml=1223&force_format=original',
  rectangle5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/24f3202f-9e19-46ca-9cef-9d18d824e6a2/f21c1385-1f83-42bd-adb8-d2a3eaaa3280?org_if_sml=1187&force_format=original',
  rectangle3Alt: 'Rectangle3221',
  rectangle4Alt: 'Rectangle4222',
  line1Alt: 'Line116',
  ellipse3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/24f3202f-9e19-46ca-9cef-9d18d824e6a2/0bc2d6dd-51f8-4cdd-a6bd-d453f4898f78?org_if_sml=1806&force_format=original',
  line2Alt: 'Line2227',
  ellipse2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/24f3202f-9e19-46ca-9cef-9d18d824e6a2/b88fd0d2-b07b-4166-a0b2-ffc994fc0e56?org_if_sml=1769&force_format=original',
}

Footer.propTypes = {
  ellipse2Alt: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  rectangle1Alt: PropTypes.string,
  rectangle4Src: PropTypes.string,
  text1: PropTypes.string,
  rectangle1Src: PropTypes.string,
  rectangle2Src: PropTypes.string,
  line2Src: PropTypes.string,
  rectangle5Alt: PropTypes.string,
  ellipse1Alt: PropTypes.string,
  ellipse3Alt: PropTypes.string,
  line1Src: PropTypes.string,
  ellipse1Src: PropTypes.string,
  rectangle2Alt: PropTypes.string,
  rectangle3Src: PropTypes.string,
  rectangle5Src: PropTypes.string,
  rectangle3Alt: PropTypes.string,
  rectangle4Alt: PropTypes.string,
  line1Alt: PropTypes.string,
  ellipse3Src: PropTypes.string,
  line2Alt: PropTypes.string,
  ellipse2Src: PropTypes.string,
}

export default Footer
