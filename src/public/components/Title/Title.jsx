import React from 'react';
import BodyRow from '../Body/BodyRow';
import Logo from './Logo';
import Name from './Name';
import Version from './Version';
import C from '../../utils/constants';

class Title extends React.Component {
  render() {
    const ele = (
      <BodyRow align={BodyRow.ALIGN.center} className={Title.CLASS_NAME}>
        <a href={C.APP_INFO.url}>
          <Logo />
        </a>
        <a href={C.APP_INFO.url}>
          <Name />
        </a>
        <Version />
      </BodyRow>
    );
    return ele;
  }
}

Title.CLASS_NAME = 'title';

export default Title;
