import { post } from 'axios';

import C from '_utils/constants';
import F from '_utils/func';

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

const uploadFilesSuccess = payload => ({
  type: C.ACTION_TYPES.UPLOAD_FILES_SUCCESS,
  payload,
});

const uploadFilesFailure = error => ({
  type: C.ACTION_TYPES.UPLOAD_FILES_FAILURE,
  error,
});

const uploadFilesPending = (totalSize, uploadedSize = 0) => ({
  type: C.ACTION_TYPES.UPLOAD_FILES_PENDING,
  totalSize,
  uploadedSize,
});

const emptyError = () => ({
  type: C.ACTION_TYPES.EMPTY_ERROR,
});

const emptyRegiId = () => ({
  type: C.ACTION_TYPES.EMPTY_REGI_ID,
});

const toggleModal = () => ({
  type: C.ACTION_TYPES.TOGGLE_MODAL,
});

const toggleUploadedPanel = () => ({
  type: C.ACTION_TYPES.TOGGLE_UPLOADED_PANEL,
});

const reqUploadFilesImpl = (files, onUploadProgress = F.emptyFunc) => {
  const url = '/api/v1/file';
  const formData = new FormData();
  files.forEach((file, i) => formData.append(['file', i].join(''), file));
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
    onUploadProgress,
  };
  return post(url, formData, config);
};

const reqUploadFiles = files => async (dispatch) => {
  dispatch(uploadFilesPending(F.getTotalFileSize(files)));
  try {
    const res = await reqUploadFilesImpl(
      files,
      progressEvent => dispatch(uploadFilesPending(progressEvent.total, progressEvent.loaded)),
    );
    return dispatch(uploadFilesSuccess({
      regiId: res.data.id,
      expireTime: res.data.expireTime,
    }));
  } catch (error) {
    return dispatch(uploadFilesFailure(error.status));
  }
};

export default {
  addFile,
  delFile,
  delAllFile,
  emptyError,
  emptyRegiId,
  reqUploadFiles,
  toggleModal,
  toggleUploadedPanel,
};
