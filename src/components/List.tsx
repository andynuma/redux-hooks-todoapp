import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todoModule, { TodoState } from '../modules/todoModule';

const List: FC = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispacth = useDispatch();

  const handleClick = ( id: number) => {
    dispacth(todoModule.actions.deleteTodo(id))
  };

  return (
    <ul>
      {todos.map((todo: TodoState) => (
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => handleClick(todo.id)}>-</button>
      </li>))}
    </ul>
  );
};

export default List;
