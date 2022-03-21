import axios from 'axios'

export const crypotApi = {
  getCoins: () => {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    return axios.get(url)
  },
  getSearchedCoinsIds: (searchText) => {
    const url = 'https://api.coingecko.com/api/v3/search'
    return axios.get(url, {
      params: {
        query: searchText,
      },
    })
  },
  getSearchedCoins: (ids) => {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    return axios.get(url, {
      params: {
        ids,
      },
    })
  },
}
