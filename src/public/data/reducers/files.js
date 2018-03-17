import Var from '../../utils/variables';

const filesInitState = {
  files: [],
};

const files = (state = filesInitState, action) => {
  switch (action.type) {
    case Var.ACTION_TYPE.ADD_FILE:
      return Object.assign(
        {},
        state,
        {
          files: [
            ...state.files,
            action.file,
          ],
        },
      );
    default:
      return state;
  }
};

export default files;
