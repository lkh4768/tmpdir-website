import PropTypes from 'prop-types';
import React from 'react';

class Version extends React.Component {
  render() {
    const ele = (
      <div className="title__version">
        {this.props.version}
      </div>
    );
    return ele;
  }
}

Version.propTypes = {
  version: PropTypes.string,
};

Version.defaultProps = {
  version: '',
};

export default Version;
