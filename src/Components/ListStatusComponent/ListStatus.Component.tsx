import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import noop from 'lodash/noop';

import { styles } from './ListStatus.Component.styles';
import { ListData } from '../../Containers/ChatRoom/ListChat.Types';
import Constants from '../../Constants/Constants';
import { scaleSize, scaleWidth } from '../../Utils/Size/size.utils';

interface ListStatusInterface {
    data: ListData;
    withOptions?: boolean;
    onPress: (img: string) => void;
}

const _renderImage = (props: ListStatusInterface) => (
    <TouchableOpacity accessibilityLabel='imageLabel' onPress={() => props.onPress(props.data.image)}>
        <Image style={styles.image} source={{ uri: props.data.image }} />
    </TouchableOpacity>
);

const _renderTextWrapper = (props: ListData) => (
    <View style={{ marginHorizontal: scaleWidth(10) }}>
        <Text style={styles.textName}>{props.name}</Text>
        <Text style={styles.textDate}>{`Today ${props.date}`}</Text>
    </View>
);

const _renderOptions = () => (
    <TouchableOpacity>
        <Ionicons
            name="ellipsis-horizontal"
            size={scaleSize(25)}
            color={Constants.Colors.GREEN}
        />
    </TouchableOpacity>
);

const ListStatus = (props: ListStatusInterface) => (
    <View style={styles.container}>
        <View style={styles.leftWrapper}>
            {_renderImage(props)}
            {_renderTextWrapper(props.data)}
        </View>
        {props.withOptions && _renderOptions()}
    </View>
);

export default ListStatus;

ListStatus.defaultProps = {
    data: {
        name: '',
        image: '',
        latestChat: '',
        date: '',
        notification: 0,
    },
    withOptions: false,
    onPress: noop,
};
