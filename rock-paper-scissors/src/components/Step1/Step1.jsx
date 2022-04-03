import React from 'react';
import { useDispatch } from 'react-redux';
import { options } from '../../constants/options';
import { setUserPick } from '../../store/gameSlice';
import Option from '../Option';
import './Step1.css';

const Step1 = () => {
  const dispatch = useDispatch();

  const handleClick = (option) => {
    dispatch(setUserPick(option));
  };

  return (
    <div className="step1">
      <div className="step1-container">
        <img src="/assets/bg-triangle.svg" alt="board-background" />
        <div className="step1-options">
          <Option
            className="selectable"
            name="paper"
            onClick={() => handleClick('paper')}
          />
          <Option
            className="selectable"
            name="scissors"
            onClick={() => handleClick('scissors')}
          />
          <Option
            className="selectable"
            name="rock"
            onClick={() => handleClick('rock')}
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
