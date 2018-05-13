import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import FaCopy from 'react-icons/lib/fa/copy';

const propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

const defaultProps = {
  size: 'md',
};

function CopyInput({ value, size }) {
  return (
    <InputGroup size={size}>
      <Input value={value} readOnly />
      <InputGroupAddon addonType="append">
        <Button color="info">
          <FaCopy />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}

CopyInput.propTypes = propTypes;
CopyInput.defaultProps = defaultProps;

export default CopyInput;
