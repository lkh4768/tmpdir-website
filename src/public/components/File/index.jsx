import PropTypes from 'prop-types';
import React from 'react';

import FileExplorerRow from '_components/FileExplorerRow';
import F from '_utils/func';

const propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  delFile: PropTypes.func.isRequired,
};

class File extends React.Component {
  render() {
    return (
      <FileExplorerRow
        leftItemText={this.props.name}
        rightItemText={F.convertFileSize(this.props.size)}
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
