import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import BodyRow from '../Body/BodyRow';

class Upload extends React.Component {
  render() {
    const node = (
      <BodyRow align={BodyRow.ALIGN.between}>
        <span>최대 용량: 1GB, 보관기간: 1일</span>
        <Button color="primary" size="lg" onClick={this.props.uploadFiles}>Upload</Button>
      </BodyRow>
    );

    return node;
  }
}

Upload.propTypes = {
  uploadFiles: PropTypes.func.isRequired,
};

export default Upload;
