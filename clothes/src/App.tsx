import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Nav from './components/Nav'
import { Basket, Detail, Favorites, Home } from './Pages'
import { ResetCss } from './styles/resetCss'
import darkTheme from './themes/dark'
import lightTheme from './themes/light'
import useTheme from './utils/useTheme'
import { Helmet } from 'react-helmet-async'

const App = () => {
  const [theme, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="App">
        <ResetCss />
        <BrowserRouter>
          <Nav toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothes/:id" element={<Detail />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
