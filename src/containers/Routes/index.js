import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from 'containers/App';

const Routes = () => (
  <div>
    <Switch>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </div>
);

export default Routes;
