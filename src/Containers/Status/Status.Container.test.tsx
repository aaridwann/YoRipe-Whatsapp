import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import StatusContainer from './Status.Container';

const mockGenerateFix = [
    {
        date: '01.00',
        image: 'Image01.jpg',
        latestChat: 'hello',
        name: 'Joy',
        notification: 0,
    },
    {
        date: '01.00',
        image: 'Image02.jpg',
        latestChat: 'hello',
        name: 'Joy',
        notification: 0,
    },
    {
        date: '01.00',
        image: 'Image03.jpg',
        latestChat: 'hello',
        name: 'Joy',
        notification: 0,
    },
];
beforeEach(() => {
    jest.clearAllMocks();
});

jest.mock('../ChatList/ChatList.Utils', () => ({
    mapUserGenerator: jest.fn().mockReturnValue(mockGenerateFix),
}));

describe('StatusContainer', () => {
    describe('SnapTest', () => {
        it('Should render correct value', () => {
            expect(render(<StatusContainer />)).toMatchSnapshot();
        });
    });

    it('Should called useState when press image', () => {
        const useState = jest.spyOn(React, 'useState');

        const { getAllByLabelText } = render(<StatusContainer />);

        const ImageButton = getAllByLabelText('imageLabel')[0];

        fireEvent.press(ImageButton);

        expect(useState).toHaveBeenCalled();
    });

    it('Should render Modal when image pressed', async () => {
        const { getAllByLabelText, getByLabelText } = render(
            <StatusContainer />
        );

        const ImageButton = getAllByLabelText('imageLabel')[0];
        const modal = getByLabelText('Modal');

        fireEvent.press(ImageButton);

        expect(modal).toBeTruthy();
    });
});
