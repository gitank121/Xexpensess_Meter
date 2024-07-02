import React from 'react';
import './totalexpense.css'

const TotalExpense = ({ total }) => {
  return (
    <div className="total-expense">
      <h3>Total Expense: ₹ {total}</h3>
    </div>
  );
};

export default TotalExpense;
