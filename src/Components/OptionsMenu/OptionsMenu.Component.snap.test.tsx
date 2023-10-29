import { render } from '@testing-library/react-native';

import OptionsMenu from './OptionsMenu.Component';

describe('Options Menu', () => {
    it('Should render with correct props', () => {
        const Props = {
            isShow: true,
            list: ['setting', 'profile'],
            select: jest.fn(),
        };

        expect(render(OptionsMenu(Props))).toMatchSnapshot();
    });
});
