import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style:none;
}
`
export const Container = styled.div`
  display: inline;
  grid-template-columns: 1fr 1fr;
  padding: 0 40px;
  height: 100vh;
  width: 100%;
  margin-top: 16px;
`
export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 64px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
`

export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #6666;
  width: 100%;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoVoltar = styled(Botao)`
  width: 160px;
  height: 40px;
  position: fixed;
  top: 120px;
`

export default EstiloGlobal
