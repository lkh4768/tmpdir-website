import React from 'react';
import Body from '_components/Body';
import Footer from '_components/Footer';
import ShareList from '_components/ShareList';
import C from '_utils/constants';
import Logo from './components/Logo';
import ExpireTimeContainer from './containers/ExpireTime';

function Download() {
  return (
    <React.Fragment>
      <Body>
        <Logo />
        <ExpireTimeContainer />
        <ShareList sharedUrl={window.location.href} />
      </Body>
      <Footer labels={C.LABELS} links={C.LINKS} />
    </React.Fragment>
  );
}

export default Download;
