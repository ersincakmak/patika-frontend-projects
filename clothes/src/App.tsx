import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Basket, Detail, Favorites, Home } from "./Pages/_export";
import { ResetCss } from "./styles/resetCss";
import useTheme from "./utils/useTheme";

const App = () => {
  const [theme, _] = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ResetCss />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothes/:id" element={<Detail />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
