import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import SearchingBar from './SearchingBar.Component';

beforeEach(() => jest.clearAllMocks());

describe('Searching navbar ', () => {
    const MockProps = {
        isShow: false,
        onSearch: jest.fn(),
        onBack: jest.fn(),
    };
    it('Should define back and button and input text', () => {
        const { getByLabelText } = render(<SearchingBar {...MockProps} />);

        const labelPreFix = 'Navbar_Searching_';

        expect(getByLabelText(`${labelPreFix}Back_Button`)).toBeTruthy();
        expect(getByLabelText(`${labelPreFix}Input`)).toBeTruthy();
    });

    it('Should be called props while element is triggered', () => {
        const { getByLabelText } = render(<SearchingBar {...MockProps} />);

        const labelPreFix = 'Navbar_Searching_';
        const backButton = getByLabelText(`${labelPreFix}Back_Button`);
        const inputText = getByLabelText(`${labelPreFix}Input`);

        fireEvent.press(backButton);
        fireEvent.changeText(inputText, 'hello');

        expect(MockProps.onBack).toHaveBeenCalled();
        expect(MockProps.onSearch).toHaveBeenCalledWith('hello');
    });
});
