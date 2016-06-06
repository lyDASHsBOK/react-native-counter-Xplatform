/**
 * Created by feitian on 6/7/16.
 */
import MonsterRole from './monster';
import Base from '../base';

export default function(BaseEntity) {
    function WithPet(level = 1, petLevel = 1) {
        const callBase = BaseEntity(level);
        const callPet = MonsterRole(Base)(petLevel);

        return () => ({
            ...callBase(),
            _constructor_: WithPet,
            getAttr: ()=> ({
                ...callBase().getAttr(),
                atk: callBase().getAttr().atk + callPet().getAttr().atk
            }),
            levelUp: function() {
                const callNewBase = this._constructor_(callBase().getAttr().lv + 1, callPet().getAttr().lv);
                return callNewBase().levelUpPet();
            },
            levelUpPet: function() {
                return this._constructor_(callBase().getAttr().lv, callPet().getAttr().lv + 1);
            }
        });
    }

    return WithPet;
};
