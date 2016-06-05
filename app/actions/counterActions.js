import * as types from './actionTypes';

export function increment() {
  return {
    type: types.INCREMENT,
    step: 100
  };
}

export function decrement() {
  return dispatch => {
    dispatch({
      type: types.DECREMENT,
      step: 100
    });
  };
  return {
    type: types.DECREMENT
  };
}
