import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todoModule from '../modules/todoModule';

type submitProps =
  | React.FormEvent<HTMLFormElement>
  | React.FormEvent<HTMLButtonElement>;

const AddTodo: FC = () => {
  const [text, setText] = useState('');
  const dispacth = useDispatch();

  const handleSubmit = (e: submitProps) => {
    e.preventDefault();
    dispacth(todoModule.actions.addTodo(text));
    setText('');
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
    // console.log(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default AddTodo;
