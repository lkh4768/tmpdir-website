import PropTypes from 'prop-types';
import React from 'react';

class Name extends React.Component {
  render() {
    const node = (
      <div className="title__name" href="/">
        {this.props.name}
      </div>
    );
    return node;
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
