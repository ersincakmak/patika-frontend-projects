import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Container from '../../components/Container'
import api from '../../contants/api'
import { IClothes } from '../../types/clothes'
import * as S from './style'

const Home = () => {
  const [clothes, setClothes] = useState<IClothes[]>([])

  const fetchClothes = async () => {
    try {
      const { data } = await api.get('clothes')
      setClothes(data as IClothes[])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchClothes()
  }, [])

  return (
    <S.HomeContainer>
      <Container>
        <S.Grid>
          {clothes.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </S.Grid>
      </Container>
    </S.HomeContainer>
  )
}

export default Home
