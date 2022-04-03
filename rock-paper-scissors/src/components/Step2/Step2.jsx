/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playAgain, setComputerPick } from '../../store/gameSlice';
import Option from '../Option';
import './Step2.css';

const Step2 = () => {
  const [waitText, setWaitText] = useState(3);
  const [wait, setWait] = useState(true);

  const { computerPick, userPick, winner, isComputerPicking } = useSelector(
    (state) => state.game
  );

  const dispatch = useDispatch();

  const playAgainClick = () => {
    dispatch(playAgain());
  };

  const handleComputerPick = () => {
    const waitInterval = setInterval(() => {
      setWaitText((ex) => ex - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(waitInterval);
      dispatch(setComputerPick());
      setWait(false);
    }, 3000);
  };

  useEffect(() => {
    if (isComputerPicking) {
      handleComputerPick();
    }
  }, [isComputerPicking]);

  return (
    <div className="step2">
      <div className="step2-options">
        <div className="step2-option">
          <Option name={userPick} winner={winner === 'user'} />
          <p>YOU PICKED</p>
        </div>

        <div className="step2-option">
          <Option
            name={computerPick}
            wait={wait}
            waitText={waitText}
            winner={winner === 'computer'}
          />
          <p>THE HOUSE PICKED</p>
        </div>
      </div>

      {winner && (
        <div className="step2-result">
          <p className="title">
            {winner === 'draw'
              ? 'DRAW'
              : winner === 'user'
              ? 'YOU WIN'
              : 'YOU LOSE'}
          </p>
          <button className="play-again" onClick={playAgainClick}>
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
};

export default Step2;
