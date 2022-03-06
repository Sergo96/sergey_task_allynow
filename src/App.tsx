import React from 'react';
import { AddTodos } from './components/AddTodos/AddTodos';
import { TodoList } from './components/TodoList/TodoList';
import { Completed } from './components/Completed/Completed';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.container}>
      <AddTodos />
      <TodoList />
      <Completed />
    </div>
  );
}

export default App;
