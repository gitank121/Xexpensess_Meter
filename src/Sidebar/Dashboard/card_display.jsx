import React from 'react';
import './card_display.css';

const CardDisplay = ({ cards = [], onRemoveCard }) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card-display" key={index}>
          <div className="card-number">{card.cardNumber || 'N/A'}</div>
          <div className="card-name">{card.cardName || 'N/A'}</div>
          <div className="expiry-date">{card.expiryDate || 'N/A'}</div>
          <div className="cvv1">{card.cvv || 'N/A'}</div>
          <button onClick={() => onRemoveCard(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
export default CardDisplay;
