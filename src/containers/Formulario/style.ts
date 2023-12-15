import styled from 'styled-components'

const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    margin-top: 16px;
    resize: none;
    max-height: 40px;
  }
`

export default Form

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 8px;
  }

  label {
    margin-right: 8px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
