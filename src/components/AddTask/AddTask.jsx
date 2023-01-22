import styles from './AddTask.module.css';

import { PlusCircle } from 'phosphor-react';

function AddTask({ createNewTask, getTextInput }) {
  function handleCreateNewTask() {
    createNewTask();
  }

  function handleGetTextInput() {
    getTextInput();
  }

  return (
    <div className={styles.addTask}>
      <input type="text" onChange={handleGetTextInput} />
      <button onClick={handleCreateNewTask}>
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  );
}

export { AddTask };
