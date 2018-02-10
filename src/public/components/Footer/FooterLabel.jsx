import PropTypes from 'prop-types';
import React from 'react';

class FooterLabel extends React.Component {
  render() {
    const ele = (
      <span>
        {this.props.icon}
        {this.props.text}
        {' '}
      </span>
    );
    return ele;
  }
}

FooterLabel.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default FooterLabel;
