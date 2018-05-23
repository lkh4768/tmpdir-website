import PropTypes from 'prop-types';
import React from 'react';
import logo96w from '_static/images/logo_96w.png';
import BodyRow from '_components/BodyRow';

const CLASS_NAME = {
  img: 'logo__img',
};

const propTypes = {
  origin: PropTypes.string.isRequired,
  getOrigin: PropTypes.func.isRequired,
};

class Logo extends React.Component {
  componentDidMount() {
    this.props.getOrigin();
  }
  render() {
    return (
      <BodyRow align={BodyRow.ALIGN.center}>
        <a href={this.props.origin}>
          <img className={CLASS_NAME.img} src={logo96w} alt="logo" />
        </a>
      </BodyRow>
    );
  }
}

Logo.propTypes = propTypes;

export default Logo;
