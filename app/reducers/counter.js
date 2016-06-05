import * as types from '../actions/actionTypes';

export default function counter({state, action}) {
  switch (action.type) {
    case types.INCREMENT:
        var final = state.count + (action.step || 1);
      return {
        state:{
          ...state,
          count: final
        },
        action
      };
    default:
      return {state, action};
  }
}


//count = {A, B}