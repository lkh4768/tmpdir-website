import PropTypes from 'prop-types';
import React from 'react';

import Row from './Row';
import F from '../../utils/func';

const propTypes = {
  fileCount: PropTypes.number.isRequired,
  totalSize: PropTypes.number.isRequired,
  delAllFile: PropTypes.func.isRequired,
};

class Result extends React.Component {
  render() {
    return (
      <Row
        leftItemText={this.props.fileCount}
        rightItemText={F.convertFileSize(this.props.totalSize)}
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

Result.propTypes = propTypes;

export default Result;
