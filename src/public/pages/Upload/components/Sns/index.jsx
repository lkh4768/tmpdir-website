import React from 'react';
import BodyRow from '_components/BodyRow';
import ShareButton from '_components/ShareButton';
import C from '_utils/constants';

function Sns() {
  return (
    <BodyRow align={BodyRow.ALIGN.right}>
      {C.SHARE_LIST.map(share => <ShareButton key={share.vender} share={share} />)}
    </BodyRow>
  );
}

export default Sns;
