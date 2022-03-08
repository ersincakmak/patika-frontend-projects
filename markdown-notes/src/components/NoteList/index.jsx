import React, { useContext } from 'react'
import { NotesContext } from '../../context/Notes'
import { Note } from '../index'

const NoteList = () => {
  const { notes } = useContext(NotesContext)

  return notes.map((note) => <Note key={note.id} {...note} />)
}

export default NoteList
