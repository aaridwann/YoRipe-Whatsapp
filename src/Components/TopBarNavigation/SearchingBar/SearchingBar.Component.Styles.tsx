import { StyleSheet } from 'react-native';

import Constants from '../../../Constants/Constants';
import { scaleSize, scaleWidth } from '../../../Utils/Size/size.utils';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 5,
        backgroundColor: Constants.Colors.GREEN_MEDIUM_DARK,
        borderRadius: 20,
    },
    inputContainer: {
        minWidth: scaleWidth(260),
        padding: scaleSize(6),
        borderRadius: 8,
    },
    input: {
        color: Constants.Colors.WHITE,
    },
});
