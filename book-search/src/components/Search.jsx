import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

const Search = ({ text, setText }) => {
  return (
    <label
      className="mx-auto max-w-4xl w-11/12 bg-[#eee] text-black flex flex-row items-center
                rounded pl-3 overflow-hidden"
    >
      <RiSearchLine className="text-2xl" />
      <input
        type="search"
        placeholder="Search"
        className="text-black placeholder:text-black bg-transparent w-full px-4 py-2 outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  )
}

export default Search
