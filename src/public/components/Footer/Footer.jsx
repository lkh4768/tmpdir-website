import PropTypes from 'prop-types';
import React from 'react';
import Copyright from './Copyright';
import Mail from './Mail';
import Blog from './Blog';

class Footer extends React.Component {
  render() {
    const node = (
      <React.Fragment>
        <Copyright />
        <Mail mailAddr={this.props.mailAddr} />
        <Blog blogUrl={this.props.blogUrl} />
      </React.Fragment>
    );
    return node;
  }
}

Footer.propTypes = {
  mailAddr: PropTypes.string.isRequired,
  blogUrl: PropTypes.string.isRequired,
};

export default Footer;
