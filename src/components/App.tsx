import React, { FC } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import List from './List';

const App: FC = () => {
  return (
    <>
      <AddTodo />
      <List />
    </>
  );
};
export default App;
