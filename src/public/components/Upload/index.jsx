import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import BodyRow from '_components/BodyRow';

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
    this.props.reqUploadFiles(this.props.files);
  }
  render() {
    const opt = {};
    if (this.props.files.length > 0) {
      opt.color = 'primary';
    } else {
      opt.disabled = true;
    }

    const node = (
      <BodyRow align={BodyRow.ALIGN.between}>
        <span>최대 용량: 1GB, 보관기간: 1일</span>
        <Button {...opt} size="lg" onClick={this.onButtonClickHandler} disable={this.props.uploading.toString()}>Upload</Button>
      </BodyRow>
    );

    return node;
  }
}

Upload.propTypes = propTypes;

export default Upload;
