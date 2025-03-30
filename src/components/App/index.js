import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../List';
import EventCard from '../EventCard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/event/:id" component={EventCard} />
      </Switch>
    </Router>
  );
}

export default App;
