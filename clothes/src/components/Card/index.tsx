import React from 'react'
import { IClothes } from '../../types/clothes'
import * as S from './style'
import { BsCardImage } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

type Props = {
  item: IClothes
}

const Card: React.FC<Props> = ({ item }) => {
  const navigate = useNavigate()

  const onViewClick = () => {
    navigate(`/clothes/${item.id}`)
  }

  return (
    <S.Container>
      <S.Image>
        <BsCardImage />
        <p>I don't have images and my aim is not find the images.</p>
      </S.Image>
      <S.InfoBar>
        <h5>{item.title}</h5>
        <div className="amount">
          <span>{item.price + '$'}</span>
          <button onClick={onViewClick}>View Details</button>
        </div>
      </S.InfoBar>
    </S.Container>
  )
}

export default Card
