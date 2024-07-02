import React, { useState } from 'react';
import './expenseform.css'

const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Select');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ amount, description, category, date });
    setAmount('');
    setDescription('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Select" disabled>Select</option>
        <option value="Food/Beverage">Food/Beverage</option>
        <option value="Travel/Commute">Travel/Commute</option>
        <option value="Groceries">Groceries</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Shopping">Shopping</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button className="add-expense" type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

