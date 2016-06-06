import React, {
    Component,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import btnStyles from '../styles/button';
import viewStyles from '../styles/view';
import HeroPanel from './heroPanel';


export default class Stage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { battle, heroActions } = this.props;
        const monster = battle.callMonster().getAttr();

        return (
            <View style={viewStyles.stage}>
                <HeroPanel callHero={battle.callHero}/>
                <View style={viewStyles.panel}>
                    <Text>{monster.HP} / {monster.maxHP}</Text>
                    <TouchableOpacity onPress={heroActions.hit} style={btnStyles.hit}>
                        <Text>Hit</Text>
                    </TouchableOpacity>
                </View>
                <View style={viewStyles.panel}/>
                <View style={viewStyles.panel}/>
            </View>
        );
    }
}
