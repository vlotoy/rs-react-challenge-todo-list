import styles from './TaskList.module.css';
import { TaskType } from '../App';
import { EmptyList } from './EmptyList';
import { Task } from './Task';

interface TaskListProps {
  tasks: TaskType[];
}

export function TaskList({ tasks }: TaskListProps ) {
  const isEmptyList = tasks.length === 0;

  return (
    <>
      <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>
          <div>
            <p>Concluídas</p>
            <span>{tasks.filter(task => task.isComplete === true).length}</span>
          </div>
      </header>

      {isEmptyList ? <EmptyList /> : tasks.map(task => <Task key={task.id} task={task} />)}
    </>
  )
} 