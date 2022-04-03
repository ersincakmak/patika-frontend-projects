import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const { score } = useSelector((state) => state.game);

  return (
    <header>
      <div className="logo-container">
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <div className="score-board">
        <span className="score-board__title">SCORE</span>
        <span className="score-board__score">{score}</span>
      </div>
    </header>
  );
};

export default Header;
