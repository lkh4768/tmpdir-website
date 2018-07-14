import PropTypes from 'prop-types';
import React from 'react';
import Utils from '_common/Utils';
import FileExplorerRow from '../FileExplorerRow';

const propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  delFile: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

class File extends React.Component {
  render() {
    let className = '';
    if (this.props.error && this.props.error !== '') {
      className = 'color-red';
    }

    return (
      <FileExplorerRow
        className={className}
        leftItemText={this.props.name}
        rightItemText={Utils.convertFileSize(this.props.size)}
        xClickHandler={
          (event) => {
            event.stopPropagation();
            return this.props.delFile(this.props.name);
          }
        }
      />
    );
  }
}

File.propTypes = propTypes;

export default File;
