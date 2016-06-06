/**
 * Created by feitian on 6/6/16.
 */
import {HERO_HIT} from '../../actions/actionTypes';

export default function ({state, action}) {
    var newState = {...state};
    var newAction = {...action};
    switch (action.type) {
        case HERO_HIT:
            const atk = state.callHero().getAttr().atk;

            if(newState.callMonster().takeHit(atk).isDead()) {
                //conclude fight
                newAction.monsterKilled = true;

                //search new monster
                newState.callMonster = newState.callMonster().respawn();
            }
            break;
    }

    return {state: newState, action: newAction};
}
