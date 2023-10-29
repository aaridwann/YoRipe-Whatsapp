import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { style } from './OptionsMenu.Component.Styles';
import { Props } from './OptionsMenu.Types';

const _renderListMenu = (props: Props) =>
    props.list.map((menu) => (
        <React.Fragment key={menu}>
            <TouchableOpacity onPress={() => props.select(menu)}>
                <Text style={style.listMenu}>{menu}</Text>
            </TouchableOpacity>
        </React.Fragment>
    ));

const OptionsMenu = (props: Props) => (
    <Animatable.View
        useNativeDriver={true}
        duration={500}
        animation={props.isShow ? 'fadeInRightBig' : 'fadeOutRightBig'}
        style={style.container}
    >
        {_renderListMenu(props)}
    </Animatable.View>
);

export default OptionsMenu;

OptionsMenu.defaultProps = {
    isShow: false,
};
