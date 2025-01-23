import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';
import { TaskInput } from './components/TaskInput';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TaskInput />
        <main>
          <div>Task List</div>
        </main>
      </div>
    </>
  )
}

export default App
