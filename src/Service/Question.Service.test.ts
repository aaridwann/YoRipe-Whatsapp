import axios from 'axios';

import { questionResolver, generateRandomTime, QuestionService } from './Question.Service';


jest.mock('axios');

beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
}
);

describe('QuestionResolve', () => {
    
    const sourceData = [
        {
            question: 'Who has won the Champions League the most times? 🏆',
            choices: [
                {
                    choice: 'AC Milan',
                    url: '/questions/16/choices/97',
                    votes: 0,
                },
                {
                    choice: 'Barcelona',
                    url: '/questions/16/choices/97',
                    votes: 0,
                },
            ],
        },
        {
            question: 'Who has won the Moto GP ?🏆',
            choices: [
                {
                    choice: 'Valentino Rossy',
                    url: '/questions/16/choices/97',
                    votes: 0,
                },
                {
                    choice: 'Mark Marquez',
                    url: '/questions/16/choices/97',
                    votes: 0,
                },
            ],
        },
    ];

    const expectedResult = [
        {
            id:  expect.any(String),
            text: 'Who has won the Champions League the most times? 🏆',
            time: expect.any(String),
            check: true,
            type: 'author'
        },
        {
            id: expect.any(String),
            text: 'I think AC Milan',
            time: expect.any(String),
            check: false,
            type: 'guest'
        },
        {
            id: expect.any(String),
            text: 'Who has won the Moto GP ?🏆',
            time: expect.any(String),
            check: true,
            type: 'author'
        },
        {
            id: expect.any(String),
            text: 'I think Mark Marquez',
            time: expect.any(String),
            check: false,
            type: 'guest'
        }
    ];

    it('should resolve with correct value', () => {
        
        const res = questionResolver(sourceData);
        
        expect(res).toEqual(expectedResult);
    });
});

describe('generateRandomTime', () => { 
    it('Should return correct format', () => {
        const result = generateRandomTime();

        expect(result.split('').length).toBe(5);
        expect(result.split('')[2]).toBe(':');
        expect(typeof parseInt(result.split(':')[0])).toBe('number');
        expect(typeof parseInt(result.split(':')[1])).toBe('number');        
    });
});

describe('Question Service', () => {
    const MockProps = jest.fn();

    it('Should call Props loading', async () => {

        await QuestionService(MockProps);

        expect(MockProps).toHaveBeenCalled();
    });

    it('Should return correct value while success', async () => {
        const rawData = [
            {
                question: 'Question 1',
                choices: [
                    {
                        choice: 'Choice 1', 
                        url: 'Url 1',
                        votes: 'Votes 1'
                    }
                ]
            },
            {
                question: 'Question 2',
                choices: [
                    {
                        choice: 'Choice 2', 
                        url: 'Url 2',
                        votes: 'Votes 2'
                    }
                ]
            }
        ];

        const expected = [
            {
                id: expect.any(String),
                text: 'Question 1',
                time: expect.any(String),
                check: true,
                type: 'author'
            },
            {
                id: expect.any(String),
                text: 'I think Choice 1',
                time: expect.any(String),
                check: false,
                type: 'guest'
            },
            {
                id: expect.any(String),
                text: 'Question 2',
                time: expect.any(String),
                check: true,
                type: 'author'
            },
            {
                id: expect.any(String),
                text: 'I think undefined',
                time: expect.any(String),
                check: false,
                type: 'guest'
            }
        ];
        axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: rawData }));

        const result = await QuestionService(MockProps);

        expect(result).toEqual(expected);
    });


    it('Should return correct value while failed', async () => {
        axios.get = jest.fn().mockImplementation(() => Promise.reject());

        const result = await QuestionService(MockProps);

        expect(result).toEqual([]);
    });
    
});