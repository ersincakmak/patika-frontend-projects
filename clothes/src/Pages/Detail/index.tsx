/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClothesDetail from '../../components/ClothesDetail'
import api from '../../contants/api'
import { IClothes } from '../../types/clothes'
import * as S from './style'

const Detail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [singleClothes, setsingleClothes] = useState<IClothes | null>(null)

  const fetchSingleClothes = async () => {
    try {
      const { data } = await api.get(`clothes/${id}`)
      setsingleClothes(data as IClothes)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchSingleClothes()
  }, [])

  if (loading) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    )
  }

  return (
    <S.DetailContainer>
      {!singleClothes ? (
        <p>There is no clothes with this id.</p>
      ) : (
        <ClothesDetail item={singleClothes} />
      )}
    </S.DetailContainer>
  )
}

export default Detail
