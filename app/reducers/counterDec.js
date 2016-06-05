import * as types from '../actions/actionTypes';

export default function counter({state, action}) {
    switch (action.type) {
        case types.DECREMENT:
            return {state: {
                ...state,
                count: state.count - (action.step || 1)
            }, action};
        default:
            return {state, action};
    }
}
/**
 * Created by feitian on 6/4/16.
 */
