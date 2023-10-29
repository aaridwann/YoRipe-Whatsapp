import { StyleSheet } from 'react-native';

import {
    scaleHeight,
    scaleSize,
    scaleWidth,
} from '../../Utils/Size/size.utils';
import Constants from '../../Constants/Constants';

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Constants.Colors.GREEN_MEDIUM_DARK,
    },
    flatListWrapper: {
        marginBottom: scaleHeight(100),
    },
    FlatList: {
        flexDirection: 'column-reverse',
        paddingTop: scaleHeight(20),
        paddingBottom: scaleHeight(20),
    },
    image: {
        width: '100%',
        height: '100%',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: scaleWidth(10),
    },
    input: {
        width: '90%',
    },
    enterButton: {
        width: scaleWidth(40),
        height: scaleWidth(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleWidth(40) / 2,
        backgroundColor: Constants.Colors.GREEN,
    },
    keyboardAvoid: {
        flex: 1,
        bottom: scaleHeight(20),
        width: '100%',
        position: 'absolute',
    },
    notFoundWrapper: {
        backgroundColor: Constants.Colors.GREEN,
        alignSelf: 'center',
        marginTop: scaleHeight(20),
        paddingHorizontal: scaleSize(10),
        paddingVertical: scaleSize(8),
        borderRadius: 8,
    },
    notFound: {
        color: Constants.Colors.WHITE,
        fontSize: scaleSize(12),
    },
    avatar: {
        marginHorizontal: scaleWidth(4),
        width: scaleSize(30),
        height: scaleSize(30),
        borderRadius: scaleSize(30) / 2,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        color: Constants.Colors.WHITE,
        fontSize: scaleSize(15),
        fontWeight: '500',
    },
    lastSeen: {
        color: Constants.Colors.WHITE,
        fontSize: scaleSize(10),
        opacity: 0.5,
    },
    icon: {
        marginHorizontal: scaleSize(4),
    },
});

export default styles;
