import React from 'react';
import PropTypes from 'prop-types';

class File extends React.Component {
  render() {
    const ele = (
      <li>
        {this.props.path}
        {this.props.size}
      </li>
    );
    return ele;
  }
}

File.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default File;
