import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NLink = styled.button`
  outline: none;
  border: none;
  padding: 0.5em 0.7em;
  background-color: #404040;
  color: ${(props) => props.theme.colors.brandContrastText};
  background-color: ${(props) => props.theme.colors.brand};
  cursor: pointer;
  border-radius: 0.3125rem; // 5px
  font-size: 1rem; // 16px
  line-height: 1;
  transition: ${(props) => props.theme.transition};
  user-select: none;

  :hover {
    background-color: ${(props) => props.theme.colors.brandHover};
  }
`

interface Props {
  label: string
  destination: string
}

const NavLink: React.FC<Props> = ({ destination, label }) => {
  return (
    <Link to={destination}>
      <NLink>{label}</NLink>
    </Link>
  )
}

export default NavLink
