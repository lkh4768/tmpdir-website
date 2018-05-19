import React from 'react';
import logo96w from '_static/images/logo_96w.png';
import BodyRow from '_components/BodyRow';

const CLASS_NAME = {
  img: 'logo__img',
};

function Logo() {
  return (
    <BodyRow align={BodyRow.ALIGN.center}>
      <a href={window.location.origin}>
        <img className={CLASS_NAME.img} src={logo96w} alt="logo" />
      </a>
    </BodyRow>
  );
}

export default Logo;
