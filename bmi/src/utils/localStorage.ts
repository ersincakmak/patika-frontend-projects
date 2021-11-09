import { Result } from '../types/calculator'

export const writeToLocalStorage = (data: Result) => {
  const ls = localStorage.getItem('bmi')
  if (ls) {
    const array = []
    array.push(...JSON.parse(ls))
    console.log(array)
    array.push(data)
    localStorage.setItem('bmi', JSON.stringify(array))
  } else {
    const array = []
    array.push(data)
    localStorage.setItem('bmi', JSON.stringify(array))
  }
}

export const getResultsFromLocalStorage = () => {
  const lsData = localStorage.getItem('bmi')
  const array = []
  if (lsData) {
    array.push(...JSON.parse(lsData))
  }
  return array
}

export const clearResultsFromLocalStorage = () => {
  localStorage.removeItem('bmi')
}
