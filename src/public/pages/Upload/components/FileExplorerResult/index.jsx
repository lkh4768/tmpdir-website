import PropTypes from 'prop-types';
import React from 'react';
import Button from 'reactstrap/lib/Button';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import { FormattedMessage } from 'react-intl';

import Utils from '_common/Utils';

import FileExplorerRow from '../FileExplorerRow';
import styles from './style.scss';

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
      return Utils.getTotalFileSize(this.props.files);
    }
    return 0;
  }
  render() {
    return (
      <ul className={styles.file_explorer_result}>
        <FileExplorerRow
          className={styles.file_explorer_result__file_explorer_row}
          leftItemText={this.props.files.length}
          rightItemText={Utils.convertFileSize(this.getTotalFileSize())}
          xClickHandler={this.onXClickHandler}
        />
        <Modal
          isOpen={this.props.modalIsOpen}
          toggle={this.props.toggleModal}
          centered={Boolean(true)}
        >
          <ModalHeader toggle={this.onModalNoClickHandler}>
            <FormattedMessage
              id="deleteAllFiles"
              defaultMessage="Delete all files"
            />
          </ModalHeader>
          <ModalBody>
            <FormattedMessage
              id="confirmDeleteAllFiles"
              defaultMessage="Are you sure you want to delete all?"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onModalYesClickHandler} >
              <FormattedMessage
                id="yes"
                defaultMessage="Yes"
              />
            </Button>
            {' '}
            <Button color="secondary" onClick={this.onModalNoClickHandler} >
              <FormattedMessage
                id="no"
                defaultMessage="No"
              />
            </Button>
          </ModalFooter>
        </Modal>
      </ul>
    );
  }
}

FileExplorerResult.propTypes = propTypes;

export default FileExplorerResult;
