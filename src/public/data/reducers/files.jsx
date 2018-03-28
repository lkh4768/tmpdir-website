import Constants from '../../utils/constants';

const initState = {
  files: [],
};

const files = (state = initState, action) => {
  switch (action.type) {
    case Constants.ACTION_TYPES.ADD_FILE: {
      return Object.assign({}, state, {
        files: state.files.concat(action.file),
      });
    }
    default:
      return state;
  }
};

export default files;
