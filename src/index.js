import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ProfilePage from './components/ProfilePage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/:id/:name" component={ProfilePage} />
    </div>
  </Router>, document.getElementById('root'));
