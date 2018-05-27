import C from '_utils/constants';
import modal, { initState } from '_data/reducers/upload/modal';

const state = {
  ...initState,
}

describe('modal reducer', () => {
  it(`${C.ACTION_TYPES.TOGGLE_MODAL} Success`, () => {
    const action = {
      type: C.ACTION_TYPES.TOGGLE_MODAL
    };
    const result = modal(state, action);
    expect(result.isOpen).toEqual(!state.isOpen);
  });
});
