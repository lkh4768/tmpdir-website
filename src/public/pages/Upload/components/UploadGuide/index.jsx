import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './style.scss';

function UploadGuide() {
  return (
    <li className={styles.upload_guide}>
      <FormattedMessage
        id="uploadGuide"
        defaultMessage="Drop files here or click to upload"
      />
    </li>
  );
}

export default UploadGuide;
