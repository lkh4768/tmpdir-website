import React from 'react';
import Body from './containers/Body/Body';
import Footer from './containers/Footer/Footer';

import Var from './utils/variables';

class App extends React.Component {
  render() {
    const ele = (
      <React.Fragment>
        <Body appInfo={Var.APP_INFO} shareList={Var.SHARE_LIST} files={Var.FACK_FILES} />
        <Footer labels={Var.LABELS} links={Var.LINKS} />
      </React.Fragment>
    );
    return ele;
  }
}

export default App;
