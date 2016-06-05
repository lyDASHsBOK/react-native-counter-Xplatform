import counterAdd from './counter';
import counterDec from './counterDec';
import cleaner from './cleaner';
import fixer from './prefixer';
import {makeEntree, exit} from '../utils/reducerHelper';
import {compose} from 'redux';

const initialState = {
    count: '0'
};

var counter = compose(exit, cleaner, counterAdd, counterDec, makeEntree(initialState));

export {
    counter
};
