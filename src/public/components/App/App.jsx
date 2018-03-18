import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

import Constants from '../../utils/constants';

class App extends React.Component {
  render() {
    const ele = (
      <React.Fragment>
        <Body appInfo={Constants.APP_INFO} shareList={Constants.SHARE_LIST} />
        <Footer labels={Constants.LABELS} links={Constants.LINKS} />
      </React.Fragment>
    );
    return ele;
  }
}

export default App;
