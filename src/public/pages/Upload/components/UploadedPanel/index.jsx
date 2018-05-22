import React from 'react';
import PropTypes from 'prop-types';
import ShareList from '_components/ShareList';
import C from '_utils/constants';
import F from '_utils/func';
import CopyInputContainer from '../../containers/CopyInput';
import Backdrop from '../Backdrop';
import ProgressBackdrop from '../../containers/ProgressBackdrop';

const propTypes = {
  regiId: PropTypes.string.isRequired,
  expireTime: PropTypes.number.isRequired,
  emptyRegiId: PropTypes.func.isRequired,
  uploading: PropTypes.bool.isRequired,
};

const CLASS_NAME = {
  contents: 'uploaded-panel__contents',
  regiIdInput: 'uploaded-panel__contents__regi-id-input',
  expireTime: 'uploaded-panel__contents__expire-time',
};

class UploadedPanel extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  getDownloadUrl() {
    return [window.location.origin, this.props.regiId].join('/');
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
          <ShareList sharedUrl={this.getDownloadUrl()} />
        </div>
      </div>
    );
  }
}

UploadedPanel.propTypes = propTypes;

export default UploadedPanel;