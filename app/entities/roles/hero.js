/**
 * Created by feitian on 6/6/16.
 */

export default function(BaseEntity) {
    function Hero(level = 1) {
        const callBase = BaseEntity(level);

        return () => ({
            ...callBase(),
            _constructor_: Hero,
            levelUp: function() {
                return new this._constructor_(callBase().getAttr().lv + 1);
            }
        });
    }

    return Hero;
};

