import PropTypes from 'prop-types';
import React from 'react';

class Logo extends React.Component {
  render() {
    const alt = 'logo';
    const node = (
      <div className="title__logo">
        <img src={this.props.logo} alt={alt} />
      </div>
    );
    return node;
  }
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Logo;
