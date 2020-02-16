import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';

const CPage = props => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();
  const query = new URLSearchParams(location.search);

  console.debug('history: ', history);
  console.debug('location: ', location);
  console.debug('@@@ URLSearchParams', query.getAll('test'));
  console.debug('@@@ query-string parse', queryString.parse(location.search));
  console.debug('@@@ query-string parseUrl', queryString.parseUrl('http://localhost:3000/c/123/jjh?test=company&test=toto'));
  console.debug('params: ', params);
  console.debug('match: ', match);

  return <div>C page</div>;
};

export default CPage;
