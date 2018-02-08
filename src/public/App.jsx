import React from 'react';
import Footer from './components/Footer/Footer';
import Body from './containers/Body/Body';

class App extends React.Component {
  render() {
    const html = (
      <React.Fragment>
        <Body />
        <Footer mailAddr="lkh5510@gmail.com" blogUrl="http://sw-warehouse.xyz" />
      </React.Fragment>
    );

    return html;
  }
}

export default App;
