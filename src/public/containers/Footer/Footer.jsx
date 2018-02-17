import PropTypes from 'prop-types';
import React from 'react';
import FooterLabel from '../../components/Footer/Label';
import FooterLink from '../../components/Footer/Link';

class Footer extends React.Component {
  render() {
    const footerLinks = this.props.links.map(link => (
      <FooterLink
        key={link.title}
        title={link.title}
        url={link.url}
        text={link.text}
      />
    ));
    const footerLabels = this.props.labels.map(label => (
      <FooterLabel
        key={label.text}
        icon={label.icon}
        text={label.text}
      />
    ));
    const ele = (
      <div className="footer">
        {footerLabels}
        {footerLinks}
      </div>
    );
    return ele;
  }
}

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  labels: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    text: PropTypes.string.isRequired,
  })),
};

Footer.defaultProps = {
  links: null,
  labels: null,
};

export default Footer;
