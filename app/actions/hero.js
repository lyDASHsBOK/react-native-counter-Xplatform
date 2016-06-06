/**
 * Created by feitian on 6/6/16.
 */
import * as types from './actionTypes';

export default {
    hit: function () {
        return dispatch => {
            dispatch({
                type: types.HERO_HIT
            })
        }
    }
}
