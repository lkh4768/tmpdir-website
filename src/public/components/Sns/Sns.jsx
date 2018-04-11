import React from 'react';
import BodyRow from '../Body/BodyRow';
import ShareButton from '../ShareButton/ShareButton';
import C from '../../utils/constants';

class Sns extends React.Component {
  render() {
    const ele = (
      <BodyRow align={BodyRow.ALIGN.right}>
        {C.SHARE_LIST.map(share => <ShareButton key={share.vender} share={share} />)}
      </BodyRow>
    );
    return ele;
  }
}

export default Sns;
