import { connect } from 'react-redux';
import Utils from '_common/Utils';
import Backdrop from '../../components/Backdrop';

const progressText = (totalSize, uploadedSize) => [
  Math.round((uploadedSize * 100) / totalSize),
  '% (',
  Utils.convertFileSize(uploadedSize),
  '/',
  Utils.convertFileSize(totalSize),
  ')',
].join('');

const mapStateToProps = state => ({
  width: Math.round((state.file.uploadedSize * 100) / state.file.totalSize),
  text: progressText(state.file.totalSize, state.file.uploadedSize),
});

export default connect(
  mapStateToProps,
  null,
)(Backdrop);
