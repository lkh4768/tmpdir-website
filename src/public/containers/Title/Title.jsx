import PropTypes from 'prop-types';
import React from 'react';
import BodyRow from '../Body/BodyRow';
import Logo from '../../components/Title/Logo';
import Name from '../../components/Title/Name';
import Version from '../../components/Title/Version';

class Title extends React.Component {
  render() {
    const ele = (
      <BodyRow align={BodyRow.ALIGN.center} className={Title.CLASS_NAME}>
        <a href={this.props.appInfo.url}>
          <Logo logo={this.props.appInfo.logo} />
        </a>
        <a href={this.props.appInfo.url}>
          <Name name={this.props.appInfo.name} />
        </a>
        <Version version={this.props.appInfo.version} />
      </BodyRow>
    );
    return ele;
  }
}

Title.CLASS_NAME = 'title';

Title.propTypes = {
  appInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    version: PropTypes.string,
  }).isRequired,
};

export default Title;
