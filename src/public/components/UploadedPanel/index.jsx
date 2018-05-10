import React from 'react';
import PropTypes from 'prop-types';
import BackDrop from '_components/BackDrop';

const propTypes = {
  regiId: PropTypes.string.isRequired,
};

class UploadedPanel extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdata');
  }
  render() {
    return this.props.regiId ? <BackDrop /> : <span />;
  }
}

UploadedPanel.propTypes = propTypes;

export default UploadedPanel;
