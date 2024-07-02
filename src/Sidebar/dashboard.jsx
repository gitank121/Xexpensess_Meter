import React from 'react';
import './dashboard.css';
// import DashboardBox from './Dashboard/dashboard_box';
// import ExpenseTracker from '../expense/expense_tracker';
// import PieChartComponent from './Dashboard/piechart';
// import TotalBudget from './Dashboard/total_budget';
// import UpcomingBills from './Dashboard/upcoming_bills';

const Dashboard = ({ onNavigate }) => {

    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <div className="dashboard-grid">
                    <div className="dashboard-box" onClick={() => onNavigate('expense_tracker')}>
                        <h2>Expense Tracker</h2>
                    </div>
                    <div className="dashboard-box" onClick={() => onNavigate('card_form')}>
                        <h2>Cards</h2>
                    </div>
                    <div className="dashboard-box" onClick={() => onNavigate('upcoming_bills')}>
                        <h2>Upcoming Bills</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;