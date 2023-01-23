import { useState } from 'react';

import styles from './AddTask.module.css';

import { PlusCircle } from 'phosphor-react';

function AddTask({ createNewTask }) {
	const [newTaskTitle, setNewTaskTitle] = useState('');

	function handleGetTextInput() {
		setNewTaskTitle(event.target.value);
	}

	function handleCreateNewTask() {
		createNewTask(newTaskTitle);
		setNewTaskTitle('');
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
