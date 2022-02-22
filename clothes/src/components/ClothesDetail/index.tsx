import React, { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { IClothes } from '../../types/clothes'
import Container from '../Container'
import * as S from './style'
import { BsCardImage } from 'react-icons/bs'
import { ClothesContext } from '../../context/clothesContext'

type Props = {
  item: IClothes
}

const ClothesDetail: React.FC<Props> = ({ item }) => {
  const navigate = useNavigate()

  const goBackHome = () => {
    navigate('/')
  }

  const {
    favorites,
    basket,
    addToFavorites,
    removeFromFavorites,
    addToBasket,
  } = useContext(ClothesContext)

  const isFavorite = useMemo(
    () => favorites.find((fav) => fav.id === item.id),
    [favorites, item]
  )

  const isInBasket = useMemo(
    () => basket.find((basket) => basket.id === item.id),
    [basket, item]
  )

  const favoriteButtonHandler = () => {
    isFavorite ? removeFromFavorites(item.id) : addToFavorites(item)
  }

  const basketButtonHandler = () => {
    isInBasket ? navigate('/basket') : addToBasket(item)
  }

  return (
    <S.DetailContainer>
      <Container>
        <S.Layout>
          <button onClick={goBackHome}>Go back</button>
          <S.Detail>
            <S.Image>
              <BsCardImage />
              <p>I don't have images and my aim is not find the images.</p>
            </S.Image>

            <div className="info">
              <h1>{item.title}</h1>
              <strong>Description</strong>
              <p>{item.description}</p>
              <p className="amount">{item.price + '$'}</p>
              <div className="buttons">
                <button onClick={favoriteButtonHandler}>
                  {isFavorite ? 'Remove from' : 'Add to'} Favorites
                </button>
                <button onClick={basketButtonHandler}>
                  {isInBasket ? 'Go to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </S.Detail>
        </S.Layout>
      </Container>
    </S.DetailContainer>
  )
}

export default ClothesDetail
