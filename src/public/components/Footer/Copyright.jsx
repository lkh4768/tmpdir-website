import PropTypes from 'prop-types';
import React from 'react';

class Copyright extends React.Component {
  render() {
    const ele = (
      <span>
        <i className="fa fa-copyright" />
        {this.props.releaseYear} {this.props.owner}
      </span>
    );
    return ele;
  }
}

Copyright.defaultProps = {
  releaseYear: 2017,
  owner: 'Kihyeon Lee.',
};

Copyright.propTypes = {
  releaseYear: PropTypes.number,
  owner: PropTypes.string,
};

export default Copyright;
