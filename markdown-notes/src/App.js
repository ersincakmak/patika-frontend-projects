import React from 'react'
import { Header, NoteList } from './components'
import './style/App.css'

const App = () => {
  return (
    <div className="container">
      <Header />
      <NoteList />
    </div>
  )
}

export default App
