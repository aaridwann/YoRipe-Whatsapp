import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Constants from '../../../Constants/Constants';
import { scaleSize } from '../../../Utils/Size/size.utils';
import { HooksInterface, ListData, Props } from '../ListChat.Types';
import { styles } from './Header.Component.Styles';

/**
 *
 * @param {HooksInterface} hooks
 * @returns {React.ReactNode}
 */
const _renderCallIcon = (hooks: HooksInterface): React.ReactNode => (
    <TouchableOpacity style={styles.icon} onPress={() => hooks.onCallHandler}>
        <Ionicons
            name="call"
            size={scaleSize(18)}
            color={Constants.Colors.WHITE}
        />
    </TouchableOpacity>
);

/**
 *
 * @param {HooksInterface} hooks
 * @returns {React.ReactNode}
 */
const _renderVideoIcon = (hooks: HooksInterface): React.ReactNode => (
    <TouchableOpacity style={styles.icon} onPress={() => hooks.onVideoHandler}>
        <Ionicons
            name="videocam"
            size={scaleSize(18)}
            color={Constants.Colors.WHITE}
        />
    </TouchableOpacity>
);

/**
 * Render Name for Left header Props for Top bar navigation
 * @param {ListData} params - Params of chat room
 * @returns {React.ReactNode} - Render name Render Header Left TopBarNavigation
 */
const _renderName = (params: ListData): React.ReactNode => (
    <View>
        <Text style={styles.name}>{params.name}</Text>
        <Text style={styles.lastSeen}>Last seen today 11:00 AM</Text>
    </View>
);

/**
 * Render Profile Left header Props for Top bar navigation
 * @param {HooksInterface} hooks - Hooks of Chat room
 * @param {Props} props - Props of chat room
 * @returns {React.ReactNode} - Render Profile Render Header Left TopBarNavigation
 */
const _renderProfile = (
    hooks: HooksInterface,
    props: Props
): React.ReactNode => {
    const { params } = props.route;

    return (
        <TouchableOpacity
            style={styles.profile}
            onPress={hooks.onProfileHandler}
        >
            <Image style={styles.avatar} source={{ uri: params.image }} />
            {_renderName(params)}
        </TouchableOpacity>
    );
};

/**
 *
 * @param {HooksInterface} hooks - Hooks Chatroom
 * @returns {React.ReactNode}
 */
const RightHeaderChatRoom = (hooks: HooksInterface): React.ReactNode => (
    <View style={{ flexDirection: 'row' }}>
        {_renderCallIcon(hooks)}
        {_renderVideoIcon(hooks)}
    </View>
);

/**
 * Render Left header for chat room page
 *
 * @param {HooksInterface} hooks - Hooke of chat room
 * @param {Props} props - Props of chat room
 * @returns
 */
const LeftHeaderChatRoom = (
    hooks: HooksInterface,
    props: Props
): React.ReactNode => (
    <View style={styles.leftWrapper}>{_renderProfile(hooks, props)}</View>
);

export { RightHeaderChatRoom, LeftHeaderChatRoom };
