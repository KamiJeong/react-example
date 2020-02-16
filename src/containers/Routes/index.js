import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';

import APage from '../APage';
import BPage from '../BPage';
import CPage from '../CPage';

const Routes = () => (
  <div>
    <p>Route Test</p>
    <nav>
      <Link to="/a">A Page</Link>
      <Link to="/b">B Page</Link>
      <Link to="/b/post">B Page - Post</Link>
      <Link to="/b/post/123">B Page - Post - Detail 123</Link>
      <Link to="/b/post/567">B Page - Post - Detail 567</Link>
      <Link to="/c/post/123">C Page</Link>
      <NavLink to="/c/post/321" activeClassName="active">
        C Nav Link
      </NavLink>
    </nav>
    <Switch>
      {/* Apage */}
      <Route path="/a">
        <APage />
      </Route>
      {/* Bpage */}
      <Route path="/b">
        <BPage />
      </Route>
      {/* Cpage */}
      <Route path="/c/:id/:name">
        <CPage />
      </Route>
    </Switch>
  </div>
);

export default Routes;
