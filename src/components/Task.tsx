import { Trash } from '@phosphor-icons/react';
import { TaskType } from '../App';
import styles from './Task.module.css';

interface TaskProps {
  task: TaskType;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fields}>
        <input type="checkbox" />
        <p>{task.title}</p>
      </div>
      <button title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </div>
  );
}
