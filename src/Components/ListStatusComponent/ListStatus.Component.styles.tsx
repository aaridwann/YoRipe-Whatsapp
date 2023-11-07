import { StyleSheet } from 'react-native';

import { scaleHeight, scaleWidth } from '../../Utils/Size/size.utils';
import Constants from '../../Constants/Constants';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: scaleWidth(8),
        marginHorizontal: scaleWidth(10),
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: scaleWidth(50),
        height: scaleWidth(50),
        borderRadius: scaleWidth(50) / 2,
        borderColor: '#c9c9c9',
        borderWidth: 2,
    },
    textName: {
        fontWeight: '700',
    },
    textDate: {
        color: '#a0a0a0',
        fontWeight: '700',
        marginTop: scaleHeight(4),
        fontSize: scaleWidth(10),
    },
    separator: {
        fontWeight: '600',
        color: Constants.Colors.GREEN,
        padding: scaleWidth(10),
        backgroundColor: '#e9e9e9',
    },
    separatorLine: { height: 1, backgroundColor: '#e6e6e6' },
});
