import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.Component {
  render() {
    const ele = (
      <span>
        {this.props.title}
        <a href={this.props.url} target="__blank">
          {this.props.text}
        </a>
        {' '}
      </span>
    );

    return ele;
  }
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
