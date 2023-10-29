import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import Constants from '../../Constants/Constants';
import { scaleHeight, scaleSize, scaleWidth } from '../../Utils/Size/size.utils';

const {
    Colors: { LIGHT_GREEN, WHITE, GREY },
} = Constants;

export interface ChatItemsInterface {
    id?: string | number;
    onLongPress: VoidFunction;
    onPress: VoidFunction;
    img?: string;
    text: string;
    time: string;
    check?: boolean;
    type: 'author' | 'guest';
    isOpenOption?: boolean;
}
const emoji = ['😂', '🤣', '😊', '😇'];

const _renderText = (props: ChatItemsInterface) => (
    <Text style={styles.text}>{props.text}</Text>
);

const _renderCheckIcon = () => (
    <Ionicons
        style={styles.check}
        name="checkmark-done-outline"
        size={scaleSize(12)}
        color={Constants.Colors.BLUE_CHECK}
    />
);

const _renderTime = (props: ChatItemsInterface) => (
    <Text style={styles.time}>{props.time}</Text>
);

const _renderTimeCheck = (props: ChatItemsInterface) => (
    <View style={styles.timeCheckContainer}>
        {_renderTime(props)}
        {props.type !== 'author' && _renderCheckIcon()}
    </View>
);

const _renderBubbleOptions = (props: ChatItemsInterface) => (
    <Animatable.View
        animation={props.isOpenOption ? 'bounceIn' : 'bounceOut'}
        style={styles.bubbleOptions(_isAuthor(props))}
    >
        {emoji.map((emoji: string, key: number) => (
            <TouchableOpacity key={key}>
                <Text style={styles.emoji}>{emoji}</Text>
            </TouchableOpacity>
        ))}
    </Animatable.View>
);

const _isAuthor = (props: ChatItemsInterface) => props.type === 'author';

const _renderImageChat = (uri: string) => {
    
    return (
        <Image
            style={{ width: scaleWidth(250), height: scaleWidth(300), marginBottom: scaleHeight(10) }}
            source={{ uri: uri }}
        />
    );
};

/**
 *
 * @param {ChatItemsInterface} props - Props of chat
 * @returns {React.ReactNode} - Render chat items component
 */
const ChatItems = (props: ChatItemsInterface) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            style={styles.container(_isAuthor(props))}
        >
            {props.isOpenOption && _renderBubbleOptions(props)}
            <View>
                {props.img && _renderImageChat(props.img)}
                {_renderText(props)}
            </View>
            {_renderTimeCheck(props)}
        </TouchableOpacity>
    );
};

export default ChatItems;

export const styles = StyleSheet.create<any>({
    container: (type: boolean): ViewStyle => ({
        backgroundColor: type ? WHITE : LIGHT_GREEN,
        alignSelf: type ? 'flex-start' : 'flex-end',
        marginHorizontal: scaleSize(15),
        marginVertical: scaleSize(8),
        padding: scaleSize(10),
        borderRadius: scaleSize(10),
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 4,
    }),
    chatTailStyle: (type: boolean) => ({
        position: 'absolute',
        left: type ? scaleSize(10) : 'auto',
        right: type ? 'auto' : scaleSize(14),
        alignSelf: type ? 'flex-start' : 'flex-end',
        zIndex: 1,
        borderTopLeftRadius: 300, // Atur radius sudut kiri atas
        borderTopRightRadius: -260, // Atur radius sudut kanan atas
        borderBottomLeftRadius: 0, // Atur radius sudut kiri bawah
        borderBottomRightRadius: 200,
        marginTop: scaleSize(5),
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: scaleSize(10),
        borderRightWidth: type ? scaleSize(10) : 0,
        borderBottomWidth: scaleSize(10),
        borderLeftWidth: type ? 0 : scaleSize(10),
        backgroundColor: type ? WHITE : LIGHT_GREEN,
        borderColor: type ? WHITE : LIGHT_GREEN,
    }),
    text: {
        marginRight: scaleSize(15),
        color: GREY,
        fontWeight: '500',
        maxWidth: scaleSize(200),
    },
    time: {
        marginLeft: scaleSize(2),
        fontSize: scaleSize(7),
        color: 'gray',
        fontWeight: '400',
    },
    check: {
        marginHorizontal: scaleSize(2),
    },
    timeCheckContainer: {
        // backgroundColor:'red',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: scaleSize(6),
        justifyContent: 'center',
        alignItems: 'center',
    },
    bubbleOptions: (type: boolean): ViewStyle => ({
        position: 'absolute',
        right: !type ? 0 : 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleSize(15),
        padding: scaleSize(5),
        top: scaleSize(-35),
        backgroundColor: Constants.Colors.GREEN,
    }),
    emoji: {
        marginHorizontal: scaleSize(3),
        fontSize: scaleSize(18),
    },
});
