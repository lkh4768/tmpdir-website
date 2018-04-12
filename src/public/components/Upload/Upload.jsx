import React from 'react';
import { Button } from 'reactstrap';
import BodyRow from '../Body/BodyRow';
import { post } from 'axios';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.uploadFiles = this.uploadFiles.bind(this);
  }
  uploadFiles() {
    const url = 'files';
    const formData = new FormData();
    formData.append('file', this.props.files)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    post(url, formData,config).then((response) => {
      console.log(response);
      return null;
    });
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

export default Upload;
