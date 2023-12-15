import { useState, useEffect, ChangeEvent, SetStateAction } from 'react'
import * as S from './style'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../../store/reducers/tarefas'
import TarefaClass from '../../../models/Tarefa'
import { Botao, BotaoSalvar } from '../..'

type Props = TarefaClass

const Tarefa = ({ nome, telefone, email, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [telefoneEdit, setTelefoneEdit] = useState('')
  const [emailEdit, setEmailEdit] = useState('')

  useEffect(() => {
    if (telefone.length > 0) {
      setTelefoneEdit(telefone)
    }
  }, [telefone])

  useEffect(() => {
    if (email.length > 0) {
      setEmailEdit(email)
    }
  }, [email])

  function cancelarEdicao() {
    setEstaEditando(false)
    setTelefoneEdit(telefone)
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <S.Titulo>
          {estaEditando && <em>Editando:</em>}
          {nome}
        </S.Titulo>
      </label>
      <S.Descricao
        disabled={!estaEditando}
        value={telefoneEdit}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setTelefoneEdit(e.target.value)
        }
      >
        {telefone}
      </S.Descricao>
      <S.Descricao
        disabled={!estaEditando}
        value={emailEdit}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setEmailEdit(e.target.value)
        }
      >
        {email}
      </S.Descricao>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(editar({ nome, telefone, email, id }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
