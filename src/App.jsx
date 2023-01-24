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
  //alterei aqui, voltar para tasks
  const [tasks, setTasks] = useState([]);

  function createNewTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: id(),
        content: taskTitle,
        isFinished: false
      }
    ]);
  }

  function deleteTask(idTask) {
    const tasksWithoutTaskDeleted = tasks.filter(task => {
      return task.id !== idTask;
    });

    setTasks(tasksWithoutTaskDeleted);
  }

  const [tasksFinished, setTaskFinished] = useState([]);
  function statusTask(idTask) {
    console.log(idTask);
    const taskWithThisIdTask = tasks.filter(task => {
      return task.id === idTask;
    });

    const changeStatus = taskWithThisIdTask.map(task => {
      return (task.isFinished = true);
    });

    setTasks([...tasks]);
    // console.log(tasks);

    const tasksFinished2 = tasks.filter(task => {
      return task.isFinished === true;
    });
    setTaskFinished(tasksFinished2);
    // console.log(tasksFinished.length);
  }

  return (
    <div>
      <Header />
      <div className={styles.page}>
        <AddTask createNewTask={createNewTask} />

        <div className={styles.task}>
          <div className={styles.tasksCreatedAndFinished}>
            <div className={styles.created}>
              <span>Tarefas criadas</span>
              <span>{tasks.length}</span>
            </div>

            <div className={styles.finished}>
              <span>Concluidas</span>
              <span>{`${tasksFinished.length} de ${tasks.length}`}</span>
            </div>
          </div>

          {tasks.map(task => {
            return (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                isFinished={task.isFinished}
                deleteTask={deleteTask}
                statusTask={statusTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { App };
