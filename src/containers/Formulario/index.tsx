import { FormEvent, useState } from 'react'
import {
  BotaoVoltar,
  BotaoSalvar,
  Campo,
  Container,
  Titulo
} from '../../styles'
import Form from './style'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }

  const voltarHome = () => {
    navigate('/')
  }

  return (
    <Container>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          as="textarea"
          placeholder="Telefone"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          as="textarea"
          placeholder="E-mail"
        />
        <BotaoSalvar type="submit"> Cadastrar</BotaoSalvar>
      </Form>
      <BotaoVoltar onClick={voltarHome}>Voltar ao início</BotaoVoltar>
    </Container>
  )
}

export default Formulario
