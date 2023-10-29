import React from 'react';
import { render } from '@testing-library/react-native';

import { LeftHeaderChatRoom, RightHeaderChatRoom } from './Header.Component';
import { HooksInterface } from '../ListChat.Types';

beforeEach(() => {
    jest.clearAllMocks();
});

jest.mock('@expo/vector-icons/Ionicons', () => 'Icons');

describe('Header Component', () => {
    const listData = {
        check: false,
        id: 0,
        text: '',
        time: '',
        type: 'author',
    };

    const mockState = {
        isLoading: false,
        input: '',
        isOpenOptionsId: null,
        markChat: [],
        image: '',
        isShowSearch: false,
        chatData: [listData],
        chatFilter: [listData],
        uploadImgUri: '',
    };

    const mockHooks: HooksInterface = {
        state: { ...mockState },
        infoHandler: jest.fn(),
        clearInfo: jest.fn(),
        inputHandler: jest.fn(),
        submitHandler: jest.fn(),
        attachHandler: jest.fn(),
        showSearchToggle: jest.fn(),
        backHandler: jest.fn(),
        searchMessageHandler: jest.fn(),
        onProfileHandler: jest.fn(),
        discardImg: jest.fn(),
        onCallHandler: jest.fn(),
        onVideoHandler: jest.fn(),
    };

    const ListData = {
        name: '',
        image: '',
        latestChat: '',
        date: '',
        notification: '',
        phone: '',
    };

    const mockProps = {
        navigation: {
            goBack: jest.fn(),
            push: jest.fn(),
        },
        route: {
            params: ListData,
        },
    };

    describe('LeftHeaderComponent', () => {
        it('Should render with correct value', () => {
            expect(
                render(LeftHeaderChatRoom(mockHooks, mockProps))
            ).toMatchSnapshot();
        });
    });

    describe('RightHeaderComponent', () => {
        it('Should render with correct value', () => {
            const Component = () => RightHeaderChatRoom(mockHooks);

            expect(render(<Component />)).toMatchSnapshot();
        });
    });
});
