import { StyleSheet } from 'react-native';
import {
    scaleHeight,
    scaleSize,
    scaleWidth,
} from '../../Utils/Size/size.utils';
import Constants from '../../Constants/Constants';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scaleWidth(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: scaleHeight(60),
        backgroundColor: Constants.Colors.GREEN,
        color: Constants.Colors.WHITE,
        zIndex: 2,
    },
    leftWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    optionsMenuWrapper: {
        position: 'absolute',
        top: scaleHeight(30),
        left: scaleWidth(-150),
    },
    navbarRegularWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});
