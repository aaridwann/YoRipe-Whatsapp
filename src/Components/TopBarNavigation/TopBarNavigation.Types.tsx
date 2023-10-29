export type Setter = (params?: string | number) => void;

export interface State {
    isShowOptions: boolean;
    optionsSelected: string;
}

export interface Props {
    leftHeaderComponent?: React.ReactNode;
    rightHeaderComponent?: React.ReactNode;
    optionsList: Array<string>;
    navigation?: (param: string) => void;
    optionsSelected: (menu: string) => void;
    isShowSearch: boolean;
    inputSearchCallback: (result: string) => void;
    onBack: VoidFunction;
    withOptions?: boolean;
    backIcon?: boolean;
}

export interface TopBarHooksInterface {
    state: State;
    backHandler: VoidFunction;
    onProfileHandler: Setter;
    onCallHandler: Setter;
    onVideoHandler: Setter;
    onSelectOptionHandler: (params: string) => void;
    showOptionsHandler: Setter;
}
