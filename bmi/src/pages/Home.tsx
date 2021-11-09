import Calculator from '../components/Calculator'
import styled from 'styled-components'

const Page = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 1em;
`

const Home: React.FC = () => {
  return (
    <Page>
      <Calculator />
    </Page>
  )
}

export default Home
