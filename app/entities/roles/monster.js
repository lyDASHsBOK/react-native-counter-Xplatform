/**
 * Created by feitian on 6/6/16.
 */

export default function(BaseEntity) {
    function Monster(level = 1) {
        var callBase = BaseEntity(level);
        var attr = {
            HP: level * 8 -5,
            maxHP: level * 8 -5
        };

        return () => ({
            ...callBase(),
            _constructor_: Monster,
            getAttr: () => ({
                ...callBase().getAttr(),
                ...attr
            }),
            takeHit: function(dmg) {
                attr.HP -= dmg;
                if(attr.HP < 0)
                    attr.HP = 0;

                return this;
            },
            isDead: () => attr.HP <= 0,
            respawn: function() {
                return new this._constructor_(callBase().getAttr().lv + 1);
            }
        });
    }

    return Monster;
};

