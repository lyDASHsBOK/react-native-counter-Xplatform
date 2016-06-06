/**
 * Created by feitian on 6/6/16.
 */
import {HERO_HIT} from '../../actions/actionTypes';

export default function ({state, action}) {
    var newState = {...state};
    switch (action.type) {
        case HERO_HIT:
            if(action.monsterKilled)
                newState.callHero = state.callHero().levelUp();
            break;
    }

    return {state: newState, action};
}

