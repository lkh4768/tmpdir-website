import C from '_utils/constants';

const initState = {
  isOpen: false,
};

const uploadedPanel = (state = initState, action) => {
  switch (action.type) {
    case C.ACTION_TYPES.TOGGLE_UPLOADED_PANEL: {
      return { isOpen: !state.isOpen };
    }
    default:
      return state;
  }
};

export default uploadedPanel;
