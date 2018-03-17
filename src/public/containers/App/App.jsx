import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

import Var from '../../utils/variables';

class App extends React.Component {
  render() {
    const ele = (
      <React.Fragment>
        <Body appInfo={Var.APP_INFO} shareList={Var.SHARE_LIST} />
        <Footer labels={Var.LABELS} links={Var.LINKS} />
      </React.Fragment>
    );
    return ele;
  }
}

export default App;
