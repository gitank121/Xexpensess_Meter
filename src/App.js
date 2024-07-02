// src/App.js
import React, { useState } from 'react';
import './App.css';
import AuthPage from './Authentication/auth_page';
import ExpenseTracker from './Sidebar/Dashboard/expense/expense_tracker';
import Analytics from './Sidebar/analytics';
import Sidebar from './Sidebar/sidebar';
import Dashboard from './Sidebar/dashboard'
import UpcomingBills from './Sidebar/Dashboard/upcoming_bills';
import Bills from './Sidebar/bills';
import CardForm from './Sidebar/Dashboard/card_form';
import CardDisplay from './Sidebar/Dashboard/card_display';


const dummyExpenses = [
  { amount: 50, description: 'Groceries', date: '2024-07-01' },
  { amount: 200, description: 'Travel', date: '2024-07-02' },
  { amount: 200, description: 'Shopping', date: '2024-07-02' }
];

const dummyBills = [
  { billName: 'Electricity', billAmount: 150, dueDate: '2024-07-10' },
  { billName: 'Internet', billAmount: 50, dueDate: '2024-07-15' },
  { billName: 'Rent', billAmount: 500, dueDate: '2024-07-12' }
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [cards, setCards] = useState([]);
  const [showCardDisplay, setShowCardDisplay] = useState(false);


  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  
  const handleAddCard = (card) => {
    setCards([...cards, card]);
    setShowCardDisplay(true);
  };


  const handleRemoveCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };


  return (
    <div className="app">
      {!isLoggedIn ? (
        <div className="app-login">
          <AuthPage onLogin={handleLogin} />
        </div>
      ) : (
        <div className="app-container">
            <Sidebar onNavigate={handleNavigation} username={username} onLogout={handleLogout} />
            <div className="main-content">
              {currentPage === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
              {currentPage === 'expense_tracker' && <ExpenseTracker />}
              {currentPage === 'card_form' && 
                    (<> 
                      <CardForm onAddCard={handleAddCard} />
                      {showCardDisplay && <CardDisplay cards={cards} onRemoveCard={handleRemoveCard}/>} 
                    </>)}
              {currentPage === 'bills' && <Bills/> }
              {currentPage === 'analytics' && <Analytics expenses={dummyExpenses} bills={dummyBills} />}
              {currentPage === 'upcoming_bills' && <UpcomingBills bills={dummyBills} />}
            </div>
        </div>
      )}
    </div>
  );
};

export default App;
