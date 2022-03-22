import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Book = ({ book }) => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <div className={`book ${active ? 'active' : ''}`}>
      <div className=" h-full flex flex-col gap-2 items-center p-8 bg-white relative">
        {active ? (
          <div className="flex-1 flex flex-col">
            <button
              className="absolute right-4 top-4 outline-none border-none bg-transparent"
              onClick={toggleActive}
            >
              <FaTimes />
            </button>
            <p className="flex-1 mb-2">
              {book.description.slice(0, 250)}
              {book.description.length > 250 && '...'}
            </p>
            <p className="font-semibold text-sm">{book.publishedDate}</p>
            <p className="font-semibold text-sm">{book.publisher}</p>
            <p className="font-semibold text-sm">
              {book.pageCount && book.pageCount + ' Pages'}
            </p>
          </div>
        ) : (
          <>
            <div className="w-44 h-64 object-cover">
              <img
                src={book?.imageLinks?.thumbnail}
                alt={book?.title}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex gap-2 font-semibold ">
              <a
                className="hover:underline cursor-pointer"
                href={book.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
              <span
                className="hover:underline cursor-pointer"
                onClick={toggleActive}
              >
                Details
              </span>
            </div>
            <div className="flex flex-col px-4 overflow-hidden mt-auto">
              <p className="text-center text-sm">{book.title}</p>
              <p className="text-center text-sm font-semibold">
                {book.authors ? book.authors[0] : 'No author'}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Book
