import React, { useEffect, useRef, useState } from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import NavLink from './NavLink'
import styled from 'styled-components'
import routes from '../../constants/routes'
import { Link } from 'react-router-dom'
import mediaQueries from '../../constants/mediaQueries'

const { sm } = mediaQueries

const NavItems = styled.div<{
  dropDownOpen: boolean
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  gap: 1em;

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    width: max-content;

    @media only screen and (${sm}) {
      display: none;
    }
  }

  .dropDown {
    @media only screen and (${sm}) {
      display: block;
    }

    display: none;
    position: relative;

    .title {
      background-color: ${(props) => props.theme.colors.brand};
      color: ${(props) => props.theme.colors.brandContrastText};
      border-radius: 5px;
      text-align: center;
      padding: 0.3em 0.7em;
      cursor: pointer;
      user-select: none;
    }

    .list {
      display: ${(props) => (props.dropDownOpen === true ? 'block' : 'none')};
      position: absolute;
      left: 50%;
      bottom: -15px;
      transform: translateY(100%) translateX(-50%);
      background-color: ${(props) => props.theme.colors.bg};
      border-radius: 5px;
      width: max-content;
      overflow: hidden;
      box-shadow: 0 0 5px 0
        ${(props) =>
          props.theme.title === 'light' ? '#00000066' : '#0000009d'};

      a {
        color: ${(props) => props.theme.colors.text};
        text-decoration: none;
      }

      &__item {
        width: 100%;
        padding: 0.5em 0.7em;
        transition: all 0.2s ease;
        user-select: none;
        :hover {
          background-color: ${(props) => props.theme.colors.brand};
          color: ${(props) => props.theme.colors.brandContrastText};
        }
      }
    }
  }
`

interface Props {
  toggleTheme: () => void
}

const NavLinks: React.FC<Props> = ({ toggleTheme }) => {
  const [dropDown, setDropDown] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clickEvent = (e: MouseEvent) => {
      if (e.target !== ref.current) {
        setDropDown(false)
      }
    }
    window.document.addEventListener('click', clickEvent)
    return () => {
      window.document.removeEventListener('click', clickEvent)
    }
  }, [])

  return (
    <NavItems dropDownOpen={dropDown}>
      <div className="links">
        {routes.map((item) => (
          <NavLink
            key={item.destination}
            destination={item.destination}
            label={item.label}
          />
        ))}
      </div>

      <div className="dropDown">
        <div
          className="title"
          ref={ref}
          onClick={() => setDropDown((ex) => !ex)}
        >
          Links
        </div>
        <div className="list">
          {routes.map((item) => (
            <Link to={item.destination}>
              <div className="list__item">{item.label}</div>
            </Link>
          ))}
        </div>
      </div>
      <ThemeSwitcher toggleTheme={toggleTheme} />
    </NavItems>
  )
}

export default NavLinks
