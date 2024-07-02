import React, { useState} from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { parseISO, isWithinInterval } from 'date-fns';

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = ({ expenses, bills }) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showChart, setShowChart] = useState(false);

  const handleGenerate = () => {
    if (fromDate && toDate) {
      const filteredExpenses = expenses.filter(expense => 
        isWithinInterval(parseISO(expense.date), {
          start: parseISO(fromDate),
          end: parseISO(toDate)
        })
      );

      const filteredBills = bills.filter(bill => 
        isWithinInterval(parseISO(bill.dueDate), {
          start: parseISO(fromDate),
          end: parseISO(toDate)
        })
      );

      setFilteredData([...filteredExpenses, ...filteredBills]);
      setShowChart(true);
    }
  };

  const data = {
    labels: filteredData.map(item => item.description || item.billName),
    datasets: [
      {
        data: filteredData.map(item => item.amount || item.billAmount),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ]
      }
    ]
  };

  return (
    <div>
      <h2>Analytics</h2>
      <div>
        <label>
          From Date:
          <input
            type="date"
            value={fromDate}
            onChange={e => setFromDate(e.target.value)}
          />
        </label>
        <label>
          To Date:
          <input
            type="date"
            value={toDate}
            onChange={e => setToDate(e.target.value)}
          />
        </label>
        <button onClick={handleGenerate}>Generate</button>
      </div>
      {showChart && <Pie data={data} />}
    </div>
  );
};

export default Analytics;
