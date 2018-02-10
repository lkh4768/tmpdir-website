import React from 'react';
import Footer from './components/Footer/Footer';
import Body from './containers/Body/Body';

class App extends React.Component {
  render() {
    const ownarEmail = 'lkh5510@gmail.com';
    const copyright = {
      icon: <i className="fa fa-copyright" />,
      text: '2017 Kihyeon Lee.',
    };
    const email = {
      title: 'Mail: ',
      text: ownarEmail,
      url: ['mailto:', ownarEmail].join(''),
    };
    const blog = {
      title: 'Blog: ',
      text: 'http://sw-warehouse.xyz',
      url: 'http://sw-warehouse.xyz',
    };
    const ele = (
      <React.Fragment>
        <Body />
        <Footer labels={[copyright]} links={[email, blog]} />
      </React.Fragment>
    );

    return ele;
  }
}

export default App;
