import React from 'react';
import FooterLabel from '_components/Label';
import FooterLink from '_components/Link';
import C from '_utils/constants';

const makeLinks = () => C.LINKS.map(link => (
  <FooterLink
    key={link.title}
    {...link}
  />
));
const makeLabels = () => C.LABELS.map(label => (
  <FooterLabel
    key={label.text}
    {...label}
  />
));

function Footer() {
  return (
    <div className="footer">
      {makeLinks()}
      {makeLabels()}
    </div>
  );
}

export default Footer;
