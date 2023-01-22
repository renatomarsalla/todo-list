import styles from './Task.module.css';

import { Trash } from 'phosphor-react';

function Task({ id, content, isFinished }) {
  return (
    <div className={styles.task} key={id}>
      <input type="radio" />
      <p>{content}</p>
      <Trash size={24} />
    </div>
  );
}

export { Task };
