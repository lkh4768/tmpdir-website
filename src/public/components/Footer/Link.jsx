import React from 'react';
import PropTypes from 'prop-types';

function Link({ title, url, text }) {
  return (
    <span>
      {title}
      <a href={url} target="__blank">
        {text}
      </a>
      {' '}
    </span>
  );
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
