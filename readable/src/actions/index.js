import axios from 'axios';
import * as types from '../constants/ActionTypes';
import uuid from 'uuid';

const url = '/posts';

const client = axios.create({
  baseURL: 'http://localhost:5001',
  headers: {
    'Authorization': 'dsfdsfdsf',
    'Content-Type': 'application/json',
  },
});

export function fetchPosts() {
  return dispatch => {
    dispatch({
      type: types.FETCH_POSTS,
      payload: client.get(url),
    });
  };
}

export function newPost() {
  return dispatch => {
    dispatch({
      type: types.NEW_POST
    });
  };
}

export function savePost(post) {
  post.id = uuid.v4();
  return dispatch => {
    return dispatch({
      type: types.SAVE_POST,
      payload: client.post(url, post)
    })
  }
}

export function fetchPost(id) {
  return dispatch => {
    return dispatch({
      type: types.FETCH_POST,
      payload: client.get(`${url}/${id}`)
    })
  }
}

export function updatePost(post) {
  return dispatch => {
    return dispatch({
      type: types.UPDATE_POST,
      payload: client.put(`${url}/${post.id}`, post),
    });
  };
}

export function deletePost(_id) {
  return dispatch => {
    dispatch({
      type: types.DELETE_POST,
      payload: client.delete(`${url}/${_id}`),
    });
    dispatch({
      type: types.FETCH_POSTS,
      payload: client.get(url),
    });
  };
}
