import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onNavigate }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-item" onClick={() => onNavigate('home')}>🏠</div>
            <div className="sidebar-item" onClick={() => onNavigate('chat1')}>1</div>
            <div className="sidebar-item" onClick={() => onNavigate('chat2')}>2</div>
            <div className="sidebar-item" onClick={() => onNavigate('chat3')}>3</div>
            <div className="sidebar-item" onClick={() => onNavigate('chat4')}>4</div>
        </div>
    );
}

export default Sidebar;
