import deepFreeze from 'deep-freeze';
import Const from '_common/Const';
import modal, { initState } from '_data/reducers/upload/modal';

const state = {
  ...initState,
}

describe('modal reducer', () => {
  it(`[modal] initState Success`, () => {
    const result = modal(undefined, {});
    expect(result).toEqual(initState);
  });
  it(`[modal] ${Const.ACTION_TYPES.TOGGLE_MODAL} Success`, () => {
    const action = {
      type: Const.ACTION_TYPES.TOGGLE_MODAL
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = modal(state, action);
    expect(result.isOpen).toEqual(!state.isOpen);
  });
});
