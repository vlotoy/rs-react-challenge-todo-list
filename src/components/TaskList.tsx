import styles from './TaskList.module.css';
import { TaskType } from '../App';
import { EmptyList } from './EmptyList';
import { Task } from './Task';

interface TaskListProps {
  tasks: TaskType[];
  onDeleteTask: (taskId: string) => void;
  onCheckTask: (taskId: string) => void;
}

export function TaskList({ tasks, onDeleteTask, onCheckTask }: TaskListProps) {
  const isEmptyList = tasks.length === 0;
  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter(
    (task) => task.isComplete === true
  ).length;

  return (
    <>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{totalTasks}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>{totalCompletedTasks}</span>
        </div>
      </header>

      {isEmptyList ? (
        <EmptyList />
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onCheckTask={onCheckTask}
          />
        ))
      )}
    </>
  );
}
