import PropTypes from 'prop-types';
import React from 'react';
import Row from './Row';

class Result extends React.Component {
  render() {
    const ele = (
      <Row leftItemText={this.props.fileCount} rightItemText={this.props.totalSize} />
    );
    return ele;
  }
}

Result.propTypes = {
  fileCount: PropTypes.number.isRequired,
  totalSize: PropTypes.number.isRequired,
};

export default Result;
