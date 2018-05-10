import React from 'react';
import PropTypes from 'prop-types';
import BackDrop from '_components/BackDrop';

const propTypes = {
  regiId: PropTypes.string.isRequired,
};

function UploadedPanel({ regiId }) {
  return regiId ? <BackDrop /> : <span />;
}

UploadedPanel.propTypes = propTypes;

export default UploadedPanel;
