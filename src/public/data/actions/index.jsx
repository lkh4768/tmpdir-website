import Contants from '../../utils/constants';

const addFile = _file => ({
  type: Contants.ACTION_TYPES.ADD_FILE,
  file: _file,
});

const showLocalFileExplorer = () => ({
  type: Contants.ACTION_TYPES.SHOW_LOCAL_FILE_EXPLORER
});

export default {
  addFile,
  showLocalFileExplorer,
};
