import { createGlobalStyle } from 'styled-components'

export const ResetCss = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        color: inherit;
        border: none;
        outline: none;
        line-height: 1;
        font-family: inherit;
    }

    html,body{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: ${(props) => props.theme.colors.text};
    }

    .App{
        display: flex;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        flex-direction: column;
        background-color: ${(props) => props.theme.colors.background};
        transition: background .2s ease;
    }
`
