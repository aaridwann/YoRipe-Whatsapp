import React from 'react';
import moment from 'moment';
import { faker } from '@faker-js/faker';
import noop from 'lodash/noop';

import { replyMessageConfig } from '../ChatList/ChatList.Utils';
import { initialState } from './ListChat.Configs';
import { ChatDataType, HooksInterface, Props, State } from './ListChat.Types';
import QuestionService from '../../Service/Question.Service';
import RoutesName from '../../Navigation/Routes/Routes.Config';
import { pickImageAsync } from './ListChat.Utils';

/**
 * Filter chat message handler
 * 
 * @param {string} message - value of input search 
 * @param {ChatDataType[]} data - Data chat
 * @returns {ChatDataType[] | Array} - Filter data result
 */
export const searchMessageUtils = (
    message: string,
    data: ChatDataType[]
): ChatDataType[] | undefined => {
    if (!message) return [];

    const regex = new RegExp(message, 'i');
    const res = data.filter(({ text }) => regex.test(text));
    if (res.length === 0) return;

    return res;
};

const HooksState = (props: Props): HooksInterface => {
    const [state, setState] = React.useState<State>(initialState);

    const infoHandler = (id: number) =>
        setState((prev) => ({ ...prev, isOpenOptionsId: id }));

    /**
     * Clear info bubble chat
     * 
     * @param {number} id - Id of chat
     * @returns {void}
     */
    const clearInfo = (id: number): void =>
        setState((prev): State => ({...prev, isOpenOptionsId: prev.isOpenOptionsId !== id ? null : id }));
    
    /**
     * Input type handler
     * 
     * @param {string} input
     * @returns {VoidFunction}
     */
    const inputHandler = (input: string): void =>
        setState((prev) => ({ ...prev, input }));

    /**
     * Submit chat handler
     * 
     * @returns {VoidFunction}
     */
    const submitHandler = (): VoidFunction => {
        if (!state.input && !state.uploadImgUri) return;
        const input = {
            id: faker.string.uuid(),
            text: state.input,
            img: state.uploadImgUri,
            check: true,
            type: 'guest',
            time: moment().format('HH:mm'),
        };

        setState(
            (prev): State => ({
                ...prev,
                chatData: [...prev.chatData, input],
                input: '',
                uploadImgUri: '',
            })
        );

        setTimeout(() => {
            setState((prev) => ({
                ...prev,
                chatData: [...prev.chatData, replyMessageConfig()],
            }));
        }, 2000);
    };

    /**
     * Show search handler
     * 
     * @returns {void}
     */
    const showSearchToggle = (): void =>
        setState((prev): State => ({ ...prev, isShowSearch: !prev.isShowSearch }));

    /**
     * Attachment image picker handler
     * @returns {Promise<void>}
     */
    const attachHandler = async (): Promise<void> => {
        try {
            const res = await pickImageAsync();
            
            if (res) setState((prev): State => ({...prev,uploadImgUri: res.assets[0].uri }));
        } catch (error) {
            return;
        }
    };

    /**
     * Back handler navigation
     * 
     * @returns {void}
     */
    const backHandler = (): void => {
        if (state.isShowSearch) {
            return setState(
                (prev): State => ({
                    ...prev,
                    chatFilter: [],
                    isShowSearch: false,
                })
            );
        }
        return props.navigation.goBack();
    };

    /**
     * Search topBar navigation handler
     * 
     * @param {string} message - Callback value
     * @returns {void} 
     */
    const searchMessageHandler = (message: string): void => {
        const filter = searchMessageUtils(message, state.chatData);
        setState((prev) => ({ ...prev, chatFilter: filter }));
    };

    /**
     * Navigate to profile handler
     * 
     * @returns {void}
     */
    const onProfileHandler = (): void => {
        const { navigation, route: { params } } = props;
        
        navigation.push(RoutesName.PROFILE_ROUTES, params);
    };

    /**
     * Loading fetching handler
     * 
     * @returns {void}
     */
    const loadingHandler = (): void =>
        setState((prev): State => ({ ...prev, isLoading: !prev.isLoading }));

    /**
     * Discard image picker handler
     * 
     * @returns {void}
     */
    const discardImg = (): void =>
        setState((prev): State => ({ ...prev, uploadImgUri: '' }));

    /**
     * 
     * @returns {void}
     */
    const onCallHandler = (): void => noop;

    /**
     * 
     * @returns {void}
     */
    const onVideoHandler = (): void => noop;

    // Fetching while did mount
    React.useEffect(() => {
        QuestionService(loadingHandler).then((data) =>
            setState((prev): State => ({ ...prev, chatData: data }))
        );
    }, []);

    return {
        state,
        infoHandler,
        clearInfo,
        inputHandler,
        submitHandler,
        attachHandler,
        showSearchToggle,
        backHandler,
        searchMessageHandler,
        onProfileHandler,
        discardImg,
        onCallHandler,
        onVideoHandler
    };
};

export default HooksState;
