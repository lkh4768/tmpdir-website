import PropTypes from 'prop-types';
import React from 'react';
import Row from './Row';

class File extends React.Component {
  render() {
    const ele = (
      <Row leftItemText={this.props.path} rightItemText={this.props.size} />
    );
    return ele;
  }
}

File.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default File;
