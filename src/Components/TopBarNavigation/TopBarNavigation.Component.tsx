import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import Constants from '../../Constants/Constants';
import { scaleSize } from '../../Utils/Size/size.utils';
import OptionsMenu from '../OptionsMenu/OptionsMenu.Component';
import { Props, TopBarHooksInterface } from './TopBarNavigation.Types';
import TopBarNavigationHooks from './TopBarNavigation.Hooks';
import SearchingBar from './SearchingBar/SearchingBar.Component';
import { styles } from './TopBarNavigation.Styles';

const _renderOptionsMenu = (hooks: TopBarHooksInterface, props: Props) => (
    <Animatable.View transition={'right'} style={styles.optionsMenuWrapper}>
        {hooks.state.isShowOptions && (
            <OptionsMenu
                isShow={hooks.state.isShowOptions}
                select={(val) => hooks.onSelectOptionHandler(val)}
                list={props.optionsList}
            />
        )}
    </Animatable.View>
);

const _renderBackIcon = (hooks: TopBarHooksInterface, props: Props) => (
    <TouchableOpacity onPress={props.onBack}>
        <Ionicons
            name="arrow-back-outline"
            size={scaleSize(25)}
            color={Constants.Colors.WHITE}
        />
    </TouchableOpacity>
);

const _renderOptionsIcon = (hooks: TopBarHooksInterface, props: Props) => (
    <React.Fragment>
        <TouchableOpacity
            style={styles.icon}
            onPress={() => hooks.showOptionsHandler()}
        >
            <Ionicons
                name="ellipsis-vertical"
                size={scaleSize(18)}
                color={Constants.Colors.WHITE}
            />
        </TouchableOpacity>
        {_renderOptionsMenu(hooks, props)}
    </React.Fragment>
);

const _renderRightSide = (hooks: TopBarHooksInterface, props: Props) => {
    return (
        <View style={styles.leftWrapper}>
            {props.rightHeaderComponent}
            {props.withOptions && _renderOptionsIcon(hooks, props)}
        </View>
    );
};

const _renderLeftSide = (hooks: TopBarHooksInterface, props: Props) => {
    return (
        <View style={styles.leftWrapper}>
            {props.backIcon && _renderBackIcon(hooks, props)}
            {props.leftHeaderComponent}
        </View>
    );
};

const _renderNavbarRegular = (props: Props, hooks: TopBarHooksInterface) => (
    <View style={styles.navbarRegularWrapper} accessibilityLabel="Navbar_Regular">
        {_renderLeftSide(hooks, props)}
        {_renderRightSide(hooks, props)}
    </View>
);

const _renderSearchingBar = (props: Props, hooks: TopBarHooksInterface) => (
    <SearchingBar
        isShow={props.isShowSearch}
        onSearch={props.inputSearchCallback}
        onBack={hooks.backHandler}
    />
);

const TopBarNavigation = (props: Props) => {
    const Hooks: TopBarHooksInterface = TopBarNavigationHooks(props);

    return (
        <View style={styles.container}>
            {props.isShowSearch
                ? _renderSearchingBar(props, Hooks)
                : _renderNavbarRegular(props, Hooks)}
        </View>
    );
};

export default TopBarNavigation;

TopBarNavigation.defaultProps = {
    withOptions: true,
    leftHeaderComponent: undefined,
    rightHeaderComponent: undefined,
    backIcon: false,
};
