import React from 'react';
import Footer from './components/Footer/Footer.jsx';
import Body from './containers/Body/Body.jsx';

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
