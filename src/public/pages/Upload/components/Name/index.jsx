import React from 'react';

import Const from '_common/Const';

import styles from './style.scss';

function Name() {
  return (
    <div href={Const.APP_INFO.url} className={styles.name}>
      {Const.APP_INFO.name}
    </div>
  );
}

export default Name;
