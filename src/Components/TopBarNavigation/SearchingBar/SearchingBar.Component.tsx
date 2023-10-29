import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ionicons from '@expo/vector-icons/Ionicons';

import Constants from '../../../Constants/Constants';
import { scaleSize } from '../../../Utils/Size/size.utils';
import { Props } from './SearchingBar.Component.Types';
import { styles } from './SearchingBar.Component.Styles';

const _renderInput = (props: Props) => (
    <View style={styles.inputContainer}>
        <TextInput
            accessibilityLabel="Navbar_Searching_Input"
            placeholder="Find a message"
            placeholderTextColor={'white'}
            onChangeText={(e) => props.onSearch(e)}
            style={styles.input}
        />
    </View>
);

const _renderBackIcon = (props: Props) => (
    <TouchableOpacity
        accessibilityLabel="Navbar_Searching_Back_Button"
        onPress={props.onBack}
        style={{ marginHorizontal: scaleSize(8) }}
    >
        <Ionicons
            name="arrow-back-outline"
            size={scaleSize(25)}
            color={Constants.Colors.WHITE}
        />
    </TouchableOpacity>
);

const _renderRightSide = () => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <TouchableOpacity style={{ marginHorizontal: scaleSize(8) }}>
            <Ionicons
                name="chevron-up"
                size={scaleSize(25)}
                color={Constants.Colors.WHITE}
            />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: scaleSize(8) }}>
            <Ionicons
                name="chevron-down"
                size={scaleSize(25)}
                color={Constants.Colors.WHITE}
            />
        </TouchableOpacity>
    </View>
);

const _renderLeftSide = (props: Props) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        {_renderBackIcon(props)}
        {_renderInput(props)}
    </View>
);

const SearchingBar = (props: Props) => {
    return (
        <Animatable.View
            accessibilityLabel="Navbar_Searching"
            animation={'bounceInDown'}
            style={styles.container}
        >
            {_renderLeftSide(props)}
            {_renderRightSide()}
        </Animatable.View>
    );
};

export default SearchingBar;
