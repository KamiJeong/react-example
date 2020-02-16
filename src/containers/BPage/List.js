import React from 'react';
import { Link } from 'react-router-dom';

const List = () => (
  <div>
    <ul>
      <li>
        <Link to="/b/post/1">B Page - Post - Detail 1</Link>
      </li>
      <li>
        <Link to="/b/post/2">B Page - Post - Detail 2</Link>
      </li>
      <li>
        <Link to="/b/post/3">B Page - Post - Detail 3</Link>
      </li>
      <li>
        <Link to="/b/post/4">B Page - Post - Detail 4</Link>
      </li>
      <li>
        <Link to="/b/post/5">B Page - Post - Detail 5</Link>
      </li>
    </ul>
  </div>
);

export default List;
