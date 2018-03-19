import { connect } from 'react-redux';
import actions from '../../data/actions';
import FileExplorer from '../../components/FileExplorer/FileExplorer';

import FileEntity from '../../entities/File';

const mapStateToProps = state => state.files;

const mapDispatchToProps = dispatch => ({
  addFile: file => dispatch(actions.addFile(new FileEntity(file.name, file.size))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileExplorer);
