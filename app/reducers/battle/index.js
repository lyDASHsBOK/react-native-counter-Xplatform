/**
 * Created by feitian on 6/6/16.
 */
import {compose} from 'redux';
import monster from './monster';
import hero from './hero';
import HeroEntity from '../../entities/hero';
import MonsterEntity from '../../entities/monster';
import {makeEntree, exit} from '../../utils/reducerHelper';

export default compose(exit, hero, monster, makeEntree({
    hero: new HeroEntity(),
    monster: new MonsterEntity()
}));