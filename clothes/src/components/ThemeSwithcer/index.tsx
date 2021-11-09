import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { transition } from '../../contants/style'

const switcherColors = {
  dark: {
    bg: '#dcd4cd',
    bgHovered: '#fef5ed',
  },
  light: {
    bg: '#2b2c2b',
    bgHovered: '#191A19',
  },
}

const SwithcerContaienr = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;

  .text {
    font-size: 0.75rem; // 14px
    transition: ${transition};
    color: ${(props) =>
      props.theme.title === 'dark'
        ? switcherColors.dark.bg
        : switcherColors.light.bg};

    :hover {
      color: ${(props) =>
        props.theme.title === 'dark'
          ? switcherColors.dark.bgHovered
          : switcherColors.light.bgHovered};
    }
  }
`

const Swithcer = styled.div`
  width: 48px;
  height: 28px;
  border-radius: 24px;
  background-color: ${(props) =>
    props.theme.title === 'dark'
      ? switcherColors.dark.bg
      : switcherColors.light.bg};
  :hover {
    background-color: ${(props) =>
      props.theme.title === 'dark'
        ? switcherColors.dark.bgHovered
        : switcherColors.light.bgHovered};

    &::after {
      background-color: ${(props) =>
        props.theme.title === 'dark'
          ? switcherColors.dark.bgHovered
          : switcherColors.light.bgHovered};
    }
  }

  cursor: pointer;
  transition: ${transition};
  position: relative;
  overflow: hidden;

  ::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    transition: ${transition};
    top: 4px;
    left: ${(props) => (props.theme.title === 'dark' ? '4px' : '24px')};
    background-color: ${(props) => props.theme.colors.background};
  }

  ::after {
    opacity: ${(props) => (props.theme.title === 'dark' ? '1' : '0')};
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: absolute;
    transition: ${transition};
    top: 5px;
    left: ${(props) => (props.theme.title === 'dark' ? '12px' : '32px')};

    background-color: ${(props) =>
      props.theme.title === 'dark'
        ? switcherColors.dark.bg
        : switcherColors.light.bg};
  }
`

interface Props {
  toggleTheme: () => void
}

const ThemeSwithcer: React.FC<Props> = ({ toggleTheme }) => {
  const context = useContext(ThemeContext)

  const darkClick = () => {
    if (context.title === 'light') {
      toggleTheme()
    }
  }

  const lightClick = () => {
    if (context.title === 'dark') {
      toggleTheme()
    }
  }

  return (
    <SwithcerContaienr>
      <span className="text" onClick={darkClick}>
        DARK
      </span>
      <Swithcer onClick={toggleTheme} />
      <span className="text" onClick={lightClick}>
        LIGHT
      </span>
    </SwithcerContaienr>
  )
}

export default ThemeSwithcer
