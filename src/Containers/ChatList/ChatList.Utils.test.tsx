import {
    userGenerator,
    mapUserGenerator,
    replyMessageConfig,
} from './ChatList.Utils';

describe('UserGenerator', () => {
    it('Should generate some user', () => {
        const results = userGenerator();

        const expectResult = {
            date: expect.any(String),
            image: expect.any(String),
            latestChat: expect.any(String),
            name: expect.any(String),
            notification: expect.any(Number),
            phone: expect.any(String),
        };

        expect(results).toEqual(expectResult);
    });
});

describe('MapUserGenerator', () => {
    it('Should generate 150 user with correct kay', () => {
        const results = mapUserGenerator();

        const expectResult = {
            date: expect.any(String),
            image: expect.any(String),
            latestChat: expect.any(String),
            name: expect.any(String),
            notification: expect.any(Number),
            phone: expect.any(String),
        };

        expect(results[0]).toEqual(expectResult);
    });

    it('Should correct count generate', () => {
        const results = mapUserGenerator();

        const expectResult = {
            date: expect.any(String),
            image: expect.any(String),
            latestChat: expect.any(String),
            name: expect.any(String),
            notification: expect.any(Number),
            phone: expect.any(String),
        };

        expect(results[0]).toEqual(expectResult);
        expect(results.length).toBe(150);
    });
});

describe('Reply message Config', () => {
    it('Should generate with correct config', () => {
        const results = replyMessageConfig();

        const expectedProperty = {
            check: expect.any(Boolean),
            id: expect.any(String),
            text: expect.any(String),
            img: expect.any(String),
            time: expect.any(String),
            type: 'author',
        };

        expect(results).toEqual(expectedProperty);
    });
});
