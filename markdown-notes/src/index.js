import React from 'react'
import ReactDOM from 'react-dom'
import './style/reset.css'
import App from './App'
import { NotesContextProvider } from './context/Notes'

ReactDOM.render(
  <React.StrictMode>
    <NotesContextProvider>
      <App />
    </NotesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
