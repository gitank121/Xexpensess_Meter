import React, { useState } from 'react';
import './upcoming_bills.css';

const UpcomingBills = ({ bills }) => {
  const [upcomingBills, setUpcomingBills] = useState(bills);

  const handleMarkAsPaid = (index) => {
    const updatedBills = [...upcomingBills];
    updatedBills[index].paid = true;
    setUpcomingBills(updatedBills);
  };

  return (
    <div className="upcoming-bills-container">
      <h3>Upcoming Bills</h3>
      <ul className="upcoming-bills-list">
        {upcomingBills.map((bill, index) => (
          <li key={index} className={bill.paid ? 'paid-bill' : ''}>
            <span>
              {bill.billName} - ₹{bill.billAmount} - Due: {bill.dueDate}
              {bill.additionalInfo && ` - ${bill.additionalInfo}`}
            </span>
            {!bill.paid && (
              <button className="mark-paid-button" onClick={() => handleMarkAsPaid(index)}>
                Mark as Paid
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingBills;
