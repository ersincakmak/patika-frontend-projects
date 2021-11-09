import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Result } from '../types/calculator'
import {
  clearResultsFromLocalStorage,
  getResultsFromLocalStorage,
} from '../utils/localStorage'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 1em;
`

const Results = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: ${(props) => props.theme.colors.text};
  transition: ${(props) => props.theme.transition};
  width: min(37.5rem, 100%); // 600px
  margin-inline: auto;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
  }

  .clear {
    padding: 0.5em;
    border-radius: 5px;
    background-color: transparent;
    color: ${(props) => props.theme.colors.brand};
    border: 2px solid ${(props) => props.theme.colors.brand};
    font-size: 1rem;
    cursor: pointer;
    transition: ${(props) => props.theme.transition};

    :hover {
      color: ${(props) => props.theme.colors.brandHover};
      border-color: ${(props) => props.theme.colors.brandHover};
    }
  }

  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    padding: 1em;
    border-bottom: 2px solid ${(props) => props.theme.colors.brand};
    width: 100%;
    display: flex;
    position: relative;

    &.item {
      transition: ${(props) => props.theme.transition};
      :hover {
        background-color: ${(props) => props.theme.colors.inputBg};
      }
    }

    .bmi {
      display: inline-block;
      min-width: 1.875rem; // 30px
      margin-left: auto;
    }

    .bold {
      font-weight: 600;
    }
  }
`

const MyResults = () => {
  const [data, setData] = useState<Result[]>([])

  console.log(data)

  useEffect(() => {
    setData(getResultsFromLocalStorage())
  }, [])

  return (
    <Container>
      <Results>
        <div className="header">
          <h1>My Results</h1>
          <button
            className="clear"
            onClick={() => {
              clearResultsFromLocalStorage()
              setData(getResultsFromLocalStorage())
            }}
          >
            Clear History
          </button>
        </div>
        {data.length < 1 ? (
          <div>There is no history for bmi calculation.</div>
        ) : (
          <ul>
            <li>
              <span className="bold">Name</span>
              <span className="bmi bold">BMI</span>
            </li>
            {data.map((item, index) => (
              <li key={`data-key-${index}`} className="item">
                <span className="bold">{item.name}</span>
                <span className="bmi">{item.bmi.toFixed(0)}</span>
              </li>
            ))}
          </ul>
        )}
      </Results>
    </Container>
  )
}

export default MyResults
