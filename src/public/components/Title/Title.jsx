import React from 'react';
import BodyRow from '../Body/BodyRow';
import Logo from './Logo';
import Name from './Name';
import Version from './Version';
import C from '../../utils/constants';

const CLASS_NAME = {
  title: 'title',
};

function Title() {
  return (
    <BodyRow align={BodyRow.ALIGN.center} className={CLASS_NAME.title}>
      <a href={C.APP_INFO.url}>
        <Logo />
      </a>
      <a href={C.APP_INFO.url}>
        <Name />
      </a>
      <Version />
    </BodyRow>
  );
}

export default Title;
