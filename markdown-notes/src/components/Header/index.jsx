import React, { useContext } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { v4 } from 'uuid'
import { NotesContext } from '../../context/Notes'
import './style.css'

const Header = () => {
  const { addNote } = useContext(NotesContext)

  const handleAddClick = () => {
    addNote({
      id: v4(),
      date: new Date().toISOString(),
      note: '',
    })
  }

  return (
    <header>
      <h1>React Markdown Notes</h1>
      <button onClick={handleAddClick}>
        <FaPlusCircle />
      </button>
    </header>
  )
}

export default Header
