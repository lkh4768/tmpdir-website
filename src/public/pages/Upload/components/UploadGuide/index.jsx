import React from 'react';
import { FormattedMessage } from 'react-intl';

const CLASS_NAME = {
  uploadGuide: 'file-explorer__upload-guide',
};

function UploadGuide() {
  return (
    <li className={CLASS_NAME.uploadGuide}>
      <FormattedMessage id="uploadGuide" />
    </li>
  );
}

export default UploadGuide;
