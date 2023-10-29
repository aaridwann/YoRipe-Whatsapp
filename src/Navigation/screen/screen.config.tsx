import RoutesName from '../Routes/Routes.Config';
import ChatRoomContainer from '../../Containers/ChatRoom/ChatRoom.Container';
import HomeContainer from '../../Containers/Home/Home.Container';
import ProfileContainer from '../../Containers/Profile';

import { ScreenType } from './screen.config.type';

const screenConfigs: ScreenType[] = [
    {
        name: RoutesName.HOME_ROUTES,
        component: HomeContainer,
        needAuth: true,
        options: {
            headerShown: false,
        },
    },
    {
        name: RoutesName.LIST_CHAT,
        component: ChatRoomContainer,
        needAuth: true,
        options: {
            headerShown: false,
        },
    },
    {
        name: RoutesName.PROFILE_ROUTES,
        component: ProfileContainer,
        needAuth: true,
        options: {
            headerShown: false,
        },
    }
];

export default screenConfigs;
