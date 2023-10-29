import axios from 'axios';
import { faker } from '@faker-js/faker';
import moment from 'moment';

import { ChatDataType } from '../Containers/ChatRoom/ListChat.Types';
import { RawData } from './Question.Service.Types';

const uri = 'https://polls.apiblueprint.org/questions';

export const generateRandomTime = () => {
    const randomDate = faker.date.recent();
    const formattedTime = moment(randomDate).format('HH:mm');

    return formattedTime;
};

export const questionResolver = (data: RawData[]) => {
    const res: ChatDataType[] = [];

    for (let i = 0; i < data.length; i++) {
        const authorFormat = {
            id: faker.string.uuid(),
            text: data[i].question,
            time: generateRandomTime(),
            check: true,
            type: 'author',
        };

        const guestFormat = {
            id: faker.string.uuid(),
            text: `I think ${data[i]?.choices[i]?.choice}`,
            time: generateRandomTime(),
            check: false,
            type: 'guest',
        };

        res.push(authorFormat, guestFormat);
    }

    return res;
};

export const QuestionService = async (
    isLoadingHandler: VoidFunction
): Promise<Array<ChatDataType>> => {
    isLoadingHandler();
    try {
        const { data } = await axios.get(uri);
        isLoadingHandler();
        return questionResolver(data);
    } catch (error) {
        isLoadingHandler();
        return [];
    }
};

export default QuestionService;
