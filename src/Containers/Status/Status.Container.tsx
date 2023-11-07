import React from 'react';
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Modal,
    SafeAreaView,
    Image,
    ViewStyle,
    TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ionicons from '@expo/vector-icons/Ionicons';

import { scaleSize, scaleWidth } from '../../Utils/Size/size.utils';
import Constants from '../../Constants/Constants';
import { mapUserGenerator } from '../ChatList/ChatList.Utils';
import { ListData } from '../ChatRoom/ListChat.Types';
import ListStatus from '../../Components/ListStatusComponent/ListStatus.Component';

interface StateInterface {
    image: string;
    isShowModal: boolean;
}

const mockStory: ListData = {
    image:
        'https://i.pinimg.com/564x/44/a9/0d/44a90dfa9f4e8efe32b0070d49f9de30.jpg',
    name: 'Ridwan',
    date: 'Today 01.11',
    latestChat: '',
    notification: 0,
    phone: '',
};
const mockRecentUpdate: ListData[] = mapUserGenerator(4);
const mockViewedUpdate: ListData[] = mapUserGenerator(10);

const _getProgressView = (
    state: StateInterface,
    closeModal: VoidFunction,
    styles
) => ({
    onAnimationEnd: () => closeModal(),
    useNativeDriver: true,
    animation: state.isShowModal ? 'fadeInLeftBig' : 'slideOutRight',
    duration: 10000,
    style: styles.progressBar(state.isShowModal),
});

const _getModalProps = (state: StateInterface, closeModal: VoidFunction) => ({
    animationType: 'slide',
    hardwareAccelerated: true,
    transparent: true,
    visible: state.isShowModal,
    onDismiss: () => closeModal(),
    onRequestClose: () => closeModal(),
});

const _renderSeparator = (name: string) => (
    <Text style={styles.separator}>{name}</Text>
);
const _renderSeparatorLine = () => <View style={styles.separatorLine} />;

const _renderCloseButton = (closeModal: VoidFunction) => (
    <TouchableOpacity accessibilityLabel='Close_Button' style={styles.closeButton} onPress={() => closeModal()}>
        <Ionicons
            name="close"
            size={scaleSize(25)}
            color={Constants.Colors.WHITE}
        />
    </TouchableOpacity>
);

const _renderContentModal = (
    state: StateInterface,
    closeModal: VoidFunction
) => (
    <React.Fragment>
        <Animatable.View {..._getProgressView(state, closeModal, styles)} />
        <View style={styles.imageWrapper}>
            {_renderCloseButton(closeModal)}
            <Image
                resizeMode="contain"
                style={styles.image}
                source={{ uri: state.image }}
            />
        </View>
    </React.Fragment>
);

const _renderModal = (state: StateInterface, closeModal: VoidFunction) => (
    <Modal accessibilityLabel="Modal" {..._getModalProps(state, closeModal)}>
        <SafeAreaView style={styles.modalContainer}>
            {_renderContentModal(state, closeModal)}
        </SafeAreaView>
    </Modal>
);

const StatusContainer = () => {
    const [state, setState] = React.useState({
        image: '',
        isShowModal: false,
    });

    const pressHandler = (img: string) =>
        setState((prev) => ({
            ...prev,
            image: img,
            isShowModal: true,
            duration: 0,
        }));

    const closeModalHandler = () =>
        setState((prev) => ({ ...prev, isShowModal: false }));

    return (
        <ScrollView>
            <ListStatus
                data={mockStory}
                withOptions
                onPress={(img) => pressHandler(img)}
            />
            {_renderSeparator('Recent Update')}
            <FlatList
                ItemSeparatorComponent={() => _renderSeparatorLine()}
                data={mockRecentUpdate}
                renderItem={({ item }) => (
                    <ListStatus
                        onPress={(img) => pressHandler(img)}
                        data={item}
                    />
                )}
            />
            {_renderSeparator('Viewed updates')}
            <FlatList
                ItemSeparatorComponent={() => _renderSeparatorLine()}
                data={mockViewedUpdate}
                renderItem={({ item }) => (
                    <ListStatus
                        onPress={(img) => pressHandler(img)}
                        data={item}
                    />
                )}
            />
            {_renderModal(state, closeModalHandler)}
        </ScrollView>
    );
};

export default StatusContainer;

const styles = StyleSheet.create({
    separator: {
        fontWeight: '600',
        color: Constants.Colors.GREEN,
        padding: scaleWidth(10),
        backgroundColor: '#e9e9e9',
    },
    separatorLine: { height: 1, backgroundColor: '#e6e6e6' },
    modalContainer: { width: '100%', height: '100%' },
    progressBar: (isShowModal: boolean): ViewStyle => ({
        width: '100%',
        left: isShowModal ? 0 : -2000,
        height: 5,
        backgroundColor: 'white',
    }),
    imageWrapper: {
        borderTopWidth: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.754)',
    },
    image: { height: '100%' },
    closeButton: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
        margin: scaleWidth(8),
    },
});
