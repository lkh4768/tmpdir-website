import { post } from 'axios';

import C from '../../utils/constants';

const initState = {
  list: [],
  error: '',
};
const uniqArray = (arr, prop) => {
  const uniqKeySet = new Set([...arr].map(elem => elem[prop]));
  return arr.filter((elem) => {
    const has = uniqKeySet.has(elem[prop]);
    if (has) {
      uniqKeySet.delete(elem[prop]);
    }
    return has;
  });
};

const uploadFiles = (files) => {
  const url = '/files';
  const formData = new FormData();
  files.forEach((file, i) => formData.append(['file', i].join(''), file));
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  post(url, formData, config)
    .then(response => console.log(response))
    .catch(err => console.log(err));
};

const getTotalFileSize = files => files.reduce((sum, file) => sum + file.size, 0);

const files = (state = initState, action) => {
  switch (action.type) {
    case C.ACTION_TYPES.ADD_FILES: {
      const newFiles = uniqArray(
        [
          ...state.list,
          ...action.files,
        ],
        'name',
      );
      if (C.FILE.SIZE.MAX >= getTotalFileSize(newFiles)) {
        return { ...state, list: newFiles };
      }
      return { ...state, error: '파일 용량 초과' };
    }
    case C.ACTION_TYPES.DEL_FILE: {
      return state.list.filter(file => file.name !== action.filename);
    }
    case C.ACTION_TYPES.DEL_ALL_FILE: {
      return initState;
    }
    case C.ACTION_TYPES.UPLOAD_FILES: {
      uploadFiles(state.list);
      return state;
    }
    case C.ACTION_TYPES.EMPTY_ERROR: {
      return { ...state, error: '' };
    }
    default:
      return state;
  }
};

export default files;
