import React, { useContext } from 'react'
import Container from '../../components/Container'
import { ClothesContext } from '../../context/clothesContext'
import * as S from './style'

const Basket = () => {
  const { basket, removeFromBasket } = useContext(ClothesContext)

  return (
    <S.BasketContainer>
      <Container>
        <S.Layout>
          <h1>Cart</h1>
          {basket.length > 0 ? (
            basket.map((item) => (
              <S.Row key={item.id}>
                <span className="title">{item.title}</span>
                <span>{item.price + '$'}</span>
                <button onClick={() => removeFromBasket(item.id)}>
                  Remove
                </button>
              </S.Row>
            ))
          ) : (
            <p>There is no clothes in cart yet.</p>
          )}
        </S.Layout>
      </Container>
    </S.BasketContainer>
  )
}

export default Basket
