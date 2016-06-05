/**
 * Created by feitian on 6/4/16.
 */

export default function ({state, action}) {
    return {
        state:{
            ...state,
            count: parseFloat(parseFloat(String(state.count).replace(/[^0-9\.]*/g, '')).toFixed(2))
        },
        action
    }
}