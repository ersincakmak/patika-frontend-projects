import styled from 'styled-components'
import NavLinks from './NavLinks'

const Logo = styled.span`
  display: inline-block;
  font-size: 1.5rem; // 24px
  color: ${(props) => props.theme.colors.brand};
  font-weight: 600;
`
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid ${(props) => props.theme.colors.brand};
`
interface Props {
  toggleTheme: () => void
}
const Nav: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <NavContainer>
      <Logo>BMI CALCULATOR</Logo>
      <NavLinks toggleTheme={toggleTheme} />
    </NavContainer>
  )
}

export default Nav
