import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import C from '../../utils/constants';

function App() {
  return (
    <React.Fragment>
      <Body shareList={C.SHARE_LIST} />
      <Footer labels={C.LABELS} links={C.LINKS} />
    </React.Fragment>
  );
}

export default App;
