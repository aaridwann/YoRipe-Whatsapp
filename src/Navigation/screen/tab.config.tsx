import CallContainer from '../../Containers/Call/Call.Container';
import ChatListContainer from '../../Containers/ChatList/ChatList';
import StatusContainer from '../../Containers/Status/Status.Container';
import RoutesName from '../Routes/Routes.Config';

const TabConfig = [
    {
        name: RoutesName.Chat,
        component: ChatListContainer,
        options: {},
    },
    {
        name: RoutesName.STATUS,
        component: StatusContainer,
        options: {},
    },
    {
        name: RoutesName.CALL,
        component: CallContainer,
        options: {},
    },
];

export default TabConfig;
