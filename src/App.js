import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import Apply from './Apply';
import BackgroundCheck from './BackgroundCheck';
import Confirm from './Confirm';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/apply" component={Apply} />
    <Route exact path="/background" component={BackgroundCheck} />
    <Route exact path="/confirm" component={Confirm} />
  </Switch>
);

export default App;
