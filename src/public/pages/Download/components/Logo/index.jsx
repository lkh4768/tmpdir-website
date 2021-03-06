import PropTypes from 'prop-types';
import React from 'react';

import logo96w from '_static/images/logo_96w.png';
import BodyRow from '_components/BodyRow';

import styles from './style.scss';

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
      <BodyRow align={BodyRow.ALIGN.CENTER}>
        <a href={this.props.origin}>
          <img className={styles.logo__img} src={logo96w} alt="logo" />
        </a>
      </BodyRow>
    );
  }
}

Logo.propTypes = propTypes;

export default Logo;
