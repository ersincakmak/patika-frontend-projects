import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      text-decoration: none;
      list-style: none;
      box-sizing: border-box;
    }

    html,body{
      font-family: sans-serif;
    }

    .App{
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: background .2s ease;
    }
`

export default GlobalStyle
