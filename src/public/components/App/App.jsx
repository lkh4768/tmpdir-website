import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

import C from '../../utils/constants';

class App extends React.Component {
  render() {
    const ele = (
      <React.Fragment>
        <Body shareList={C.SHARE_LIST} />
        <Footer labels={C.LABELS} links={C.LINKS} />
      </React.Fragment>
    );
    return ele;
  }
}

export default App;
