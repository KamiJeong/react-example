import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { Container, Header, List } from 'semantic-ui-react';

import Post from './Post';

const posts = [
  { id: 1, icon: 'file alternate outline', title: 'Hello', description: 'hello is...' },
  { id: 2, icon: 'file alternate outline', title: 'Hi', description: 'hmmm' },
  { id: 3, icon: 'file alternate outline', title: 'Nice Title', description: 'what did u say!?' },
  { id: 4, icon: 'file alternate outline', title: 'Wa~~~~', description: 'what!?!?!' },
];

const Posts = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Container>
          <Header as="h1">Posts</Header>
          <List divided relaxed>
            {posts.map(post => (
              <List.Item key={post.id}>
                <List.Icon name={post.icon} size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as={Link} to={`${path}/${post.id}`}>
                    {post.title}
                  </List.Header>
                  <List.Description as={Link} to={`${path}/${post.id}`}>
                    {post.description}
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Container>
      </Route>
      <Route path={`${path}/:id`}>
        <Post />
      </Route>
    </Switch>
  );
};

export default Posts;
