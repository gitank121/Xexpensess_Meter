import React from 'react';
import './sidebar.css';
import './analytics'
import './dashboard'
import './bills'

const Sidebar = ({username, onLogout, onNavigate }) => {
  return (
    <div className="sidebar">
      <header className="header">
        <h1>Welcome, {username}!</h1>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </header>
    <div className="sidebar-content">
      <nav>
        <ul>
          <li><button onClick={() => onNavigate('dashboard')}>DASHBOARD</button></li>
          <li><button onClick={() => onNavigate('bills')}>BILLS</button></li>
          <li><button onClick={() => onNavigate('analytics')}>ANALYTICS</button></li>
        </ul>
      </nav>
    </div>
    </div>

  );
};

export default Sidebar;
