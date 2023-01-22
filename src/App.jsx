import { Header } from './components/Header/Header';
import { AddTask } from './components/AddTask/AddTask';
import { Task } from './components/Task/Task';

import './global.css';
import styles from './App.module.css';
import { useState } from 'react';

import { v4 as id } from 'uuid';

// const tasks = [
//   {
//     id: id(),
//     content: 'Desafio inicial',
//     isFinished: false
//   },
//   {
//     id: id(),
//     content: 'Desafio intermediário',
//     isFinished: false
//   }
// ];

function App() {
  const [tasks, setTasks] = useState([
    {
      id: id(),
      content: 'Desafio inicial',
      isFinished: false
    },
    {
      id: id(),
      content: 'Desafio intermediário',
      isFinished: false
    }
  ]);

  const [newTasks, newSetTasks] = useState('');

  function getTextInput() {
    newSetTasks(event.target.value);
  }

  function createNewTask() {
    setTasks([...tasks, newTasks]);
  }

  return (
    <div>
      <Header />
      <div className={styles.page}>
        <AddTask createNewTask={createNewTask} getTextInput={getTextInput} />

        <div className={styles.task}>
          <div className={styles.tasksCreatedAndFinished}>
            <div className={styles.created}>
              <span>Tarefas criadas</span>
              <span>0</span>
            </div>

            <div className={styles.finished}>
              <span>Concluidas</span>
              <span>0 de 0</span>
            </div>
          </div>

          {tasks.map(task => {
            return (
              <Task
                key={id()}
                id={task.id}
                content={task.content}
                isFinished={task.isFinished}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { App };
