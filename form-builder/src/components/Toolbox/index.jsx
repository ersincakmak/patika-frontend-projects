import React from 'react'
import DraggableTool from '../DraggableTool'
import { MdTextRotationNone, MdOutlineTextRotateVertical } from 'react-icons/md'
import { IoIosArrowDropdown } from 'react-icons/io'
const Toolbox = () => {
  return (
    <div className="flex flex-col flex-1 gap-4 w-full max-w-xs min-w-[20rem]">
      <h1 className="text-center text-2xl">Toolbox</h1>
      <DraggableTool type="text-input">
        <div className="border border-dashed border-slate-700 px-4 py-2 flex gap-2 items-center">
          <MdTextRotationNone className="text-xl" /> Text Input
        </div>
      </DraggableTool>
      <DraggableTool type="text-area">
        <div className="border border-dashed border-slate-700 px-4 py-2 flex gap-2 items-center">
          <MdOutlineTextRotateVertical className="text-xl" />
          Text Area
        </div>
      </DraggableTool>
      <DraggableTool type="dropdown">
        <div className="border border-dashed border-slate-700 px-4 py-2 flex gap-2 items-center">
          <IoIosArrowDropdown className="text-xl" />
          Dropdown
        </div>
      </DraggableTool>
    </div>
  )
}

export default Toolbox
