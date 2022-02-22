import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
  padding: 0.5rem;
  justify-content: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
`
