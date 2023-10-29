// import { GlobalTypeNavigation } from '../../utils/Types/Global.Types';

export interface OptionsNavigationType {
    headerShown?: boolean;
    headerTitle?: string;
    headerTitleStyle?: object;
    headerTitleAlign?: 'center' | 'left' | 'right';
    headerTintColor?: string;
    headerBackTitle?: string;
    headerBackTitleStyle?: object;
    headerBackTitleVisible?: boolean;
    headerBackVisible?: boolean;
    headerRight?: React.ReactNode;
    headerLeft?: React.ReactNode;
    headerStyle?: object;
    headerBackground?: React.ReactNode;
    headerTransparent?: boolean;
    headerStatusBarHeight?: number;
    headerShadowVisible?: boolean;
    headerPressColorAndroid?: string;
    headerTintColorAndroid?: string;
    headerBackgroundContainerStyle?: object;
    headerLeftContainerStyle?: object;
    headerTitleContainerStyle?: object;
    headerRightContainerStyle?: object;
    headerBackImage?: React.ReactNode;
    headerTruncatedBackTitle?: string;
    headerPressColor?: string;
    headerForceInset?: {
        top: 'never' | 'always' | 'condition' | number;
        bottom: 'never' | 'always' | 'condition' | number;
        left: 'never' | 'always' | 'condition' | number;
        right: 'never' | 'always' | 'condition' | number;
    };
    headerTitleAllowFontScaling?: boolean;
    headerLeftLabelVisible?: boolean;
    headerLeftLabelStyle?: object;
    headerLeftLabelPressedStyle?: object;
    headerRightLabelVisible?: boolean;
    headerRightLabelStyle?: object;
    headerRightLabelPressedStyle?: object;
    headerTitleAllowFontScalingIOS?: boolean;
    headerLeftLabelAllowFontScaling?: boolean;
    headerRightLabelAllowFontScaling?: boolean;
    headerHideBackButton?: boolean;
    headerTopInsetEnabled?: boolean;
    headerCollapsible?: boolean;
    headerCollapsibleOptions?: {
        syncWithDirection?: boolean;
        heightHint?: number;
        floatHeight?: number;
        showOnTop?: boolean;
    };
    headerLargeTitle?: boolean;
    headerLargeTitleStyle?: object;
    headerBackAccessibilityLabel?: string;
    headerSearchBarOptions?: object;
    headerStyleInterpolator?: (style: object) => object;
    headerLeftInterpolator?: (style: object) => object;
    headerTitleInterpolator?: (style: object) => object;
    headerRightInterpolator?: (style: object) => object;
    headerBackgroundInterpolator?: (style: object) => object;
    headerShownInterpolator?: (style: object) => object;
    headerHideShadowInterpolator?: (style: object) => object;
    headerTintColorInterpolator?: (style: object) => object;
    headerPressColorInterpolator?: (style: object) => object;
    headerBackImageInterpolator?: (style: object) => object;
    headerLayoutPreset?: 'left' | 'center';
    headerTitleGradientStyle?: object;
    headerBackgroundBlurRadius?: number;
    headerRightButtonsContainerStyle?: object;
    headerLeftButtonsContainerStyle?: object;
}

interface Navigation {
    push: (routeName: string, params?: object) => void;
    goBack: VoidFunction;
    route?: {
        params: object;
    };
}

export interface ScreenType {
    name: string;
    component: React.FC<{ navigation: Navigation }>;
    options?: OptionsNavigationType;
    needAuth?: boolean;
}
