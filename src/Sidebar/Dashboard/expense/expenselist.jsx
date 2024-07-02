import React from 'react';
import './expenselist.css'


const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.description} ~ ₹ {expense.amount} [{expense.category}]
          <button onClick={() => onDeleteExpense(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
