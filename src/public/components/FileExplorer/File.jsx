import PropTypes from 'prop-types';
import React from 'react';
import Row from './Row';

class File extends React.Component {
  render() {
    return (
      <Row
        leftItemText={this.props.name}
        rightItemText={this.props.size}
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

File.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  delFile: PropTypes.func.isRequired,
};

export default File;
