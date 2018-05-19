import React from 'react';
import BodyRow from '_components/BodyRow';
import C from '_utils/constants';
import Logo from '../Logo';
import Name from '../Name';
import Version from '../Version';

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
