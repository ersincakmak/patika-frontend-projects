import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  border: 2px solid ${(props) => props.theme.colors.card};
`

export const Image = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.text + '25'};

  svg {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.text};
    z-index: 2;
  }
`

export const InfoBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  h5 {
    font-size: 1rem;
    text-align: center;
    width: 100%;
  }

  .amount {
    display: flex;
    justify-content: space-around;
    align-items: center;

    span {
      font-size: 1.25rem;
    }

    button {
      background-color: ${(props) => props.theme.colors.text};
      padding: 0.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      cursor: pointer;
      color: ${(props) => props.theme.colors.background};
    }
  }
`
