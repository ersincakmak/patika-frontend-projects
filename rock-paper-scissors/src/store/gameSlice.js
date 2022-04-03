import { createSlice } from '@reduxjs/toolkit';
import { getWinner } from '../utils/getWinner';

const initialState = {
  score: 0,
  userPick: null,
  computerPick: null,
  winner: null,
  step: 1,
  isComputerPicking: false,
};

const options = ['rock', 'paper', 'scissors'];

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUserPick: (state, action) => {
      state.userPick = action.payload;
      state.step = 2;
      state.isComputerPicking = true;
    },

    setComputerPick: (state) => {
      state.isComputerPicking = false;
      state.computerPick = options[Math.floor(Math.random() * 3)];
      state.winner = getWinner(
        {
          name: 'user',
          pick: state.userPick,
        },
        {
          name: 'computer',
          pick: state.computerPick,
        }
      );
      if (state.winner === 'user') {
        state.score += 1;
      }
    },

    playAgain: (state) => {
      state.step = 1;
      state.userPick = null;
      state.computerPick = null;
      state.winner = null;
      state.isComputerPicking = false;
    },
  },
});

export const { setUserPick, setComputerPick, playAgain } = gameSlice.actions;

export default gameSlice.reducer;
