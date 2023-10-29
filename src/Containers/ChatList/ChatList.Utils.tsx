import { faker } from '@faker-js/faker';
import { ListData } from '../ChatRoom/ListChat.Types';
import moment from 'moment';

export type ChatDataType = {
    check: boolean;
    id: string;
    text: string;
    img?: string;
    time: string;
    type: string;
};

const generateRandomTime = (): string => {
    const randomDate = faker.date.recent();
    const formattedTime = moment(randomDate).format('HH:mm');

    return formattedTime;
};

export const userGenerator = (): ListData => ({
    name: faker.person.firstName('female'),
    date: generateRandomTime(),
    latestChat: faker.lorem.lines(1),
    notification: faker.number.int({ max: 100, min: 2 }),
    image: faker.image.urlLoremFlickr({ category: 'fashion' }),
    phone: faker.phone.number('+62-821-###-##-##'),
});

export const replyMessageConfig = (): ChatDataType => {
    const img = Math.random() < 0.5 ? '' : faker.image.avatarLegacy();

    return {
        check: false,
        id: faker.string.uuid(),
        text: faker.lorem.sentence(),
        img: faker.image.fashion(640,480),
        time: generateRandomTime(),
        type: 'author',
    };
};

export const mapUserGenerator = (): ListData[] => {
    const res = [];

    for (let i = 0; i < 150; i++) {
        res.push(userGenerator());
    }

    return res;
};
