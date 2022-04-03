import React from 'react';
import { options } from '../../constants/options';
import './Option.css';

const Option = ({ name, onClick, className, winner, wait, waitText }) => {
  if (wait) {
    return (
      <div className="option-empty">
        <p>{waitText}</p>
      </div>
    );
  }

  return (
    <div
      title={options[name].name}
      onClick={onClick}
      className={`option ${options[name].name} ${className} ${
        winner ? 'winner' : ''
      }`}
    >
      <img src={options[name].iconPath} alt={options[name].name} />
    </div>
  );
};

export default Option;
