import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import configureStore from './redux/store'
import { Provider }from 'react-redux'
import './index.css';

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial Todo for Demo Purposes'
  }],
  user:{
    username: 'Baba',
    id: 23
  }
}


let store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
