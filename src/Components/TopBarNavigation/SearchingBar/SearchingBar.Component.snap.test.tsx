import React from 'react';
import { render } from '@testing-library/react-native';

import SearchingBar from './SearchingBar.Component';

describe('Searching navbar ', () => {
    it('Should render with correct props', () => {
        const MockProps = {
            isShow: false,
            onSearch: jest.fn(),
            onBack: jest.fn(),
        };

        expect(render(<SearchingBar {...MockProps} />)).toMatchSnapshot();
    });
});
