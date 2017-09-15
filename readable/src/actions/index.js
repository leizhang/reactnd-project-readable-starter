import axios from 'axios';
import * as types from '../constants/ActionTypes';
import uuid from 'uuid';

const posts = '/posts';
const category = '/category';

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
      payload: client.get(posts),
    });
  };
}

export function fetchCategories() {
  return dispatch => {
    dispatch({
      type: types.FETCH_CATEGORIES,
      payload: client.get(category),
    })
  }
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
      payload: client.post(posts, post)
    })
  }
}

export function fetchPost(id) {
  return dispatch => {
    return dispatch({
      type: types.FETCH_POST,
      payload: client.get(`${posts}/${id}`)
    })
  }
}

export function updatePost(post) {
  return dispatch => {
    return dispatch({
      type: types.UPDATE_POST,
      payload: client.put(`${posts}/${post.id}`, post),
    });
  };
}

export function deletePost(_id) {
  return dispatch => {
    dispatch({
      type: types.DELETE_POST,
      payload: client.delete(`${posts}/${_id}`),
    });
    dispatch({
      type: types.FETCH_POSTS,
      payload: client.get(posts),
    });
  };
}

export function setCategoryFilter(filter) {
  return dispatch => {
    return dispatch({
      type: types.SET_CATEGORY_FILTER,
      filter
    });
  };
}
