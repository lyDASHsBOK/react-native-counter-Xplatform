/**
 * Created by feitian on 6/6/16.
 */
import {compose} from 'redux';
import monster from './monster';
import hero from './hero';
import Entity from '../../entities/base';
import HeroRole from '../../entities/roles/hero';
import MonsterRole from '../../entities/roles/monster';
import WithPet from '../../entities/roles/withPet';
import {makeEntree, exit} from '../../utils/reducerHelper';

var Boss = compose(MonsterRole, HeroRole);
var Hunter = compose(WithPet, HeroRole);

export default compose(exit, hero, monster, makeEntree({
    callHero: Hunter(Entity)(),
    callMonster: Boss(Entity)()
}));