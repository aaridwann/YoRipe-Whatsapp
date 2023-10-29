import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import TopBarNavigation from '../../Components/TopBarNavigation/TopBarNavigation.Component';
import Constants from '../../Constants/Constants';
import { scaleSize } from '../../Utils/Size/size.utils';
import TabScreen from '../../Navigation/TabNavigator/TabNavigator';

const optionList = ['setting'];

/**
 *
 * @returns {React.ReactNode} - title of header
 */
const _renderLeftComponent = (): React.ReactNode => (
    <Text style={styles.title}>Whatsapp</Text>
);

/**
 *
 * @returns {React.ReactNode} Render Top bar
 */
const _renderTopBar = (): React.ReactNode => (
    <TopBarNavigation
        leftHeaderComponent={_renderLeftComponent()}
        optionsList={optionList}
        optionsSelected={(val) => console.log(val)}
        isShowSearch={false}
    />
);

const HomeContainer = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            {_renderTopBar()}
            <TabScreen />
        </SafeAreaView>
    );
};

export default HomeContainer;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: Constants.Colors.GREEN_MEDIUM_DARK,
    },
    title: {
        color: Constants.Colors.WHITE,
        fontSize: scaleSize(18),
        marginLeft: scaleSize(10),
        fontWeight: '700',
    },
    rightHeaderWrapper: {},
});
