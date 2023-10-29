export interface ListData {
    name: string;
    image: string;
    latestChat: string;
    date: string;
    notification: number;
}

export interface Props {
    navigation: {
        push: (route: string, params: unknown) => void;
    };
}
