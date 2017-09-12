import axios from 'axios';
import * as types from '../constants/ActionTypes';

const posts = '/posts';

const client = axios.create({
  baseURL: 'http://localhost:5001',
  headers: {
    Authorization: 'dsfdsfdsf',
    'Content-Type': 'application/json',
  },
});

export function fetchPosts() {
  return dispatch => {
    dispatch({
      type: types.FETCH_POSTS,
      payload: client.get(posts),
    });
  };
}

export function newPost() {
  return dispatch => {
    dispatch({
      type: types.NEW_POST,
    });
  };
}

export function updatePost(post) {
  return dispatch => {
    dispatch({
      type: types.UPDATE_POST,
      payload: client.put(`${client.baseURL}/${post.id}`, post),
    });
  };
}

export function deletePost(id) {
  return dispatch => {
    return dispatch({
      type: types.DELETE_POST,
      payload: client.delete(`${client.baseURL}/${id}`),
    });
  };
}
