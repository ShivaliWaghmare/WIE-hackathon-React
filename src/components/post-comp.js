import React from 'react'

import PropTypes from 'prop-types'

import './post-comp.css'

const PostComp = (props) => {
  return (
    <div className={`post-comp-container ${props.rootClassName} `}>
      <h1 className="post-comp-text">{props.heading}</h1>
      <textarea
        placeholder="Say something......"
        className="post-comp-textarea textarea"
      ></textarea>
      <button type="button" className="post-comp-button button">
        {props.button}
      </button>
    </div>
  )
}

PostComp.defaultProps = {
  heading: 'Write a post',
  textareaPlaceholder: 'placeholder',
  rootClassName: '',
  button: 'Post',
}

PostComp.propTypes = {
  heading: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PostComp
