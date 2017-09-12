import { combineReducers } from 'redux';
import PostReducer from './post';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  postStore: PostReducer,
  form: formReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
