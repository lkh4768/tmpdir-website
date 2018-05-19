import React from 'react';
import PropTypes from 'prop-types';
import ShareButton from '_components/ShareButton';
import ShareEntity from '_entities/Share';
import BodyRow from '_components/BodyRow';
import C from '_utils/constants';
import F from '_utils/func';

const propTypes = {
  sharedUrl: PropTypes.string.isRequired,
};

const SHARE_VENDERS = [
  ShareEntity.VENDER.facebook,
  ShareEntity.VENDER.twitter,
  ShareEntity.VENDER.googleplus,
  ShareEntity.VENDER.whatsapp,
  ShareEntity.VENDER.reddit,
];

const CLASS_NAME = {
  shareList: 'share-list',
};

const getShareList = shaerdUrl => SHARE_VENDERS.map(vender => new ShareEntity(vender, shaerdUrl, '', C.UPLOADED_FILE.SHARE_ICON_SIZE));

function ShareList({ sharedUrl }) {
  return (
    <BodyRow align={BodyRow.ALIGN.center}>
      <div
        role="button"
        tabIndex="0"
        onClick={e => e.stopPropagation()}
        onKeyPress={F.emptyFunc}
        className={CLASS_NAME.shareList}
      >
        {getShareList(sharedUrl).map(share => <ShareButton key={share.vender} share={share} />)}
      </div>
    </BodyRow>
  );
}

ShareList.propTypes = propTypes;

export default ShareList;
