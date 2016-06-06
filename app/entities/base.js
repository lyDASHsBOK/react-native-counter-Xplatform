/**
 * Created by feitian on 6/7/16.
 */


export default function Base(level = 1) {
    var attr = {
        lv: level,
        atk: level
    };
    return () => ({
        _constructor_: Base,
        getAttr: () => ({...attr})
    })
};
