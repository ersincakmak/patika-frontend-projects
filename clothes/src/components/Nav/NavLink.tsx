import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { transition } from '../../contants/style'

const LinkContainer = styled.span`
  padding: 0.5em 0.8em;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.background};
  transition: ${transition};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.card};
    text-decoration: underline;
  }
`

interface Props {
  href: string
  label: string
}

const NavLink: React.FC<Props> = ({ href, label }) => {
  return (
    <LinkContainer>
      <Link to={href}>{label}</Link>
    </LinkContainer>
  )
}

export default NavLink
