import React from 'react';
import C from '../../utils/constants';

class Version extends React.Component {
  render() {
    const ele = (
      <div className="title__version">
        {C.APP_INFO.version}
      </div>
    );
    return ele;
  }
}

export default Version;
