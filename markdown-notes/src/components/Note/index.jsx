import MDEditor from '@uiw/react-md-editor'
import moment from 'moment'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { AiFillEdit, AiOutlineCheck } from 'react-icons/ai'
import { IoTrashBinOutline } from 'react-icons/io5'
import TextareaAutosize from 'react-textarea-autosize'
import { NotesContext } from '../../context/Notes'
import './style.css'

const Note = ({ id, date, note }) => {
  const [text, setText] = useState(note)
  const [isEditing, setIsEditing] = useState(false)
  const { deleteNote } = useContext(NotesContext)

  const textAreaRef = useRef()
  const containerRef = useRef()

  const checkNoteIsEmpty = useCallback(() => {
    if (text.trim() === '') {
      alert("Note can't be empty")
      textAreaRef?.current.focus()
      return false
    }

    return true
  }, [textAreaRef, text])

  useEffect(() => {
    if (text.trim() === '') {
      setIsEditing(true)
      textAreaRef?.current?.focus()
    }

    containerRef?.current?.addEventListener('click', () => {
      setIsEditing(true)
      textAreaRef?.current?.focus()
    })

    const handleClickListener = (e) => {
      if (!containerRef?.current?.contains(e.target) && checkNoteIsEmpty()) {
        setIsEditing(false)
      }
    }

    window.addEventListener('click', handleClickListener)

    return () => {
      window.removeEventListener('click', handleClickListener)
    }
  }, [checkNoteIsEmpty, textAreaRef, containerRef, text])

  const handleDelete = () => {
    window.confirm('Are you sure you want to delete this note?') &&
      deleteNote(id)
  }
  return (
    <div className="note">
      <div className="note__header">
        <span className="note__date">
          {moment(date).format('dddd DD MMMM, YYYY [at] hh:mmA')}
        </span>
        <div className="note__buttons">
          <button
            className={`note__button note__button--${
              isEditing ? 'edit' : 'complete'
            }`}
          >
            {isEditing ? <AiFillEdit /> : <AiOutlineCheck />}
          </button>
          <button
            onClick={handleDelete}
            className="note__button note__button--delete"
          >
            <IoTrashBinOutline />
          </button>
        </div>
      </div>
      <div
        className={`note__content ${isEditing ? 'note__content--editing' : ''}`}
        ref={containerRef}
      >
        {isEditing ? (
          <TextareaAutosize
            ref={textAreaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <MDEditor.Markdown className="note__markdown" source={text} />
        )}
      </div>
    </div>
  )
}

export default Note
