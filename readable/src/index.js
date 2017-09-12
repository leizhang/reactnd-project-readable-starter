import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import App from './App';
// import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import reducer from './reducers'
import store from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// const store = configureStore();

ReactDOM.render(
  <BrowserRouter store={store}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
