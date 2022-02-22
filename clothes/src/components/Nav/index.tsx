import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import routes from '../../contants/routes'
import Container from '../Container'
import ThemeSwithcer from '../ThemeSwithcer'
import NavLink from './NavLink'

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  border-bottom: 2px solid ${(props) => props.theme.colors.card};
`

const NavInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .right {
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;
  }
`

const Logo = styled.h1`
  user-select: none;
  cursor: pointer;
  background: linear-gradient(to right, #2b5876, #4e4376);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

interface Props {
  toggleTheme: () => void
}

const Nav: React.FC<Props> = ({ toggleTheme }) => {
  const navigate = useNavigate()

  const onLogoClickHandler = () => {
    navigate('/')
  }

  return (
    <NavContainer>
      <Container>
        <NavInner>
          <Logo onClick={onLogoClickHandler}>SWEATISH</Logo>
          <div className="right">
            {routes.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
            <ThemeSwithcer toggleTheme={toggleTheme} />
          </div>
        </NavInner>
      </Container>
    </NavContainer>
  )
}

export default Nav
