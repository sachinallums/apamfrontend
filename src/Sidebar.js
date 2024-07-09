import React from 'react';
import './Sidebar.css';

const Sidebar = ({ items, onNavigate }) => {
    return (
      <div className="sidebar">
        <div className="sidebar-item" onClick={() => onNavigate('home')}>🏠</div>
        {items.map((item, index) => (
          <div 
            key={index} 
            className="sidebar-item" 
            onClick={() => onNavigate(`chat${index + 1}`)}
          >
            {index + 1}
          </div>
        ))}
        <div className="sidebar-finish">
            <button>Finish!</button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
