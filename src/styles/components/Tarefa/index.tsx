import { useState, useEffect } from 'react'
import * as S from './style'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../../store/reducers/tarefas'
import TarefaClass from '../../../models/Tarefa'
import { BotaoSalvar } from '../..'

type Props = TarefaClass

const Tarefa = ({ descricao, prioridade, status, titulo, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoEdit, setDescricaoEdit] = useState('')

  useEffect(() => {
    if (descricao.length > 0) {
      setDescricaoEdit(descricao)
    }
  }, [descricao])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricaoEdit(descricao)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricaoEdit}
        onChange={(e) => setDescricaoEdit(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(editar({ descricao, prioridade, status, titulo, id }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
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
