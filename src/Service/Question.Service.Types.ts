export type Choices = {
    choice: string;
    url: string;
    votes: number;
};

export interface RawData {
    question: string;
    choices: Array<Choices>;
}