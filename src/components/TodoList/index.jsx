import React from 'react';
import PropTypes from 'prop-types';

TodoLists.propTypes = {
   todos: PropTypes.array,
   onTodoClick: PropTypes.func,
};

TodoLists.defaultProp = {
   todos: [],
   onTodoClick: null
}

function TodoLists(props) {

   const { todos, onTodoClick } = props;

   const handelTodoClick = (todo) => {
      if (onTodoClick) {
         onTodoClick(todo);
      }
   }

   return (
      <ul className="todo-list">
         {todos.map(todo =>
         (<li
            onClick={() => handelTodoClick(todo)}
            key={todo.id}>
            {todo.title}</li>)
         )}
      </ul>
   );
}

export default TodoLists;