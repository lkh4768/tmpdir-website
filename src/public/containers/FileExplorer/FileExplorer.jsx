import { connect } from 'react-redux';
import addFile from '../../data/actions';
import FileExplorer from '../../components/FileExplorer/FileExplorer';

import FileEntity from '../../entities/File';

const mapStateToProps = state => state.files;

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(addFile(new FileEntity(['path/', (new Date().getTime())].join(''), 1))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileExplorer);
