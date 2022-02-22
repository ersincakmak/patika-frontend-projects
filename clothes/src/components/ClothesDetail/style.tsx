import styled from 'styled-components'

export const DetailContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
`

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow: auto;
  gap: 1rem;

  button {
    width: max-content;
    background-color: ${(props) => props.theme.colors.text};
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    color: ${(props) => props.theme.colors.background};
  }
`

export const Image = styled.div`
  width: min(18.75rem, 100%);
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

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;

    h1 {
      font-size: 1.5rem;
      text-align: center;
    }

    .amount {
      font-size: 1.5rem;
      font-weight: 600;
      text-decoration: underline;
    }

    .buttons {
      display: flex;
      align-self: flex-end;
      width: max-content;
      gap: 1rem;
    }
  }
`
