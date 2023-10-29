import { StyleSheet } from 'react-native';

import { scaleSize } from '../../Utils/Size/size.utils';
import Constants from '../../Constants/Constants';

export const style = StyleSheet.create({
    container: {
        padding: scaleSize(8),
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Constants.Colors.GREEN,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4,
        borderRadius: 5,
    },
    listMenu: {
        margin: scaleSize(8),
        fontWeight: '600',
        fontSize: scaleSize(13),
        color: Constants.Colors.WHITE,
    },
});
