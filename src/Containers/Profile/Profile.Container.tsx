import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import TopBarNavigation from '../../Components/TopBarNavigation/TopBarNavigation.Component';
import Constants from '../../Constants/Constants';
import {
    scaleHeight,
    scaleSize,
    scaleWidth,
} from '../../Utils/Size/size.utils';
import { ListData } from '../ChatRoom/ListChat.Types';

const optionsList = ['setting'];
const mockBio =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

const mockImgGallery = [
    'https://i.pinimg.com/736x/5f/8e/b8/5f8eb83a5ff5dd0a6f363511b1ddb83d.jpg',
    'https://i.pinimg.com/564x/8f/8b/17/8f8b17bcdd1b6cbf6cb438502f26220a.jpg',
    'https://i.pinimg.com/564x/93/8a/85/938a85618e672d288deb440daf52102d.jpg',
    'https://i.pinimg.com/564x/92/20/d8/9220d86b5ffb31e1f4925ae04b1e9da0.jpg',
];

interface ProfileProps {
    navigation: {
        push: (key: string, param: object) => void;
        goBack: VoidFunction;
    };
    route: {
        params: ListData;
    };
}

type IconType = 'call' | 'videocam' | 'search';

/**
 * Get Props top bar navigation
 *
 * @returns object
 */
const _getPropsTopBarnNavigation = (props: ProfileProps) => ({
    backIcon: true,
    onBack: props.navigation.goBack,
    leftHeaderComponent: <View />,
    isShowSearch: false,
    optionsSelected: (val: string) => console.log(val),
    optionsList: optionsList,
});

/**
 * Render Common icon
 *
 * @param {IconType} iconName - Name of icon
 * @param {String } label - Description label of icon
 * @param {VoidFunction} onPress - Press handler
 * @returns {React.ReactNode} - Render common icon
 */
const _renderIcons = (
    iconName: IconType,
    label: string,
    onPress: VoidFunction
): React.ReactNode => (
    <TouchableOpacity onPress={onPress} style={styles.icon}>
        <Ionicons
            name={iconName}
            size={scaleSize(20)}
            color={Constants.Colors.WHITE}
        />
        <Text style={styles.labelIcon}>{label}</Text>
    </TouchableOpacity>
);

/**
 * Render image circle profile
 *
 * @param {ProfileProps} props - Props of profile
 * @returns {React.ReactNode} - Render image circle profile
 */
const _renderImage = (props: ProfileProps): React.ReactNode => (
    <Image style={styles.image} source={{ uri: props.route.params.image }} />
);

/**
 * Render icon wrapper
 *
 * @param {VoidFunction} onCall - method of pressed
 * @param {VoidFunction} onVideo - method of pressed
 * @param {VoidFunction} onSearch - method of pressed
 * @returns {React.ReactNode} - Icon Wrapper
 */
const _renderIconWrapper = (
    onCall: VoidFunction,
    onVideo: VoidFunction,
    onSearch: VoidFunction
) => (
    <View style={styles.iconWrapper}>
        {_renderIcons('call', 'Call', onCall)}
        {_renderIcons('videocam', 'Video', onVideo)}
        {_renderIcons('search', 'Search', onSearch)}
    </View>
);

/**
 * Render name user
 *
 * @param {ProfileProps} props - Props of profile
 * @returns {React.ReactNode} - Render name component
 */
const _renderName = (props: ProfileProps) => (
    <View style={styles.nameWrapper}>
        <Text style={styles.nameText}>{props.route.params.name}</Text>
        <Text numberOfLines={1} style={styles.numberPhone}>
            +62 821-722-001-11
        </Text>
    </View>
);

/**
 * Render Content
 * @returns {React.ReactNode}
 */
const _renderContent = (props: ProfileProps): React.ReactNode => (
    <View style={styles.container}>
        {_renderImage(props)}
        {_renderName(props)}
        {_renderIconWrapper()}
    </View>
);

/**
 * Render Bio
 *
 * @returns {React.ReactNode} - Render bio component
 */
const _renderBio = () => (
    <View style={styles.bioContainer}>
        <Text numberOfLines={3} style={styles.bioText}>
            {mockBio}
        </Text>
    </View>
);

/**
 * Render title of media content
 * @returns {React.ReactNode} - Render of title media contain
 */
const _renderTitleMedia = () => (
    <Text style={styles.titleMediaText}>Media, links and docs</Text>
);

/**
 * Render image gallery
 *
 * @param {string} image - Image uri
 * @param {boolean} isLatest - IsLatest index for get flagging more styling
 * @returns {React.ReactNode} - Render image gallery
 */
const _renderImageGallery = (image: string, isLatest: boolean) => (
    <TouchableOpacity style={styles.buttonImageWrapper}>
        {isLatest && <Text style={styles.textSeeMore}>See More</Text>}
        <Image
            resizeMode="cover"
            source={{ uri: image }}
            style={styles.imageGallery(isLatest)}
        />
    </TouchableOpacity>
);

/**
 * Render Gallery media wrapper
 *
 * @returns {React.ReactNode} - Render Gallery media wrapper
 */
const _renderGalleryMediaWrapper = () => (
    <View style={styles.galleryMediaWrapper}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {mockImgGallery.map((img: string, index: number) => {
                const isLast = mockImgGallery.length - 1 === index;

                return (
                    <React.Fragment key={index}>
                        {_renderImageGallery(img, isLast)}
                    </React.Fragment>
                );
            })}
        </ScrollView>
    </View>
);

/**
 *
 * @returns {React.ReactNode} - Render media
 */
const _renderMedia = () => (
    <View style={styles.mediaContainer}>
        {_renderTitleMedia()}
        {_renderGalleryMediaWrapper()}
    </View>
);

const ProfileContainer = (props: ProfileProps) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar backgroundColor="#61dafb" />
            <TopBarNavigation {..._getPropsTopBarnNavigation(props)} />
            <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
                {_renderContent(props)}
                {_renderBio()}
                {_renderMedia()}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileContainer;

const styles = StyleSheet.create({
    scrollViewWrapper: {
        paddingBottom: scaleHeight(200),
        backgroundColor: 'white',
    },
    safeAreaView: {
        backgroundColor: Constants.Colors.GREEN,
        paddingBottom: 400,
    },
    container: {
        backgroundColor: Constants.Colors.GREEN,
        width: '100%',
        paddingBottom: scaleHeight(30),
        alignItems: 'center',
    },
    image: {
        width: scaleWidth(150),
        height: scaleWidth(150),
        borderRadius: scaleWidth(150) / 2,
    },
    iconWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: scaleHeight(20),
    },
    nameWrapper: {
        marginTop: scaleHeight(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameText: {
        color: Constants.Colors.WHITE,
        fontSize: scaleSize(25),
        fontWeight: '600',
    },
    numberPhone: {
        color: Constants.Colors.WHITE,
        fontSize: scaleSize(15),
        fontWeight: '600',
    },
    bioText: {
        color: Constants.Colors.GREY,
        fontSize: scaleSize(12),
        fontWeight: '400',
    },
    labelIcon: {
        marginTop: scaleSize(15),
        fontSize: scaleSize(10),
        color: Constants.Colors.WHITE,
        fontWeight: '600',
    },
    icon: {
        margin: scaleWidth(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    bioContainer: {
        padding: scaleWidth(15),
        marginTop: scaleHeight(30),
        height: scaleHeight(80),
        backgroundColor: '#f6f6f6',
    },
    mediaContainer: {
        padding: scaleWidth(15),
        paddingVertical: scaleWidth(25),
        marginTop: scaleHeight(30),
        backgroundColor: '#f6f6f6',
        marginBottom: scaleHeight(30),
    },
    titleMediaText: {
        color: Constants.Colors.GREY,
        fontSize: scaleSize(12),
        fontWeight: '500',
    },
    galleryMediaWrapper: {
        flexDirection: 'row',
        marginVertical: scaleHeight(15),
    },
    imageGallery: (isLatest: boolean) => ({
        width: scaleWidth(150),
        height: scaleWidth(150),
        opacity: isLatest ? 0.5 : 1,
        backgroundColor: 'black',
    }),
    buttonImageWrapper: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: scaleSize(4),
    },
    textSeeMore: {
        position: 'absolute',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: Constants.Colors.WHITE,
    },
});
