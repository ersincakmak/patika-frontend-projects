import styled from 'styled-components'

const Error = styled.div`
  display: inline-block;
  line-height: 1;
  font-size: 0.875rem; // 14px
  color: ${(props) => props.theme.colors.error};
`

interface Props {
  msg: string
}

const FormikError: React.FC<Props> = ({ msg }) => {
  return <Error>{msg}</Error>
}

export default FormikError
