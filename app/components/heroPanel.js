/**
 * Created by feitian on 6/6/16.
 */

import React, {
    Component,
    View,
    Text
} from 'react-native';
import viewStyles from '../styles/view';

export default class HeroPanel extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { callHero } = this.props;
        const hero = callHero().getAttr();

        return (
            <View style={viewStyles.panel}>
                <Text>Lv. {hero.lv}</Text>
                <Text>ATK. {hero.atk}</Text>
            </View>
        );
    }
}

