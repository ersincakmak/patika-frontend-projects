import React, { useContext } from 'react'
import Container from '../../components/Container'
import { ClothesContext } from '../../context/clothesContext'
import * as S from './style'

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(ClothesContext)

  return (
    <S.FavoritesContainer>
      <Container>
        <S.Layout>
          <h1>Favorites</h1>
          {favorites.length > 0 ? (
            favorites.map((item) => (
              <S.Row key={item.id}>
                <span className="title">{item.title}</span>
                <span>{item.price + '$'}</span>
                <button onClick={() => removeFromFavorites(item.id)}>
                  Remove
                </button>
              </S.Row>
            ))
          ) : (
            <p>There is no favorite yet.</p>
          )}
        </S.Layout>
      </Container>
    </S.FavoritesContainer>
  )
}

export default Favorites
