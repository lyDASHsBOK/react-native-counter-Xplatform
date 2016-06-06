/**
 * Created by feitian on 6/6/16.
 */

export default function Hero(level = 1) {
    var attr = {
        lv: level,
        atk: level
    };
    return {
        getAttr: () => (attr),
        levelUp: () => {
            return new Hero(attr.lv + 1);
        }
    }
};
