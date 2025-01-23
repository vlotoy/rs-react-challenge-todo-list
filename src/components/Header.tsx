import styles from './Header.module.css';
import toDo from '../assets/todo-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDo} alt="ToDo logo" />
    </header>
  );
}
