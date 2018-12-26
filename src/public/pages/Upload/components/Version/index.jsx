import React from 'react';
import Const from '_common/Const';

import styles from './style.scss';

function Version() {
  return (
    <div className={styles.version}>
      {Const.APP_INFO.version}
    </div>
  );
}

export default Version;
