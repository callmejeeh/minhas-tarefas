import Tarefa from '../../styles/components/Tarefa'
import { Container } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>2 tarefas marcadas como &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaTarefas
