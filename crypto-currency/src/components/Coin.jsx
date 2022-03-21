import React from 'react'
const formatNumber = (number) => {
  let fixCount = 2
  const afterDot = number.toString().split('.')[1]
  let index = 1

  if (afterDot && Number(afterDot.slice(0, 2)) === 0) {
    fixCount += 1
    while (afterDot[index] === '0') {
      index += 1
      fixCount += 1
    }
  }

  return number.toFixed(fixCount)
}

const Coin = ({ coin }) => {
  return (
    <div className="flex items-center gap-2 ">
      <div className="w-10 h-10 shrink-0">
        <img src={coin.image} alt={coin.name} className="object-cover" />
      </div>
      <div className="w-full text-xl leading-none overflow-hidden whitespace-nowrap text-ellipsis flex gap-2">
        {coin.name}
        <div
          className="text-md font-semibold text-[#999] leading-none align-text-bottom
                    overflow-hidden whitespace-nowrap text-ellipsis"
        >
          {coin.symbol.toUpperCase()}
        </div>
      </div>

      <div className="ml-auto w-max font-bold text-xl">
        <div
          className={`text-right text-sm ${
            Math.sign(coin.price_change_24h) < 0
              ? 'text-red-600'
              : 'text-green-600'
          }`}
        >
          ${formatNumber(coin.price_change_24h)}
        </div>
        <div className="text-right"> ${formatNumber(coin.current_price)}</div>
      </div>
    </div>
  )
}

export default Coin
