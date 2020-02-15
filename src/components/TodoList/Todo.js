import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ item }) => <li key={item.id}>{item.text}</li>;

Todo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }),
};

Todo.defaultProps = {
  item: {
    id: -1,
    text: '',
  },
};

export default Todo;
