import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import BodyRow from '_components/BodyRow';
import Utils from '_common/Utils';
import Const from '_common/Const';

const propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })).isRequired,
  uploading: PropTypes.bool.isRequired,
  reqUploadFiles: PropTypes.func.isRequired,
};

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
  }
  onButtonClickHandler() {
    if (this.hasFile()) {
      this.props.reqUploadFiles(this.props.files);
    }
  }
  hasFile() {
    return this.props.files.length > 0;
  }
  render() {
    const opt = {};
    if (this.hasFile()) {
      opt.color = 'primary';
    } else {
      opt.disabled = true;
    }

    return (
      <BodyRow align={BodyRow.ALIGN.BETWEEN}>
        <span>
          <FormattedMessage
            id="maxSize"
            defaultMessage="Max size"
          />
          <span>: {Utils.convertFileSize(Const.FILE.SIZE.MAX)}, </span>
          <FormattedMessage
            id="keepingPeriod"
            defaultMessage="Keeping Period"
          />
          <span>: {Const.FILE.KEEPING_PERIOD} </span>
          <FormattedMessage
            id="day"
            defaultMessage="day"
          />
        </span>
        <Button {...opt} size="lg" onClick={this.onButtonClickHandler} disable={this.props.uploading.toString()}>
          <FormattedMessage
            id="upload"
            defaultMessage="Upload"
          />
        </Button>
      </BodyRow>
    );
  }
}

Upload.propTypes = propTypes;

export default Upload;
