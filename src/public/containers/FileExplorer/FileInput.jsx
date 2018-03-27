import { connect } from 'react-redux';
import actions from '../../data/actions';
import FileInput from '../../components/FileExplorer/FileInput';

import FileEntity from '../../entities/File';

const mapStateToProps = state => ({
  is: state.is,
});

const mapDispatchToProps = dispatch => ({
  addFile: file => dispatch(actions.addFile(new FileEntity(file.name, file.size))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileInput);
