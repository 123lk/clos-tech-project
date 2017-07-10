import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import people from './reducers/people.reducer';

// components 
import App from './components/HomePage/App';
import ProfilePage from './components/ProfilePage/ProfilePage';

// constants for redux 
const logger  = createLogger();
const reducer = combineReducers({
  people
});
const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store={store}>  
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/:id/:name" component={ProfilePage} />
    </div>
  </Router>
  </Provider>, document.getElementById('root'));
