import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({ list }) => (
  <div>
    <ul>
      <Todo />
      {list.map(todo => (
        <Todo key={todo.id} item={todo} />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

TodoList.defaultProps = {
  list: [],
};

export default TodoList;
