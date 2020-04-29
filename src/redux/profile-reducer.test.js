import React from 'react';
import { render } from '@testing-library/react';
import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

//1. test data
let state = {
  postsData: [
    {id: 1, message: 'Hey, what are you doing?', like: 10},
    {id: 2, message: 'Hello World!', like: 20},
  ]
};

test('new post should be added', () => {
  let action = addPostActionCreator('working');
  //2.action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.postsData.length).toBe(3);
});

test('message correct', () => {
  let action = addPostActionCreator('working');
  //2.action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.postsData[0].message).toBe('working');
});

test('delete post', () => {
  let action = deletePost(1);
  //2.action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.postsData.length).toBe(1);
});
