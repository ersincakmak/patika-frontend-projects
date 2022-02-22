import styled from 'styled-components'

export const BasketContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
`

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .title {
    flex: 1;
  }

  button {
    background-color: ${(props) => props.theme.colors.text};
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    color: ${(props) => props.theme.colors.background};
  }
`
