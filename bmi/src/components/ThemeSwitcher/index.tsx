import { BsMoonFill, BsSun } from 'react-icons/bs'
import styled from 'styled-components'

const FlipCard = styled.div`
  background-color: transparent;
  width: 2.5rem;
  height: 2.5rem;
  perspective: 1000px;
  border: 2px solid ${(props) => props.theme.colors.text};
  transition: ${(props) => props.theme.transition};

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .switcher {
    position: relative;
    width: 2rem;
    height: 2rem;
    text-align: center;
    transition: ${(props) => props.theme.transition};
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .switcher {
    transform: rotateY(
      ${(props) => (props.theme.title === 'light' ? '0deg' : '180deg')}
    );
  }

  .switcher__front,
  .switcher__back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${(props) => props.theme.transition};
    font-size: 1.5rem;
    padding: 0.2em;
    border-radius: 50%;
  }

  .switcher__front {
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.text};
  }

  .switcher__back {
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.text};
    transform: rotateY(180deg);
  }
`
interface Props {
  toggleTheme: () => void
}

const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <FlipCard onClick={toggleTheme}>
      <div className="switcher">
        <div className="switcher__front">
          <BsMoonFill />
        </div>
        <div className="switcher__back">
          <BsSun />
        </div>
      </div>
    </FlipCard>
  )
}

export default ThemeSwitcher
