import React from 'react';
import C from '../../utils/constants';

class Logo extends React.Component {
  render() {
    const alt = 'logo';
    const node = (
      <div className="title__logo">
        <img src={C.APP_INFO.logo} alt={alt} />
      </div>
    );
    return node;
  }
}

export default Logo;
