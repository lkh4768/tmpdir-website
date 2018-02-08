import React from 'react';
import Copyright from './Copyright.jsx';
import Mail from './Mail.jsx';
import Blog from './Blog.jsx';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
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

export default Footer;
