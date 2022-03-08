const { createContext, useState } = require('react')

export const NotesContext = createContext()

export const NotesContextProvider = (props) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      date: new Date('2022-03-08T12:00:00'),
      note: `# Hello, World!

This is your first Angular Markdown note. You can:

* Click/Focus to edit

* Click off/Blur to save

* Add a new note  by clicking the plus sign above.

* Delete this note

Markdown compiled using the fantastic [angular-markdown-editable](http://projects.quiver.is/angular-markdown-editable/) directive.`,
    },
  ])

  const addNote = (note) => {
    setNotes([...notes, note])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const updateNote = (id, updates) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, ...updates } : note))
    )
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {props.children}
    </NotesContext.Provider>
  )
}
