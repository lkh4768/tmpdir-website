import PropTypes from 'prop-types';
import React from 'react';

class Label extends React.Component {
  render() {
    const ele = (
      <span className={Label.CLASS_NAME}>
        {this.props.icon}
        <span>
          {this.props.text}
        </span>
      </span>
    );
    return ele;
  }
}

Label.CLASS_NAME = 'footer__label';

Label.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Label;
