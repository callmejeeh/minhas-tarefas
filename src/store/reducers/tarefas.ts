import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      new Tarefa(
        'Estudar JS',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        '',
        1
      ),
      new Tarefa(
        'Projeto de estudo de Animação',
        enums.Prioridade.URGENTE,
        enums.Status.CONCLUIDA,
        'Rever aulas e montar seminário',
        2
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
