// react
import React from 'react';
import ReactDOM from 'react-dom';
// react-router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// redux
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// redux-persist
import { autoRehydrate, persistStore } from 'redux-persist';

// reducer
import people from './reducers/people.reducer';
// components 
import App from './components/HomePage/App';
import ProfilePage from './components/ProfilePage/ProfilePage';

// constants for redux 
const logger  = createLogger();
const reducer = combineReducers({
  people
});
const store = createStore(
  reducer, 
  compose(
  applyMiddleware(thunk, logger),
  autoRehydrate()
  )
  );

persistStore(store);  

ReactDOM.render(
  <Provider store={store}>  
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/:id/:name" component={ProfilePage} />
    </div>
  </Router>
  </Provider>, document.getElementById('root'));
