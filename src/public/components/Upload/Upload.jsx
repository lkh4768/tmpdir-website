import React from 'react';
import { Button } from 'reactstrap';
import BodyRow from '../Body/BodyRow';

class Upload extends React.Component {
  render() {
    const node = (
      <BodyRow align={BodyRow.ALIGN.between}>
        <span>최대 용량: 1GB, 보관기간: 1일</span>
        <Button color="primary" size="lg">Upload</Button>
      </BodyRow>
    );

    return node;
  }
}

export default Upload;
