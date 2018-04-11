import React from 'react';
import FooterLabel from './Label';
import FooterLink from './Link';
import C from '../../utils/constants';

const makeLinks = () => C.LINKS.map(link => (
  <FooterLink
    key={link.title}
    title={link.title}
    url={link.url}
    text={link.text}
  />
));
const makeLabels = () => C.LABELS.map(label => (
  <FooterLabel
    key={label.text}
    icon={label.icon}
    text={label.text}
  />
));

class Footer extends React.Component {
  render() {
    const links = makeLinks();
    const labels = makeLabels();
    const ele = (
      <div className="footer">
        {labels}
        {links}
      </div>
    );
    return ele;
  }
}

export default Footer;
