import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import List from './List';
import Detail from './Detail';

const BPage = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <p>B page</p>
      <Switch>
        <Route exact path={`${path}/post`}>
          <List />
        </Route>
        <Route path={`${path}/post/:id`}>
          <Detail />
        </Route>
      </Switch>
    </div>
  );
};

export default BPage;
