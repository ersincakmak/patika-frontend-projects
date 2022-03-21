import React, { useCallback, useEffect, useState } from 'react'
import { crypotApi } from './api'
import Coin from './components/Coin'
import Search from './components/Search'

const App = () => {
  const [coins, setCoins] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [showLoading, setShowLoading] = useState(loading)

  const fetchCoins = async () => {
    try {
      setLoading(true)
      const { data } = await crypotApi.getCoins()
      setCoins(data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const handleSearchCoins = useCallback(async (searchText) => {
    if (searchText.length === 0) {
      return fetchCoins()
    }

    try {
      setLoading(true)
      const { data: idData } = await crypotApi.getSearchedCoinsIds(searchText)
      const ids = idData.coins.map(({ id }) => id)
      const { data } = await crypotApi.getSearchedCoins(ids.toString())
      setCoins(data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchCoins()
  }, [])

  useEffect(() => {
    let timeout
    timeout = setTimeout(() => handleSearchCoins(searchText), 500)
    return () => clearTimeout(timeout)
  }, [searchText, handleSearchCoins])

  useEffect(() => {
    let timeout
    if (loading) {
      timeout = setTimeout(() => {
        setShowLoading(true)
      }, 500)
    }
    return () => clearTimeout(timeout)
  }, [loading])

  return (
    <div className="w-screen h-screen bg-[#101010] overflow-auto text-[#eee] py-6">
      <Search text={searchText} setText={setSearchText} />
      <div className="max-w-4xl w-11/12 mx-auto py-6 flex flex-col gap-6">
        {showLoading && <div>Loading ...</div>}
        {!showLoading &&
          coins.map((coin) => <Coin key={coin.id} coin={coin} />)}
      </div>
    </div>
  )
}

export default App
