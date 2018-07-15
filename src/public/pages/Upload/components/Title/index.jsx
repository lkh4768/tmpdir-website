import React from 'react';

import BodyRow from '_components/BodyRow';
import Const from '_common/Const';

import Logo from '../Logo';
import Name from '../Name';
import Version from '../Version';
import styles from './style.scss';

function Title() {
  return (
    <BodyRow align={BodyRow.ALIGN.CENTER} className={styles.title}>
      <a href={Const.APP_INFO.url}>
        <Logo />
      </a>
      <a href={Const.APP_INFO.url}>
        <Name />
      </a>
      <Version />
    </BodyRow>
  );
}

export default Title;
