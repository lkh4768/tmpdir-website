import React from 'react';
import { FormattedMessage } from 'react-intl';

const CLASS_NAME = {
  uploadGuide: 'file-explorer__upload-guide',
};

function UploadGuide() {
  return (
    <li className={CLASS_NAME.uploadGuide}>
      <FormattedMessage
        id="uploadGuide"
        defaultMessage="Drop files here or click to upload"
      />
    </li>
  );
}

export default UploadGuide;
