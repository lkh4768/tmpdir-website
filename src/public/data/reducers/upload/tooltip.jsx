import C from '_utils/constants';

export const initState = {
  isOpen: false,
};

const modal = (state = initState, action = { type: C.ACTION_TYPES.NONE }) => {
  switch (action.type) {
    case C.ACTION_TYPES.TOGGLE_TOOLTIP: {
      return { isOpen: !state.isOpen };
    }
    default:
      return state;
  }
};

export default modal;
