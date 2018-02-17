import React from 'react';
import Body from './containers/Body/Body';
import Footer from './containers/Footer/Footer';
import FooterLabelEntity from './entities/Footer/Label';
import FooterLinkEntity from './entities/Footer/Link';

class App extends React.Component {
  static makeFooterLabels() {
    return [
      new FooterLabelEntity('2017 Kihyeon Lee.', <i className="fa fa-copyright" />),
    ];
  }
  static makeFooterLinks() {
    const emailAddr = 'lkh5510@gmail.com';
    const blogUrl = 'http://sw-warehouse.xyz';
    return [
      new FooterLinkEntity('Mail: ', emailAddr, ['mailto:', emailAddr].join('')),
      new FooterLinkEntity('Blog: ', blogUrl, blogUrl),
    ];
  }
  render() {
    const footerLabels = App.makeFooterLabels();
    const footerLinks = App.makeFooterLinks();
    const ele = (
      <React.Fragment>
        <Body />
        <Footer labels={footerLabels} links={footerLinks} />
      </React.Fragment>
    );
    return ele;
  }
}

export default App;
