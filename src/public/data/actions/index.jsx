import C from '../../utils/constants';

const addFile = _files => ({
  type: C.ACTION_TYPES.ADD_FILES,
  files: _files,
});

const delFile = _filename => ({
  type: C.ACTION_TYPES.DEL_FILE,
  filename: _filename,
});

const delAllFile = () => ({
  type: C.ACTION_TYPES.DEL_ALL_FILE,
});

const uploadFiles = () => ({
  type: C.ACTION_TYPES.UPLOAD_FILES,
});

const emptyError = () => ({
  type: C.ACTION_TYPES.EMPTY_ERROR,
});

export default {
  addFile,
  delFile,
  delAllFile,
  uploadFiles,
  emptyError,
};
