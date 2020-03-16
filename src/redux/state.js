import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    postsData: [{
        id: 1,
        message: 'Hey, what are you doing?',
        like: 10
      },
      {
        id: 2,
        message: 'Hello World!',
        like: 20
      },
    ],
  },
  dialogsPage: {
    dialogsData: [{
        id: 1,
        name: 'Andrew'
      },
      {
        id: 2,
        name: 'Sasha'
      },
      {
        id: 3,
        name: 'Sveta'
      },
      {
        id: 4,
        name: 'Valera'
      },
      {
        id: 5,
        name: 'Viktor'
      },
    ],
    messagesData: [{
        id: 1,
        name: 'Andrew',
        img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
        message: 'Hello!',
        class: 'inbox',
      },
      {
        id: 2,
        name: 'Me',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png',
        message: 'Hello, friend!',
        class: 'outbox',
      },
      {
        id: 3,
        name: 'Me',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png',
        message: 'What are you doing?',
        class: 'outbox',
      },
      {
        id: 4,
        name: 'Me',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png',
        message: 'm? dsf sdnf ksn fskdjjfnsdn fjnsdjn jksjkdn kjnfjkndsj jkdsjkn jknfsdkjn jkdn jsnjdj fjsdjk fjdsjkn jknfjn jnsdjk sdjknjkfdskjf jknsfjnfds jnkfjkn fdjkdsfjsf djnfjnsfdnjk jndjn jknjkn fdkjns kjd jndj nj sjknsjnk fjnk sd jkndsfjknsdjn sjnkd jknjnsjnfsjknfjkfsjnnj jkndjknfdkjnfskjnfdskjnfdskjnfdskjnsfdkjnfdskjnfdskjsfdjknfdsjknfffffffffffffffffffffffffffffffffffffffffffffffffff',
        class: 'outbox',
      },
      {
        id: 5,
        name: 'Andrew',
        img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
        message: 'learn',
        class: 'inbox',
      },
    ],
  },
  friendsPage: {
    friendsData: [{
      id: 1,
      name: 'Andrew',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
    },
    {
      id: 2,
      name: 'Sveta',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
    },
    {
      id: 3,
      name: 'Olya',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
    },
    {
      id: 4,
      name: 'Vika',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
    },
    {
      id: 5,
      name: 'Katya',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
    },
    {
      id: 6,
      name: 'Alex',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
    },
    {
      id: 7,
      name: 'Polya',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
    },
  ]

  },
};

export let addPost = (post) => {
  let newPost = {
    id: 5,
    message: post,
    like: 0,
  };

  state.profilePage.postsData.push(newPost);

  rerenderEntireTree(state);
};

export default state;