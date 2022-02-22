import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import ClothesContextProvider from './context/clothesContext'

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ClothesContextProvider>
        <App />
      </ClothesContextProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
