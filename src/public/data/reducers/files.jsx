import Constants from '../../utils/constants';

const initState = {
  files: [],
};

const files = (state = initState, action) => {
  switch (action.type) {
    case Constants.ACTION_TYPE.ADD_FILE: {
      const obj = Object.assign({}, state, {
        files: state.files.concat(action.file),
      });
      return obj;
    }
    default:
      return state;
  }
};

export default files;
