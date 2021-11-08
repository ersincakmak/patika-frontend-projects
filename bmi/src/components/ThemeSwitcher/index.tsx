import { BsMoonFill, BsSun } from 'react-icons/bs'
import styled from 'styled-components'

const FlipCard = styled.div`
  background-color: transparent;
  width: 2.5rem;
  height: 2.5rem;
  perspective: 1000px;

  .switcher {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
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
    width: max-content;
    height: max-content;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    cursor: pointer;
    font-size: 1.5rem;
    border: 1px solid ${(props) => props.theme.colors.text};
    padding: 0.3em;
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
