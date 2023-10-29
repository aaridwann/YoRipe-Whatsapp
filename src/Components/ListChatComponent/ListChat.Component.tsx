import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scaleSize, scaleWidth } from '../../Utils/Size/size.utils';
import Constants from '../../Constants/Constants';
import { Image } from 'react-native-animatable';

interface ListData {
    name: string;
    image: string;
    latestChat: string;
    date: string;
    notification: number;
    onPress?: VoidFunction;
}

const _renderNameMessage = (data: ListData) => (
    <View style={styles.nameWrapper}>
        <Text numberOfLines={1} style={styles.nameText}>
            {data.name}
        </Text>
        <Text numberOfLines={1} style={styles.chatText}>
            {data.latestChat}
        </Text>
    </View>
);

const _renderLeftSide = (data: ListData) => (
    <View style={styles.leftSide}>
        <Image style={styles.img} source={{ uri: data.image }} />
        {_renderNameMessage(data)}
    </View>
);

const _renderTime = (data: ListData) => (
    <Text style={styles.time}>{data.date}</Text>
);

const _renderNotificationIcon = (data: ListData) => (
    <View style={styles.notificationIcon}>
        <Text style={styles.notificationText}>{data.notification}</Text>
    </View>
);

const _renderRightSide = (data: ListData) => (
    <View style={styles.rightSide}>
        {_renderTime(data)}
        {_renderNotificationIcon(data)}
    </View>
);

const _renderListWrapper = (data: ListData) => (
    <TouchableOpacity onPress={data.onPress} style={styles.listWrapper}>
        {_renderLeftSide(data)}
        {_renderRightSide(data)}
    </TouchableOpacity>
);

const ListChatComponent = (props: ListData) => _renderListWrapper(props);

export default ListChatComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: scaleWidth(5),
    },
    listWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: scaleSize(8),
        paddingVertical: scaleSize(12),
        justifyContent: 'space-between',
        borderBottomColor: '#b1b1b1',
        borderBottomWidth: 0.2,
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignContent: 'flex-start',
        width: scaleWidth(60),
        height: scaleWidth(60),
        borderRadius: scaleWidth(60) / 2,
    },
    nameWrapper: {
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flexDirection: 'column',
        marginHorizontal: scaleWidth(10),
    },
    nameText: {
        color: Constants.Colors.GREY,
        fontSize: scaleSize(15),
        flex: 0.3,
        maxWidth: scaleWidth(220),
        fontWeight: '700',
    },
    chatText: {
        fontSize: scaleSize(10),
        color: Constants.Colors.GREY,
        fontWeight: '600',
        flexWrap: 'nowrap',
        maxWidth: scaleWidth(200),
    },
    time: {
        fontSize: scaleSize(12),
        fontWeight: '600',
        flex: 1,
        color: Constants.Colors.GREEN_NOTIFICATION,
    },
    notificationIcon: {
        backgroundColor: Constants.Colors.GREEN_NOTIFICATION,
        width: scaleSize(20),
        height: scaleSize(20),
        borderRadius: scaleSize(20) / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationText: {
        fontWeight: '500',
        color: Constants.Colors.WHITE,
    },
    rightSide: {},
});
