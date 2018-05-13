import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import FileExplorerRow from '_components/FileExplorerRow';
import C from '_utils/constants';
import F from '_utils/func';

const CLASS_NAME = {
  result: 'file-explorer__result',
};

const propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })).isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  delAllFile: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

class FileExplorerResult extends React.Component {
  constructor(props) {
    super(props);
    this.onXClickHandler = this.onXClickHandler.bind(this);
    this.onModalYesClickHandler = this.onModalYesClickHandler.bind(this);
    this.onModalNoClickHandler = this.onModalNoClickHandler.bind(this);
  }
  onXClickHandler(event) {
    event.stopPropagation();
    if (this.props.files.length > 0) {
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
  getTotalFileSize() {
    if (this.props.files && this.props.files.length > 0) {
      return F.getTotalFileSize(this.props.files);
    }
    return 0;
  }
  render() {
    return (
      <ul className={CLASS_NAME.result}>
        <FileExplorerRow
          leftItemText={this.props.files.length}
          rightItemText={F.convertFileSize(this.getTotalFileSize())}
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
      </ul>
    );
  }
}

FileExplorerResult.propTypes = propTypes;

export default FileExplorerResult;
