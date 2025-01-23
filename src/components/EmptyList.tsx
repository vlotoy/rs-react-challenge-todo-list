import styles from './EmptyList.module.css'
import clipboard from '../assets/clipboard.svg'

export function EmptyList() {
  return (
    <div className={styles.wrapper}>
      <img src={clipboard} alt="Ícone de lista vazia" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}