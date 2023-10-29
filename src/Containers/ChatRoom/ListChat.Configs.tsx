export const initialState = {
    input: '',
    isOpenOptionsId: null,
    isShowSearch: false,
    markChat: [],
    image: [],
    chatData: [],
    chatFilter: [],
    isLoading: false,
};

export const mockData = [
    {
        id: 1,
        text: 'hello',
        time: '22.00',
        check: true,
        type: 'author',
    },
    {
        id: 2,
        text: 'hello world',
        time: '18.00',
        check: true,
        type: 'guest',
    },
    {
        id: 3,
        text: 'this is me, where are you honey ?',
        time: '18.00',
        check: true,
        type: 'guest',
    },
    {
        id: 4,
        text: 'I Love ypu Honey..',
        time: '22.00',
        check: true,
        type: 'author',
    },
    {
        id: 5,
        text: 'So please don`t leave me, I can`t live without you',
        time: '22.00',
        check: true,
        type: 'author',
    },
    {
        id: 6,
        text: 'Hurry up, I really missed you',
        time: '22.00',
        check: true,
        type: 'author',
    },
    {
        id: 7,
        text: 'hello world',
        time: '18.00',
        check: true,
        type: 'guest',
    },
    {
        id: 8,
        text: 'Please don`t let me go',
        time: '18.00',
        check: true,
        type: 'guest',
    },
    {
        id: 9,
        text: 'Are you hungry honey ?',
        time: '22.00',
        check: true,
        type: 'author',
    },
    {
        id: 10,
        text: 'could you arrange for dinner tonight ?',
        time: '22.00',
        check: true,
        type: 'author',
    },
    {
        id: 11,
        text: 'I will Love you ever Honey..',
        time: '22.00',
        check: true,
        type: 'author',
    },
];

export const menuList = [
    'Lihat Kontak',
    'Media, tautan, dan dokumen',
    'Cari',
    'Bisukan Notifikasi',
    'Pesan sementara',
    'Wallpapaer',
    'Lainya',
];