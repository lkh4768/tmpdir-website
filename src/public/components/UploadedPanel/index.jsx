import React from 'react';
import PropTypes from 'prop-types';

import CopyInputContainer from '_containers/CopyInput';
import Backdrop from '_components/Backdrop';
import ProgressBackdrop from '_containers/ProgressBackdrop';
import ShareButton from '_components/ShareButton';
import ShareEntity from '_entities/Share';
import C from '_utils/constants';
import F from '_utils/func';

const propTypes = {
  regiId: PropTypes.string,
  expireTime: PropTypes.number,
  emptyRegiId: PropTypes.func.isRequired,
  uploading: PropTypes.bool.isRequired,
};

const defaultProps = {
  regiId: '',
  expireTime: 0,
};

const SHARE_VENDERS = [
  ShareEntity.VENDER.facebook,
  ShareEntity.VENDER.twitter,
  ShareEntity.VENDER.googleplus,
  ShareEntity.VENDER.whatsapp,
  ShareEntity.VENDER.reddit,
];

const CLASS_NAME = {
  contents: 'uploaded-panel__contents',
  regiIdInput: 'uploaded-panel__contents__regi-id-input',
  shareList: 'uploaded-panel__contents__share-list',
  expireTime: 'uploaded-panel__contents__expire-time',
};

class UploadedPanel extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  getDownloadUrl() {
    return F.getDownloadUrl(this.props.regiId);
  }
  getShareList() {
    if (this.props.regiId) {
      return SHARE_VENDERS.map(vender => new ShareEntity(vender, this.getDownloadUrl(), '', C.UPLOADED_FILE.SHARE_ICON_SIZE));
    }
    return null;
  }
  async toggle() {
    this.props.emptyRegiId();
  }
  render() {
    if (!this.props.regiId) {
      if (this.props.uploading) {
        return (
          <div className={CLASS_NAME.contents} >
            <ProgressBackdrop text="25" width={25} />;
          </div>
        );
      }
      return <span />;
    }

    const shareList = this.getShareList();
    return (
      <div
        role="button"
        tabIndex="0"
        onClick={this.toggle}
        onKeyPress={F.emptyFunc}
      >
        <Backdrop />
        <div className={CLASS_NAME.contents} >
          <div
            role="button"
            tabIndex="0"
            onClick={e => e.stopPropagation()}
            onKeyPress={F.emptyFunc}
            className={CLASS_NAME.regiIdInput}
          >
            <CopyInputContainer className={CLASS_NAME.regiIdInput} value={this.getDownloadUrl()} size="lg" />
          </div>
          <div className={CLASS_NAME.expireTime}>{[F.secToLocalTime(this.props.expireTime), C.TEXT.EXPIRE].join(' ')}</div>
          <div
            role="button"
            tabIndex="0"
            onClick={e => e.stopPropagation()}
            onKeyPress={F.emptyFunc}
            className={CLASS_NAME.shareList}
          >
            {shareList.map(share => <ShareButton key={share.vender} share={share} />)}
          </div>
        </div>
      </div>
    );
  }
}

UploadedPanel.propTypes = propTypes;
UploadedPanel.defaultProps = defaultProps;

export default UploadedPanel;
