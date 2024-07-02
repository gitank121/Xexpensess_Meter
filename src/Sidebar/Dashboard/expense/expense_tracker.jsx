import React, { useState } from 'react';
import './expense_tracker.css';
import ExpenseForm from './expenseform';
import ExpenseList from './expenselist';
import TotalExpense from './totalexpense';

const ExpenseTracker = ({ }) => {
  const [expenses, setExpenses] = useState([]);
  const [monthlyBudget, setMonthlyBudget] = useState(0);

  const totalExpense = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
  const remainingBudget = monthlyBudget - totalExpense;

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleMonthlyBudgetChange = (e) => {
    setMonthlyBudget(Number(e.target.value));
  };

  return (
      <div className="expense-content">
        <div className="content">
          <div className="budget-input">
            <label>
              Monthly Budget : ₹
              <input type="number" value={monthlyBudget} onChange={handleMonthlyBudgetChange} />
            </label>
          </div>
          <TotalExpense total={totalExpense} />
          <div className="remaining-budget">
            <h3>Remaining Budget: ₹ {remainingBudget}</h3>
          </div>
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </div>
      </div>
  );
};

export default ExpenseTracker;
