export const getWinner = (gamer1, gamer2) => {
  let winner;

  if (gamer1.pick === gamer2.pick) {
    winner = 'draw';
    return winner;
  }

  switch (gamer1.pick) {
    case 'rock':
      winner = gamer2.pick === 'paper' ? gamer2.name : gamer1.name;
      break;
    case 'paper':
      winner = gamer2.pick === 'scissors' ? gamer2.name : gamer1.name;
      break;
    case 'scissors':
      winner = gamer2.pick === 'rock' ? gamer2.name : gamer1.name;
      break;
    default:
      winner = null;
  }

  return winner;
};
