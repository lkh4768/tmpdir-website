import React from 'react';
import BodyRow from '_components/BodyRow';
import ShareButton from '_components/ShareButton';
import Const from '_common/Const';

function Sns() {
  return (
    <BodyRow align={BodyRow.ALIGN.right}>
      {Const.SHARE_LIST.map(share => <ShareButton key={share.vender} share={share} />)}
    </BodyRow>
  );
}

export default Sns;
