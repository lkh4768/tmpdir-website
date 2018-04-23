import PropTypes from 'prop-types';
import React from 'react';
import Row from './Row';

class Result extends React.Component {
  render() {
    return (
      <Row
        leftItemText={this.props.fileCount}
        rightItemText={this.props.totalSize}
        xClickHandler={
          (event) => {
            event.stopPropagation();
            return this.props.delAllFile();
          }
        }
      />
    );
  }
}

Result.propTypes = {
  fileCount: PropTypes.number.isRequired,
  totalSize: PropTypes.number.isRequired,
  delAllFile: PropTypes.func.isRequired,
};

export default Result;
