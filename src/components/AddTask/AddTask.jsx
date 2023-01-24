import styles from './AddTask.module.css';

import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';

function AddTask({ createNewTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  function handleCreateNewTask() {
    createNewTask(newTaskTitle);
    setNewTaskTitle('');
  }

  function handleGetTextInput() {
    setNewTaskTitle(event.target.value);
  }

  return (
    <div className={styles.addTask}>
      <input type="text" onChange={handleGetTextInput} value={newTaskTitle} />
      <button onClick={handleCreateNewTask}>
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  );
}

export { AddTask };
