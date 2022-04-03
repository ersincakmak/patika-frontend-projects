import React, { useState } from 'react';
import './Rules.css';

const Rules = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button className="rules-button" onClick={openModal}>
        Rules
      </button>
      <div className={`rules-modal ${modalOpen ? 'open' : ''}`}>
        <p>RULES</p>
        <img src="/assets/image-rules.svg" alt="rules" />
        <button className="rules-modal-close" onClick={closeModal}>
          <img src="/assets/icon-close.svg" alt="close" />
        </button>
      </div>
    </>
  );
};

export default Rules;
