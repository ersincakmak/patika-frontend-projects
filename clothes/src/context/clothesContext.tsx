import React, { createContext, useState } from 'react'
import { IClothes } from '../types/clothes'

interface IClothesContext {
  favorites: IClothes[]
  basket: IClothes[]
  addToFavorites: (data: IClothes) => void
  addToBasket: (data: IClothes) => void
  removeFromFavorites: (id: string) => void
  removeFromBasket: (id: string) => void
}

export const ClothesContext = createContext<IClothesContext>({
  basket: [],
  favorites: [],
  addToFavorites: () => {},
  addToBasket: () => {},
  removeFromFavorites: () => {},
  removeFromBasket: () => {},
})

const ClothesContextProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<IClothes[]>([])
  const [basket, setBasket] = useState<IClothes[]>([])

  const addToFavorites = (data: IClothes) => {
    setFavorites([...favorites, data])
  }

  const addToBasket = (data: IClothes) => {
    setBasket([...basket, data])
  }

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter((item) => item.id !== id))
  }

  const removeFromBasket = (id: string) => {
    setBasket(basket.filter((item) => item.id !== id))
  }

  return (
    <ClothesContext.Provider
      value={{
        basket,
        favorites,
        addToFavorites,
        addToBasket,
        removeFromFavorites,
        removeFromBasket,
      }}
    >
      {children}
    </ClothesContext.Provider>
  )
}

export default ClothesContextProvider
