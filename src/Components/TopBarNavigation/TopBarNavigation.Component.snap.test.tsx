import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';

import TopBarNavigation from './TopBarNavigation.Component';

const MockProps = {
    leftHeaderComponent: <></>,
    rightHeaderComponent: <></>,
    optionsList: ['setting'],
    navigation: jest.fn(),
    optionsSelected: jest.fn(),
    isShowSearch: false,
    inputSearchCallback: jest.fn(),
    onBack: jest.fn(),
    withOptions: true,
    backIcon: true,
};

const LeftHeaderComponent = () => <View accessibilityLabel="Left_Header" />;
const RightHeaderComponent = () => <View accessibilityLabel="Right_Header" />;

describe('TopBarNavigation', () => {
    const configs = [
        {
            desc: 'Without left and right header',
            props: MockProps,
        },
        {
            desc: 'With Only Left Header',
            props: {
                ...MockProps,
                leftHeaderComponent: LeftHeaderComponent(),
            },
        },
        {
            desc: 'With Only Right Header',
            props: {
                ...MockProps,
                rightHeaderComponent: RightHeaderComponent(),
            },
        },
        {
            desc: 'With Left and Right Header',
            props: {
                ...MockProps,
                leftHeaderComponent: LeftHeaderComponent(),
                rightHeaderComponent: RightHeaderComponent(),
            },
        },
        {
            desc: 'With Search true',
            props: {
                ...MockProps,
                isShowSearch: true,
                leftHeaderComponent: LeftHeaderComponent(),
                rightHeaderComponent: RightHeaderComponent(),
            },
        },
    ];

    configs.forEach(({ props, desc }) =>
        it(desc, () => {
            expect(render(<TopBarNavigation {...props} />)).toMatchSnapshot();
        })
    );
});
