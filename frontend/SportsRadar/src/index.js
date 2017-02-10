import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route} from 'react-router'
import App from './container/App';
import Teams from './pages/teams'
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
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/teams" component={Teams} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
