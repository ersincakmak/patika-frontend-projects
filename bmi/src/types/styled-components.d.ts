import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'dark' | 'light'
    colors: {
      inputBg: string
      placeholderColor: string
      bg: string
      text: string
      brand: string
      brandContrastText: string
      brandHover: string
      error: string
    }
    transition: string
  }
}
