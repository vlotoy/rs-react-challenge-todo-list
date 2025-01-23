import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';

import './global.css';
import styles from './App.module.css';
import { TaskList } from './components/TaskList';

export interface TaskType {
  id: number,
  title: string,
  isComplete: boolean
}

const tasks: TaskType[] = [{
  id: 1,
  title: 'Terminar desafio',
  isComplete: false
},{
  id: 2,
  title: 'Assistir aulasAssistir aulasAssistir aulasAssistir aulas',
  isComplete: true
}];

const tasks2: TaskType[] = []

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TaskInput />
        <main>
          <TaskList tasks={tasks}/>
        </main>
      </div>
    </>
  )
}

export default App
