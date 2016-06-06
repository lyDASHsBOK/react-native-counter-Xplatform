/**
 * Created by feitian on 6/6/16.
 */

export default function Monster(level = 1) {
    var attr = {
        lv: level,
        HP: level * 8 - 5,
        maxHP: level * 8 - 5
    };
    return {
        getAttr: () => (attr),
        takeHit: function(dmg) {
            attr.HP -= dmg;
            if(attr.HP < 0)
                attr.HP = 0;

            return this;
        },
        isDead: () => attr.HP <= 0,
        respawn: () => {
            return new Monster(attr.lv + 1);
        }
    }
};

