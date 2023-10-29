export interface Props {
    isShow: boolean;
    list: Array<string>;
    select: (name: string) => void;
}
