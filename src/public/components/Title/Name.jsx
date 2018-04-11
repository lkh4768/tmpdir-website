import React from 'react';
import C from '../../utils/constants';

class Name extends React.Component {
  render() {
    const node = (
      <div className="title__name" href="/">
        {C.APP_INFO.name}
      </div>
    );
    return node;
  }
}

export default Name;
