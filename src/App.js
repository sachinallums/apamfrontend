import React, { useState } from 'react';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import ChatInterface from './ChatInterface';
import './App.css';

const App = () => {
    const [page, setPage] = useState('home');

    const handleNavigate = (page) => {
        setPage(page);
    }

    const handleStartNewSession = () => {
        setPage('chat1');
    }

    return (
        <div className="app">
            <Sidebar onNavigate={handleNavigate} />
            <div className="content">
                {page === 'home' && <HomePage onStartNewSession={handleStartNewSession} />}
                {page === 'chat1' && <ChatInterface />}
                {page === 'chat2' && <ChatInterface />}
                {page === 'chat3' && <ChatInterface />}
                {page === 'chat4' && <ChatInterface />}
            </div>
        </div>
    );
}

export default App;
