import { Trash } from '@phosphor-icons/react';
import { TaskType } from '../App';
import styles from './Task.module.css';

interface TaskProps {
  task: TaskType;
  onDeleteTask: (taskId: string) => void;
  onCheckTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onCheckTask }: TaskProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fields}>
        <input type="checkbox" onClick={() => onCheckTask(task.id)} />
        <p>{task.title}</p>
      </div>
      <button title="Deletar tarefa" onClick={() => onDeleteTask(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
