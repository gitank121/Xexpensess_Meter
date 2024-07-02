import React, { useState } from 'react';
import './bills.css'

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [selectedBillName, setSelectedBillName] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const predefinedBillNames = [
    'Electricity',
    'Internet',
    'Phone',
    'Rent',
    'Credit Card',
  ];

  const handleAddBill = (e) => {
    e.preventDefault();
    const newBill = {
      billName: selectedBillName,
      billAmount,
      dueDate,
      additionalInfo,
    };
    setBills([...bills, newBill]);
    setSelectedBillName('');
    setBillAmount('');
    setDueDate('');
    setAdditionalInfo('');
  };


  return (
    <div className="bill-content">
      <div className="bill">
        <h2>Manage Bills</h2>
        <form className="manage-bill" onSubmit={handleAddBill} >
          <div>
              <select
                value={selectedBillName}
                onChange={(e) => setSelectedBillName(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a bill
                </option>
                {predefinedBillNames.map((billName, index) => (
                  <option key={index} value={billName}>
                    {billName}
                  </option>
                ))}

              </select>
              {selectedBillName === 'Electricity' && (
                  <input
                    type="text"
                    placeholder="Bill Number"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    required
                  />
              )}
              {selectedBillName === 'Internet' && (
                  <input
                    type="text"
                    placeholder="DLS Number"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    required
                  />
              )}
              {selectedBillName === 'Phone' && (
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    maxLength={10}
                    required
                  />
              )}
              {selectedBillName === 'Rent' && (
                  <input
                    type="month"
                    placeholder="Month"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    required
                  />
              )}
              {selectedBillName === 'Credit Card' && (
                  <input
                    type="text"
                    placeholder="Card Number"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    maxLength={16}
                    required
                  />
              )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Bill Amount"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              required
            />
          </div>
          <div >
            <input
              type="date"
              placeholder="Due Date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>

          <button className="add-bill" type="submit">Add Bill</button>
        </form>
      </div>
    </div>
  )
}

export default Bills;
