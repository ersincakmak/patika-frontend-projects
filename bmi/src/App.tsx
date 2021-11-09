import GlobalStyle from './styles/globalStyle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import { useTheme } from './themes'
import { ThemeProvider } from 'styled-components'
import dark from './themes/dark'
import light from './themes/light'
import WhatIsBmi from './pages/WhatIsBmi'

const App = () => {
  const [theme, setTheme] = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <BrowserRouter>
          <Nav
            toggleTheme={() => setTheme(theme.title === 'light' ? dark : light)}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whatisthebmi" element={<WhatIsBmi />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
