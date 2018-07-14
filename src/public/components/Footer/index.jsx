import React from 'react';

import FooterLabel from '_components/Label';
import FooterLink from '_components/Link';
import Const from '_common/Const';

import styles from './style.scss';

const makeLinks = () => Const.LINKS.map(link => (
  <FooterLink
    key={link.title}
    {...link}
  />
));
const makeLabels = () => Const.LABELS.map(label => (
  <FooterLabel
    key={label.text}
    {...label}
  />
));

function Footer() {
  return (
    <div className={styles.footer}>
      {makeLinks()}
      {makeLabels()}
    </div>
  );
}

export default Footer;
