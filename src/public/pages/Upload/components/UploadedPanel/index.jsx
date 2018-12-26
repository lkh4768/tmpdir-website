import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import ShareList from '_components/ShareList';
import Utils from '_common/Utils';

import CopyInputContainer from '../../containers/CopyInput';
import Backdrop from '../Backdrop';
import ProgressBackdrop from '../../containers/ProgressBackdrop';
import styles from './style.scss';

const propTypes = {
  regiId: PropTypes.string.isRequired,
  expireTime: PropTypes.number.isRequired,
  emptyRegiId: PropTypes.func.isRequired,
  uploading: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
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
          <div className={styles.uploaded_panel__contents} >
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
        onKeyPress={Utils.emptyFunc}
      >
        <Backdrop />
        <div className={styles.uploaded_panel__contents} >
          <div
            role="button"
            tabIndex="0"
            onClick={e => e.stopPropagation()}
            onKeyPress={Utils.emptyFunc}
            className={styles.uploaded_panel__contents__regi_id_input}
          >
            <CopyInputContainer className={styles.uploaded_panel__contents__regi_id_input} value={this.getDownloadUrl()} size="lg" />
          </div>
          <div className={styles.uploaded_panel__contents__expire_time}>
            <FormattedMessage
              id="expiresOn"
              values={{
                expireDate: this.props.intl.formatDate(new Date(this.props.expireTime)),
                expireTime: this.props.intl.formatTime(new Date(this.props.expireTime)),
              }}
              defaultMessage="Expires on {expireDate}, {expireTime}"
            />
          </div>
          <ShareList sharedUrl={this.getDownloadUrl()} />
        </div>
      </div>
    );
  }
}

UploadedPanel.propTypes = propTypes;

export default injectIntl(UploadedPanel);
