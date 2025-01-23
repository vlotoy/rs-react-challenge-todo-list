import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';
import { TaskList } from './components/TaskList';
import { PlusCircle } from '@phosphor-icons/react';

export interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateTask(event: React.FormEvent) {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  }

  function handleOnChangeNewTaskTitle(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setNewTaskTitle(event.target.value);
  }

  function handleDeleteTask(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleCheckTask(taskId: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
    );

    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.input} onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleOnChangeNewTaskTitle}
            value={newTaskTitle}
            required
          />
          <button>
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
        <main>
          <TaskList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onCheckTask={handleCheckTask}
          />
        </main>
      </div>
    </>
  );
}

export default App;
