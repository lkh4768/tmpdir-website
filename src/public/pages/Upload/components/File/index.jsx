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

function File({
  error,
  name,
  size,
  delFile,
}) {
  let className = '';
  if (error && error !== '') {
    className = 'color-red';
  }

  return (
    <FileExplorerRow
      className={className}
      leftItemText={name}
      rightItemText={Utils.convertFileSize(size)}
      xClickHandler={
        (event) => {
          event.stopPropagation();
          return delFile(name);
        }
      }
    />
  );
}

File.propTypes = propTypes;

export default File;
