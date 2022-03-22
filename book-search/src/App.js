import React, { useEffect, useState } from 'react'
import { getBooks } from './api'
import Book from './components/Book'
import Search from './components/Search'
import './app.css'

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const handleFetchBooks = async (search) => {
    try {
      setLoading(true)
      const { data } = await getBooks(search)
      setBooks(data.items)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    let timeout
    timeout = setTimeout(() => {
      handleFetchBooks(searchText)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [searchText])

  return (
    <div className="w-screen h-screen overflow-auto py-6">
      <h1 className="text-center text-2xl font-semibold mb-5">
        Book Search React
      </h1>
      <Search text={searchText} setText={setSearchText} />
      {loading && <div className="text-center">Loading...</div>}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto gap-4 p-4">
          {books.map((book, index) => (
            <Book book={book.volumeInfo} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
