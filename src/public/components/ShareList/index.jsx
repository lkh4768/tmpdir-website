import React from 'react';
import PropTypes from 'prop-types';

import ShareButton from '_components/ShareButton';
import ShareEntity from '_entities/Share';
import BodyRow from '_components/BodyRow';
import Const from '_common/Const';
import Utils from '_common/Utils';

import styles from './style.scss';

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

const getShareList = shaerdUrl => SHARE_VENDERS.map(vender => new ShareEntity(vender, shaerdUrl, '', Const.UPLOADED_FILE.SHARE_ICON_SIZE));

function ShareList({ sharedUrl }) {
  return (
    <BodyRow align={BodyRow.ALIGN.CENTER}>
      <div
        role="button"
        tabIndex="0"
        onClick={e => e.stopPropagation()}
        onKeyPress={Utils.emptyFunc}
        className={styles.share_list}
      >
        {getShareList(sharedUrl).map(share => <ShareButton key={share.vender} share={share} />)}
      </div>
    </BodyRow>
  );
}

ShareList.propTypes = propTypes;

export default ShareList;
