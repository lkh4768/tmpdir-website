import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addFile } from '../../data/actions';

import BodyRow from '../Body/BodyRow';
import FileExplorerList from './FileExplorerList';
import FileExplorerResult from './FileExplorerResult';

import FileEntity from '../../entities/File';

class FileExplorer extends React.Component {
  render() {
    const ele = (
      <BodyRow>
        <button onClick={this.props.addFile}>
          {'add'}
        </button>
        <ul className={FileExplorer.className}>
          <li>
            <FileExplorerList files={this.props.files} />
          </li>
          <li>
            <FileExplorerResult />
          </li>
        </ul>
      </BodyRow>
    );
    return ele;
  }
}

FileExplorer.className = 'file-explorer';

FileExplorer.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })),
  addFile: PropTypes.func.isRequired,
};

FileExplorer.defaultProps = {
  files: null,
};

const mapStateToProps = state => ({
  todos: state.files,
});

const mapDispatchToProps = dispatch => ({
  addFile: dispatch(addFile(new FileEntity(new Date().getTime()), 1)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileExplorer);
