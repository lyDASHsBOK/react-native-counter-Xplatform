'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Stage from '../components/stage';
import heroActions from '../actions/hero'

class GameApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { battle, heroActions } = this.props;
        return (
            <Stage
                battle={battle}
                heroActions={heroActions}/>
        );
    }
}


export default connect(state => ({
        battle: state.battle
    }),
    (dispatch) => ({
        heroActions: bindActionCreators(heroActions, dispatch)
    })
)(GameApp);
