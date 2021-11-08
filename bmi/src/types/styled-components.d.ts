import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'dark' | 'light'
    colors: {
      bg: string
      text: string
      brand: string
      brandContrastText: string
      brandHover: string
    }
  }
}
