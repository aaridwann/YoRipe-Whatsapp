import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ionicons from '@expo/vector-icons/Ionicons';

import Constants from '../../Constants/Constants';
import {
    scaleHeight,
    scaleSize,
    scaleWidth,
} from '../../Utils/Size/size.utils';

const _renderCamera = (onPress: VoidFunction): React.ReactNode => (
    <TouchableOpacity onPress={onPress}>
        <Ionicons
            style={styles.smileIcon}
            name="camera"
            size={scaleSize(20)}
            color="gray"
        />
    </TouchableOpacity>
);

const _renderAttachMent = (onPress: VoidFunction): React.ReactNode => (
    <TouchableOpacity onPress={onPress}>
        <Ionicons
            style={styles.attachment}
            name="attach-outline"
            size={scaleSize(20)}
            color="gray"
        />
    </TouchableOpacity>
);

const _renderImagePreview = (props: InputInterface) => (
    <Animatable.View
        animation={'slideInUp'}
        style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}
    >
        <TouchableOpacity
            onPress={props.discardImg}
            style={{
                position: 'absolute',
                right: scaleWidth(-10),
                zIndex: 1,
                top: scaleWidth(-10),
            }}
        >
            <Ionicons
                style={{}}
                name="close-circle"
                size={scaleSize(20)}
                color={Constants.Colors.GREEN_NOTIFICATION}
            />
        </TouchableOpacity>
        <Image
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: scaleHeight(10),
                width: scaleWidth(80),
                height: scaleHeight(80),
            }}
            source={{ uri: props.uploadImageUri }}
        />
    </Animatable.View>
);

const _renderInput = (props: InputInterface): React.ReactNode => (
    <View style={styles.inputWrapper}>
        {props.uploadImageUri && _renderImagePreview(props)}
        <TextInput
            value={props.value}
            onSubmitEditing={props.onSubmit}
            onChangeText={props.onChange}
            placeholder="Type a message"
            style={styles.inputText}
        />
    </View>
);

const _renderIcon = (onPress: VoidFunction) => (
    <TouchableOpacity onPress={onPress}>
        <Ionicons
            style={styles.smileIcon}
            name="happy-outline"
            size={scaleSize(20)}
            color="gray"
        />
    </TouchableOpacity>
);

type ChangeType = (value: string) => void;

interface InputInterface {
    onChange: ChangeType;
    onCamera?: VoidFunction;
    onAttach?: VoidFunction;
    onEmoji?: VoidFunction;
    onSubmit: VoidFunction;
    discardImg?: VoidFunction;
    value: string;
    uploadImageUri?: string;
}

const InputComponent: React.FC<InputInterface> = (props) => {
    const isImageExist = !!props.uploadImageUri;

    return (
        <View style={styles.container(isImageExist)}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: isImageExist ? 'flex-end' : 'center',
                }}
            >
                {_renderIcon(props.onEmoji)}
                {_renderInput(props)}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {_renderAttachMent(props.onAttach)}
                {_renderCamera(props.onCamera)}
            </View>
        </View>
    );
};

export default InputComponent;

const styles = StyleSheet.create({
    container: (isImageExist: boolean) => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: scaleSize(15),
        paddingHorizontal: scaleWidth(10),
        alignItems: isImageExist ? 'flex-end' : 'center',
        backgroundColor: Constants.Colors.WHITE,
        minHeight: scaleHeight(35),
        paddingVertical: isImageExist && scaleHeight(20),
        marginHorizontal: scaleWidth(5),
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    }),
    items: {
        marginHorizontal: scaleSize(2),
    },
    smileIcon: {
        marginHorizontal: scaleSize(2),
    },
    attachment: {
        marginHorizontal: scaleSize(2),
    },
    inputText: {
        flex: 1,
        marginHorizontal: scaleSize(2),
        color: 'gray',
    },
    inputWrapper: {
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        marginLeft: scaleWidth(10),
    },
});
