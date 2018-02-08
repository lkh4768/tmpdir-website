import React from 'react';

class Mail extends React.Component {
  render() {
    const title = 'Mail';
    const mailToSchema = 'mailto:';
    const ele = (
      <span>
        {title}
        <a href={mailToSchema + this.props.mailAddr}>
          {this.props.mailAddr}
        </a>
      </span>
    );
    return ele;
  }
}

Mail.propTypes = {
  mailAddr: React.PropTypes.string.isRequired,
};

export default Mail;
