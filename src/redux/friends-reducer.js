// const SUBSCRIBE_TRUE = 'SUB_TRUE';
// const SUBSCRIBE_FALSE = 'SUB_FALSE';

let initialState = {
  friendsData: [{
      id: 1,
      firstName: 'Andrew',
      lastName: 'K.',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
      country: 'Russia',
      town: 'Moscow',
      status: 'I am looking for a Job right now...',
      subscribe: true
    },
    {
      id: 2,
      firstName: 'Sveta',
      lastName: 'D.',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
      country: 'Belarus',
      town: 'Minsk',
      status: 'I am so pretty',
      subscribe: false
    },
    {
      id: 3,
      firstName: 'Olya',
      lastName: 'L.',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
      country: 'Ukraine',
      town: 'Kiev',
      status: 'I love watch movie',
      subscribe: true
    },
    {
      id: 4,
      firstName: 'Vika',
      lastName: 'S.',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
      country: 'Russia',
      town: 'St Peterburg',
      status: 'I am free',
      subscribe: false
    },
  ]
};

const friendsReducer = (state = initialState, action) => {
  return state;
};

export default friendsReducer;