/**
 * Created by feitian on 6/4/16.
 */

export default function ({state, action}) {
    return {
        state: {
            ...state,
            count: '$ ' + state.count
        },
        action
    }
}