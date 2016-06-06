import React, {
    StyleSheet,
    Component,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    button_hit: {
        width: 70,
        height: 130,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
});

export default class Stage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { battle, heroActions } = this.props;
        const hero = battle.hero.getAttr();
        const monster = battle.monster.getAttr();

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Lv. {hero.lv}</Text>
                <Text>{monster.HP} / {monster.maxHP}</Text>
                <TouchableOpacity onPress={heroActions.hit} style={styles.button_hit}>
                    <Text>Hit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
