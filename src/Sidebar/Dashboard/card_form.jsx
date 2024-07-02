import React, { useState } from 'react';
import './card_form.css'

const CardForm = ({ onAddCard }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard({ cardNumber, cardName, expiryDate, cvv });
    setCardNumber('');
    setCardName('');
    setExpiryDate('');
    setCvv('');
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-details">
        <div className="cd">
          <label>Card Number : </label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
            required
          />
        </div>
        <div className="cd">
          <label>Name on Card : </label >
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="card-details1">
        <div className="ed">
          <label> Expiry Date : </label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="cvv">
          <label> CVV :    </label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength="3"
            required
          />
        </div>
      </div >
      <button className="add-card" type="submit">Add Card</button>
    </form>
  );
};

export default CardForm;
