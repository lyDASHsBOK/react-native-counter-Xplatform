/**
 * Created by feitian on 6/4/16.
 */



export function makeEntree(initState = {}) {
    return function (state, action = {}) {
        if(!state)
            state = initState;
        return {state, action};
    }
}

export function exit({state, action}) {
    return state;
}