import { Result } from '../../types/calculator'
import styled from 'styled-components'

const ResultCard = styled.div<{
  bmi: number
}>`
  border-radius: 5px;
  padding: 1em 1.2em;
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.brand};
  .bold {
    font-weight: 600;
  }

  .bmiColor {
    color: ${(props) =>
      props.bmi < 18.5
        ? 'yellow'
        : props.bmi < 24.9
        ? 'green'
        : props.bmi < 29.9
        ? 'yellow'
        : 'red'};
  }
`

interface Props {
  result: Result
}

const BmiResult: React.FC<Props> = ({ result }) => {
  const getMessage = (bmi: number) => {
    switch (true) {
      case bmi < 18.5:
        return 'Underweight'
      case bmi > 18.5 && bmi < 24.9:
        return 'Healthy Weight'
      case bmi > 25 && bmi < 29.9:
        return 'Overweight'
      default:
        return 'Obesity'
    }
  }

  return (
    <ResultCard bmi={result.bmi}>
      Hi {result.name}, your bmi is {result.bmi.toFixed(0)}. This is considered{' '}
      <span className="bold bmiColor">{getMessage(result.bmi)}</span>.
    </ResultCard>
  )
}

export default BmiResult
