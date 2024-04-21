import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './post-comp.css'; // Import the CSS file for PostComp

const PostComp = (props) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handlePost = () => {
    if (text.trim() !== '') {
      props.onPost(text);
      setText('');
    }
  };

  return (
    <div className={`post-comp-container ${props.rootClassName}`}>
      <h2 className="post-comp-heading" style={{ marginTop: '20px', marginLeft: '28px' }}>Write a post</h2> {/* Heading with margins added */}
      <textarea
        className="post-comp-textarea"
        placeholder="Write something..."
        value={text}
        onChange={handleChange}
        style={{ padding: '10px' }} // Padding added to the input box
      ></textarea>
      <button className="post-comp-button" onClick={handlePost}>
        Post
      </button>
    </div>
  );
};

PostComp.defaultProps = {
  rootClassName: '',
  onPost: () => {},
};

PostComp.propTypes = {
  rootClassName: PropTypes.string,
  onPost: PropTypes.func,
};

export default PostComp;
