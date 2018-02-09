import React from 'react';
import PropTypes from 'prop-types';

class Mail extends React.Component {
  render() {
    const ele = (
      <span>
        {this.props.title}
        <a href={this.props.mailToSchema + this.props.mailAddr}>
          {this.props.mailAddr}
        </a>
      </span>
    );
    return ele;
  }
}

Mail.defaultProps = {
  title: 'Mail',
  mailToSchema: 'mailto:',
};

Mail.propTypes = {
  title: PropTypes.string,
  mailToSchema: PropTypes.string,
  mailAddr: PropTypes.string.isRequired,
};

export default Mail;
