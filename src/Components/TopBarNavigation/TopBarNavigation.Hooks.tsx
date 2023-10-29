import React from 'react';

import { Props, State, TopBarHooksInterface } from './TopBarNavigation.Types';

const TopBarNavigationHooks = (props: Props): TopBarHooksInterface => {
    const [state, setState] = React.useState<State>({
        isShowOptions: false,
        optionsSelected: '',
    });

    const showOptionsHandler = () =>
        setState(
            (prev): State => ({ ...prev, isShowOptions: !prev.isShowOptions })
        );

    const backHandler = () => {
        setState((prev) => ({
            ...prev,
            optionsSelected: '',
            isShowOptions: false,
        }));
        setTimeout(() => props.onBack(), 200);
    };

    const onProfileHandler = () => null;
    const onCallHandler = () => null;
    const onVideoHandler = () => null;
    const onSelectOptionHandler = (value: string) =>
        setState((prev): State => ({ ...prev, optionsSelected: value }));

    React.useEffect(() => {
        props.optionsSelected(state.optionsSelected);
    }, [state.optionsSelected]);

    return {
        state,
        backHandler,
        onProfileHandler,
        onCallHandler,
        onVideoHandler,
        onSelectOptionHandler,
        showOptionsHandler,
    };
};

export default TopBarNavigationHooks;
