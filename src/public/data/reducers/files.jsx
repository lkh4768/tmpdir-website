import { post } from 'axios';

import C from '../../utils/constants';

const initState = [];
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

const files = (state = initState, action) => {
  switch (action.type) {
    case C.ACTION_TYPES.ADD_FILES: {
      return uniqArray(
        [
          ...state,
          ...action.files,
        ],
        'name',
      );
    }
    case C.ACTION_TYPES.DEL_FILE: {
      return state.filter(file => file.name !== action.filename);
    }
    case C.ACTION_TYPES.DEL_ALL_FILE: {
      return initState;
    }
    case C.ACTION_TYPES.UPLOAD_FILES: {
      uploadFiles(state);
      return [...state];
    }
    default:
      return state;
  }
};

export default files;
