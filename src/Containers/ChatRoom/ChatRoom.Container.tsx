import React from 'react';
import {
    FlatList,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import styles from './ListChat.Styles';
import TopBarNavigation from '../../Components/TopBarNavigation/TopBarNavigation.Component';
import Assets from '../../Assets/Assets';
import InputComponent from '../../Components/InputChat/Input.Component';
import { scaleHeight, scaleSize } from '../../Utils/Size/size.utils';
import ChatItems from '../../Components/ChatItems/ChatItems.Component';
import { ChatDataType, HooksInterface, Items, Props } from './ListChat.Types';
import { menuList } from './ListChat.Configs';
import HooksState from './ListChat.Hooks';
import {
    RightHeaderChatRoom,
    LeftHeaderChatRoom,
} from './Header/Header.Component';

/**
 *
 * @param {HooksInterface} hooks - Hooke List chat
 * @returns {React.ReactNode} - Render Enter button
 */
const _renderEnterButton = (hooks: HooksInterface): React.ReactNode => {
    const { input, uploadImgUri } = hooks.state;
    const icon = input || uploadImgUri ? 'send' : 'mic';

    return (
        <TouchableOpacity
            onPress={hooks.submitHandler}
            style={styles.enterButton}
        >
            <Ionicons name={icon} size={scaleSize(18)} color="white" />
        </TouchableOpacity>
    );
};

/**
 *
 * @param {HooksInterface} hooks - Hooke List chat
 * @returns {React.ReactNode} - Render Enter button
 */
const _renderInput = (hooks: HooksInterface): React.ReactNode => (
    <View style={styles.input}>
        <InputComponent
            discardImg={hooks.discardImg}
            uploadImageUri={hooks.state.uploadImgUri}
            onAttach={hooks.attachHandler}
            value={hooks.state.input}
            onSubmit={hooks.submitHandler}
            onChange={hooks.inputHandler}
        />
    </View>
);

/**
 *
 * @param {HooksInterface} hooks - Hooke List chat
 * @returns {React.ReactNode} - Render Enter button
 */
const _inputWrapper = (hooks: HooksInterface): React.ReactNode => (
    <KeyboardAvoidingView
        keyboardVerticalOffset={scaleHeight(50)}
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        enabled
    >
        <View style={styles.inputWrapper}>
            {_renderInput(hooks)}
            {_renderEnterButton(hooks)}
        </View>
    </KeyboardAvoidingView>
);

/**
 *
 * @param {item} item - Item each data
 * @param {HooksInterface} hooks - Hooks list chat
 * @returns {React.ReactNode}
 */
const _renderChat = (item: Items, hooks: HooksInterface): React.ReactNode => {
    const isOpenOptions = hooks.state.isOpenOptionsId === item.id;

    return (
        <ChatItems
            onPress={() => hooks.clearInfo(item.id)}
            onLongPress={() => hooks.infoHandler(item.id)}
            isOpenOption={isOpenOptions}
            {...item}
        />
    );
};

/**
 * Wrapper background
 *
 * @param {React.ReactNode} - Children
 * @returns {React.ReactNode} - Render Wrapper for background
 */
const Background = ({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode => (
    <SafeAreaView style={styles.safeAreaView}>
        <ImageBackground
            source={Assets.IMAGE.WA_BG}
            resizeMode="repeat"
            style={styles.image}
        >
            {children}
        </ImageBackground>
    </SafeAreaView>
);

const _renderNotFound = (): React.ReactNode => (
    <Animatable.View
        duration={1500}
        animation={'bounceInDown'}
        style={styles.notFoundWrapper}
    >
        <Text style={styles.notFound}>Message not found</Text>
    </Animatable.View>
);

/**
 * Get Props FlatList
 * @param {ChatDataType} showingChat - Filter or Chat data render
 * @param {HooksInterface} hooks - Hooks of Chatroom
 * @returns {Object}
 */
const _getPropsFlatlist = (
    showingChat: ChatDataType[],
    hooks: HooksInterface
) => ({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: styles.FlatList,
    data: showingChat,
    keyboardShouldPersistTaps: 'handled',
    scrollEnabled: true,
    keyboardDismissMode: 'interactive',
    contentInsetAdjustmentBehavior: 'always',
    inverted: true,
    renderItem: ({ item }: { item: Items }) => _renderChat(item, hooks),
});

/**
 *
 * @param {HooksInterface} hooks - Hooks of list chat
 * @returns {React.ReactNode} - Render Flat list
 */
const _renderFlatList = (hooks: HooksInterface): React.ReactNode => {
    const { chatData, chatFilter } = hooks.state;
    const showingChat = chatFilter?.length > 0 ? chatFilter : chatData;
    const renderData = !chatFilter ? (
        _renderNotFound()
    ) : (
        <FlatList {..._getPropsFlatlist(showingChat, hooks)} />
    );

    return (
        <KeyboardAvoidingView
            style={styles.flatListWrapper}
            keyboardVerticalOffset={scaleHeight(100)}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            {renderData}
        </KeyboardAvoidingView>
    );
};

/**
 * Get Props for topBarNavigation
 * @param {HooksInterface} hooks - Hooks of chat list
 * @param {Props} props - Props of chatList
 * @returns {Object}
 */
const getTopBarNavigationProps = (hooks: HooksInterface, props: Props) => ({
    leftHeaderComponent: LeftHeaderChatRoom(hooks, props),
    rightHeaderComponent: RightHeaderChatRoom(hooks),
    backIcon: true,
    optionsList: menuList,
    optionsSelected: (menu: string) => {
        if (menu === 'Cari') hooks.showSearchToggle();
    },
    isShowSearch: hooks.state.isShowSearch,
    inputSearchCallback: hooks.searchMessageHandler,
    onBack: hooks.backHandler,
});

/**
 *
 * @returns {React.ReactNode} Render List chat component
 */
const ChatRoomContainer = (props: Props): React.ReactNode => {
    const hooks = HooksState(props);

    return (
        <Background>
            <TopBarNavigation {...getTopBarNavigationProps(hooks, props)} />
            {_renderFlatList(hooks)}
            {_inputWrapper(hooks)}
        </Background>
    );
};

export default ChatRoomContainer;
