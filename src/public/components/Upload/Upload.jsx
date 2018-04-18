import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { post } from 'axios';
import BodyRow from '../Body/BodyRow';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.uploadFiles = this.uploadFiles.bind(this);
  }
  uploadFiles() {
    const url = '/files';
    const formData = new FormData();
    formData.append('file', this.props.files[0]);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    post(url, formData, config).then(response => console.log(response));
  }
  render() {
    const node = (
      <BodyRow align={BodyRow.ALIGN.between}>
        <span>최대 용량: 1GB, 보관기간: 1일</span>
        <Button color="primary" size="lg" onClick={this.uploadFiles}>Upload</Button>
      </BodyRow>
    );

    return node;
  }
}

Upload.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })).isRequired,
};

export default Upload;
