import styles from './Task.module.css';

import { Trash } from 'phosphor-react';
import { useState } from 'react';

function Task({ id, content, deleteTask, statusTask }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask() {
    deleteTask(id);
  }

  function handleStatusTask() {
    statusTask(id);
  }

  function handleCheckInput() {
    setIsChecked(true);
  }

  return (
    <div className={styles.task} key={id}>
      <input
        type="radio"
        onClick={handleStatusTask}
        onChange={handleCheckInput}
      />
      <p className={isChecked ? styles.checked : styles.noChecked}>{content}</p>
      <Trash size={24} onClick={handleDeleteTask} />
    </div>
  );
}

export { Task };
