import axios from 'axios'

const bookApiUrl =
  'https://www.googleapis.com/books/v1/volumes?printType=books&orderBy=newest&maxResults=39'

export const getBooks = (search) =>
  axios.get(bookApiUrl, {
    params: {
      q: `intitle:${search}`,
    },
  })
