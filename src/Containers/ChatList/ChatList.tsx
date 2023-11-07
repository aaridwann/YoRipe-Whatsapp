import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListChatComponent from '../../Components/ListChatComponent/ListChat.Component';
import { scaleWidth } from '../../Utils/Size/size.utils';
import RoutesName from '../../Navigation/Routes/Routes.Config';
import { mapUserGenerator } from './ChatList.Utils';
import { ListData } from '../ChatRoom/ListChat.Types';

const MockData: ListData[] = [
    {
        name: 'Lidya',
        image:
            'https://i.pinimg.com/564x/93/8a/85/938a85618e672d288deb440daf52102d.jpg',
        latestChat: 'Where are you honey ?',
        date: '21:00',
        notification: 2,
    },
    {
        name: 'Fira',
        image:
            'https://i.pinimg.com/564x/08/92/82/089282d2db1187397b122e28816976b3.jpg',
        latestChat: 'Aku sayang kamu..',
        date: '11:00',
        notification: 5,
    },
    {
        name: 'Ana',
        image:
            'https://i.pinimg.com/564x/07/cf/28/07cf28265b620fc1382b43a8045290d1.jpg',
        latestChat: 'Malam ini kamu free ? Kita nonton yuk',
        date: '14:00',
        notification: 12,
    },
    {
        name: 'Putri',
        image:
            'https://i.pinimg.com/564x/88/e4/f6/88e4f607455f476073a719c84d8a649b.jpg',
        latestChat: 'Kamu bisa jemput aku ?',
        date: '07:00',
        notification: 22,
    },
    {
        name: 'nikita',
        image:
            'https://i.pinimg.com/564x/68/9c/8a/689c8a494e24f58d3d2a49d20bc16658.jpg',
        latestChat: 'Kamu kapan mau lamar aku ?',
        date: '07:00',
        notification: 22,
    },
    {
        name: 'meilanie',
        image:
            'https://i.pinimg.com/564x/40/83/37/408337d548e711d05f1aadfc4cb6286c.jpg',
        latestChat: 'Mamah udah nanyain kamu aja tuh :(',
        date: '07:00',
        notification: 22,
    },
];

interface Props {
    navigation: {
        push: (route: string, params: unknown) => void;
    };
}

const ChatListContainer = (props: Props) => {
    const { navigation } = props;

    const navigateHandler = (value) =>
        navigation.push(RoutesName.LIST_CHAT, value);

    const generateuser = React.useCallback(
        () => [...MockData, ...mapUserGenerator(150)],
        []
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={generateuser()}
                renderItem={({ item }: { item: ListData }) => (
                    <ListChatComponent
                        onPress={() => navigateHandler(item)}
                        {...item}
                    />
                )}
            />
        </View>
    );
};

export default ChatListContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: scaleWidth(5),
    },
});
