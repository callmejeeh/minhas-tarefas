import styled from 'styled-components'
import variaveis from '../../variaveis'
import { Botao } from '../..'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
