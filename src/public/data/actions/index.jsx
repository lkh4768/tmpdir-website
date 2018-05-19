import { post, get } from 'axios';

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

const toggleTooltip = () => ({
  type: C.ACTION_TYPES.TOGGLE_TOOLTIP,
});

const getFileInfoPending = () => ({
  type: C.ACTION_TYPES.GET_FILE_INFO_PENDING,
});

const getFileInfoSuccess = payload => ({
  type: C.ACTION_TYPES.GET_FILE_INFO_SUCCESS,
  payload,
});

const getFileInfoFailure = error => ({
  type: C.ACTION_TYPES.GET_FILE_INFO_FAILURE,
  error,
});

const downloadFileFailure = error => ({
  type: C.ACTION_TYPES.DOWNLOAD_FILE_FAILURE,
  error,
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

const reqFileInfoImpl = (regiId) => {
  const url = ['/api/v1/file/info/', regiId].join('');
  return get(url);
};

const reqFileInfo = regiId => async (dispatch) => {
  dispatch(getFileInfoPending());
  try {
    const res = await reqFileInfoImpl(regiId);
    return dispatch(getFileInfoSuccess(res.data.expireTime));
  } catch (error) {
    return dispatch(getFileInfoFailure(error.status));
  }
};

const reqDownloadFileImpl = (regiId) => {
  const url = ['/api/v1/file/', regiId].join('');
  return get(url);
};

const reqDownloadFile = regiId => async (dispatch) => {
  console.log('reqDownloadFile, regiId: ', regiId);
  try {
    return await reqDownloadFileImpl(regiId);
  } catch (error) {
    return dispatch(downloadFileFailure(error.status));
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
  toggleTooltip,
  reqFileInfo,
  reqDownloadFile,
};
