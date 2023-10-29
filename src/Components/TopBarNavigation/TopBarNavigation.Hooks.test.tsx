import React from 'react';
import { View } from 'react-native';
import { renderHook, act } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react-native';

import TopBarNavigationHooks from './TopBarNavigation.Hooks';

beforeEach(() => jest.clearAllMocks());

const MockProps = {
    leftHeaderComponent: <View accessibilityLabel="Left_Header" />,
    rightHeaderComponent: <View accessibilityLabel="Right_Header" />,
    optionsList: ['setting'],
    navigation: jest.fn(),
    optionsSelected: jest.fn(),
    isShowSearch: false,
    inputSearchCallback: jest.fn(),
    onBack: jest.fn(),
    withOptions: true,
    backIcon: true,
};

describe('TopBarNavigationHooks', () => {
    const { result } = renderHook(() => TopBarNavigationHooks(MockProps));
    it('Should return correct state', () => {
        expect(result.current.state).toEqual({
            isShowOptions: false,
            optionsSelected: '',
        });
    });

    it('Should return correct value while options is selected', () => {
        const { result } = renderHook(() => TopBarNavigationHooks(MockProps));
        act(() => {
            result.current.onSelectOptionHandler('setting');
        });

        expect(result.current.state.optionsSelected).toBe('setting');
    });

    describe('BackHandler', () => {
        it('Should return correct value and called props back', async () => {
            const { result } = renderHook(() =>
                TopBarNavigationHooks(MockProps)
            );
            act(() => {
                result.current.onSelectOptionHandler('setting');
            });

            expect(result.current.state.optionsSelected).toBe('setting');

            act(() => {
                result.current.backHandler();
            });

            expect(result.current.state.optionsSelected).toBe('');
            await waitFor(() => {
                expect(MockProps.onBack).toHaveBeenCalled();
            });
        });
    });

    describe('showOptionsHandler', () => {
        it('Should return correct state while showOptionHandler is called', () => {
            const { result } = renderHook(() =>
                TopBarNavigationHooks(MockProps)
            );
            act(() => {
                result.current.showOptionsHandler();
            });

            expect(result.current.state.isShowOptions).toBe(true);
        });
    });
});
