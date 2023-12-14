import BarraLateral from '../../containers/BarraLateral'
import ListaTarefas from '../../containers/ListaTarefas'
import BotaoAdd from '../../styles/components/BotaoAdd'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaTarefas />
    <BotaoAdd />
  </>
)

export default Home
