import React from 'react';
import BodyRow from '_components/BodyRow';
import Logo from '_components/Logo';
import Name from '_components/Name';
import Version from '_components/Version';
import C from '_utils/constants';

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
