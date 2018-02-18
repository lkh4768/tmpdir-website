import React from 'react';
import LogoImg from '../../static/images/logo_72w.png';

class Logo extends React.Component {
  render() {
    const node = (
      <div className="title__logo">
        <img src={LogoImg} alt="logo" />
      </div>
    );
    return node;
  }
}

export default Logo;
