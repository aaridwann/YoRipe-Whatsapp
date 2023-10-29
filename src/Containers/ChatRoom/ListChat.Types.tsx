export interface HooksInterface {
    state: State;
    infoHandler: (id: number) => void;
    clearInfo: (id: number) => void;
    inputHandler: (id: string) => void;
    submitHandler: VoidFunction;
    attachHandler: () => Promise<void>;
    showSearchToggle: VoidFunction;
    backHandler: VoidFunction;
    searchMessageHandler: (message: string) => void;
    onProfileHandler: (param: ListData) => void;
    discardImg: VoidFunction;
    onCallHandler: VoidFunction;
    onVideoHandler: VoidFunction;
}

export type ChatDataType = {
    check: boolean;
    id: string;
    text: string;
    time: string;
    type: string;
};

export interface State {
    isLoading: boolean;
    input: string;
    isOpenOptionsId: null | number;
    markChat: Array<number>;
    image: Array<string>;
    isShowSearch: boolean;
    chatData: ChatDataType[];
    chatFilter: ChatDataType[];
    uploadImgUri?: string;
}

export interface Items {
    id: number;
    text: string;
    check: boolean;
    type: 'author' | 'guest';
    time: string;
}

export interface ListData {
    name: string;
    image: string;
    latestChat: string;
    date: string;
    notification: number;
    phone?: string;
}

export interface Props {
    navigation: {
        goBack: VoidFunction;
        push: (route: string, param?: unknown) => void;
    };
    route: {
        params: ListData;
    };
}
