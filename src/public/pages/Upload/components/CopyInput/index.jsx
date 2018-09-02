import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Tooltip,
} from 'reactstrap';
import FaCopy from 'react-icons/lib/fa/copy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FormattedMessage } from 'react-intl';

const propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  tooltipOpen: PropTypes.bool.isRequired,
  toggleTooltip: PropTypes.func.isRequired,
};

const defaultProps = {
  size: 'md',
};

const ID = {
  copyButton: 'copy-button',
};

class CopyInput extends React.Component {
  constructor(props) {
    super(props);
    this.copyHandler = this.copyHandler.bind(this);
  }

  copyHandler() {
    this.props.toggleTooltip();
    setTimeout(this.props.toggleTooltip, 800);
  }

  render() {
    return (
      <React.Fragment>
        <InputGroup size={this.props.size}>
          <Input value={this.props.value} readOnly />
          <InputGroupAddon addonType="append">
            <CopyToClipboard text={this.props.value} onCopy={this.copyHandler}>
              <Button id={ID.copyButton} color="info">
                <FaCopy />
              </Button>
            </CopyToClipboard>
          </InputGroupAddon>
        </InputGroup>
        <Tooltip placement="top" isOpen={this.props.tooltipOpen} target={ID.copyButton}>
          <FormattedMessage
            id="copied"
            defaultMessage="Copied"
          />
        </Tooltip>
      </React.Fragment>
    );
  }
}

CopyInput.propTypes = propTypes;
CopyInput.defaultProps = defaultProps;

export default CopyInput;
