import React from 'react';
import PropTypes from 'prop-types';
import BackDrop from '_components/BackDrop';
import CopyInput from '_components/CopyInput';
import ShareButton from '_components/ShareButton';
import ShareEntity from '_entities/Share';
import C from '_utils/constants';
import F from '_utils/func';

const propTypes = {
  regiId: PropTypes.string,
};

const defaultProps = {
  regiId: '',
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
};

class UploadedPanel extends React.Component {
  getDownloadUrl() {
    return F.getDownloadUrl(this.props.regiId);
  }
  getShareList() {
    if (this.props.regiId) {
      return SHARE_VENDERS.map(vender => new ShareEntity(vender, this.getDownloadUrl(), '', C.UPLOADED_FILE.SHARE_ICON_SIZE));
    }
    return null;
  }

  render() {
    if (!this.props.regiId) {
      return <span />;
    }

    const shareList = this.getShareList();
    return (
      <React.Fragment>
        <BackDrop />
        <div className={CLASS_NAME.contents}>
          <div className={CLASS_NAME.regiIdInput}>
            <CopyInput className={CLASS_NAME.regiIdInput} value={this.getDownloadUrl()} size="lg" />
          </div>
          <div className={CLASS_NAME.shareList}>
            {shareList.map(share => <ShareButton key={share.vender} share={share} />)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

UploadedPanel.propTypes = propTypes;
UploadedPanel.defaultProps = defaultProps;

export default UploadedPanel;
