import React from 'react';
import BodyRow from '../Body/BodyRow';
import ShareButton from '../ShareButton/ShareButton';
import C from '../../utils/constants';

function Sns() {
  return (
    <BodyRow align={BodyRow.ALIGN.right}>
      {C.SHARE_LIST.map(share => <ShareButton key={share.vender} share={share} />)}
    </BodyRow>
  );
}

export default Sns;
