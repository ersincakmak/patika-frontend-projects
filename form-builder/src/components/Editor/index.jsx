import { useRef, useState } from 'react'
import { useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { ItemTypes } from '../../constants/itemTypes'
import { insertEditorElement, moveEditorElement } from '../../store/globalSlice'
import DraggableTool from '../DraggableTool'
import FormElement from '../FormElement'
import PreviewModal from '../PreviewModal'

const Editor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { editorElements } = useSelector((state) => state.global)
  const dispatch = useDispatch()

  const ref = useRef(null)

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item) => {
      if (!item.index && item.index !== 0 && editorElements.length < 1) {
        dispatch(
          insertEditorElement({
            type: item.type,
          })
        )
      }
    },
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
  }))

  drop(ref)

  const renderElements = (element, index) => {
    return (
      <DraggableTool
        key={element.id}
        index={index}
        type={element.type}
        moveElement={(from, to) => dispatch(moveEditorElement({ from, to }))}
      >
        <FormElement withToolkit {...element} />
      </DraggableTool>
    )
  }

  return (
    <>
      {isModalOpen && <PreviewModal onClose={() => setIsModalOpen(false)} />}
      <div className="flex flex-col flex-1 gap-4 w-full min-w-[20rem]">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Form Builder With React</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2 px-4 rounded bg-sky-500 hover:bg-sky-600 transition-all text-white"
          >
            Preview
          </button>
        </div>
        <div
          ref={ref}
          className="flex-1 bg-gray-200 border border-slate-300 p-3"
        >
          {editorElements.length < 1 && (
            <div className="text-center p-10 border-2 border-dashed border-slate-700">
              <h1>Drop Element here</h1>
            </div>
          )}
          {editorElements.map(renderElements)}
        </div>
      </div>
    </>
  )
}

export default Editor
