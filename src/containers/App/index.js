import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { Switch, Route, Link } from 'react-router-dom';

import Logo from 'images/ryan-logo.png';

import Home from '../Page/Home';
import Posts from '../Page/Posts';

const App = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} to="/" header>
          <Image size="mini" src={Logo} style={{ marginRight: '1.5em' }} />
          React Tutorial Home
        </Menu.Item>
        <Menu.Item as={Link} to="/posts">
          Post
        </Menu.Item>
      </Container>
    </Menu>

    <div style={{ marginTop: '7em' }}>
      {/* Router */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
    </div>
  </div>
);

export default App;
