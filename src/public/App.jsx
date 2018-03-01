import React from 'react';
import Body from './containers/Body/Body';
import Footer from './containers/Footer/Footer';
import FooterLabelEntity from './entities/Label';
import FooterLinkEntity from './entities/Link';
import ShareEntity from './entities/Share';
import AppInfoEntity from './entities/AppInfo';
import LogoImg from './static/images/logo_72w.png';

class App extends React.Component {
  static makeAppInfo() {
    const tmpdir = {
      name: 'tmpdir',
      url: 'https://tmpdir.sw-warehouse.xyz',
      logo: LogoImg,
      version: 'Beta',
    };
    return new AppInfoEntity(tmpdir.name, tmpdir.url, tmpdir.logo, tmpdir.version);
  }
  static makeShareList(appInfo) {
    return [
      new ShareEntity(
        ShareEntity.VENDER.facebook,
        appInfo.name,
        appInfo.url,
      ),
      new ShareEntity(
        ShareEntity.VENDER.twitter,
        appInfo.url,
        appInfo.name,
      ),
      new ShareEntity(
        ShareEntity.VENDER.googleplus,
        appInfo.url,
        appInfo.name,
      ),
      new ShareEntity(
        ShareEntity.VENDER.whatsapp,
        appInfo.url,
        appInfo.name,
      ),
      new ShareEntity(
        ShareEntity.VENDER.reddit,
        appInfo.url,
        appInfo.name,
      ),
    ];
  }
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
    const appInfo = App.makeAppInfo();
    const shareList = App.makeShareList(appInfo);
    const footerLabels = App.makeFooterLabels();
    const footerLinks = App.makeFooterLinks();
    const ele = (
      <React.Fragment>
        <Body appInfo={appInfo} shareList={shareList} />
        <Footer labels={footerLabels} links={footerLinks} />
      </React.Fragment>
    );
    return ele;
  }
}

export default App;
