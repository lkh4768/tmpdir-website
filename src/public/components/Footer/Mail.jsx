import React from 'react';

class Mail extends React.Component {
  render() {
    const node = (
      <span>
        {this.props.title}
        <a href={this.props.mailToSchema + this.props.mailAddr}>
          {this.props.mailAddr}
        </a>
      </span>
    );
    return node;
  }
}

Mail.propTypes = {
  title: React.PropTypes.string,
  mailToSchema: React.PropTypes.string,
  mailAddr: React.PropTypes.string.isRequired,
};

Mail.defaultProps = {
  title: 'Mail: ',
  mailToSchema: 'mailto:',
};

export default Mail;
