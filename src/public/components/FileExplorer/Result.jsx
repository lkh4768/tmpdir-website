import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Row from './Row';
import C from '../../utils/constants';
import F from '../../utils/func';

const propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  fileCount: PropTypes.number.isRequired,
  totalSize: PropTypes.number.isRequired,
  delAllFile: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.onXClickHandler = this.onXClickHandler.bind(this);
    this.onModalYesClickHandler = this.onModalYesClickHandler.bind(this);
    this.onModalNoClickHandler = this.onModalNoClickHandler.bind(this);
  }
  onXClickHandler(event) {
    event.stopPropagation();
    if (this.props.fileCount > 0) {
      this.props.toggleModal();
    }
  }
  onModalYesClickHandler() {
    this.props.delAllFile();
    this.props.toggleModal();
  }
  onModalNoClickHandler() {
    this.props.toggleModal();
  }
  render() {
    return (
      <React.Fragment>
        <Row
          leftItemText={this.props.fileCount}
          rightItemText={F.convertFileSize(this.props.totalSize)}
          xClickHandler={this.onXClickHandler}
        />
        <Modal
          isOpen={this.props.modalIsOpen}
          toggle={this.props.toggleModal}
          centered={Boolean(true)}
        >
          <ModalHeader toggle={this.onModalNoClickHandler}>{C.TEXT.ALL_DEL_HEAD}</ModalHeader>
          <ModalBody>{C.TEXT.ALL_DEL_BODY}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onModalYesClickHandler} >
              {C.TEXT.YES}
            </Button>
            {' '}
            <Button color="secondary" onClick={this.onModalNoClickHandler} >
              {C.TEXT.NO}
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

Result.propTypes = propTypes;

export default Result;
