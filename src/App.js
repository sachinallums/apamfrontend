import React, { useState } from 'react';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import ChatInterface from './ChatInterface';
// import StartPage from './StartPage'; // Import StartPage component
import './App.css';

const App = () => {
    const [page, setPage] = useState('home');

    const handleNavigate = (page) => {
        setPage(page);
    }

    const currentSkill = "active listening";
    const scenarios = ["scenario1", "scenario2"];


    const handleStartNewSession = () => {
        setPage('chat1');
        // insert code here to get more information from the code about the session
    }


    return (
        /* 
        The following code is set up to make the lefthand navigation menu change 
        dynamically based on the number of items in the scenario list.
        */ 
        <div className="app">
            <Sidebar items={scenarios} onNavigate={handleNavigate} />
            <div className="content">
                {page === 'home' && <HomePage onStartNewSession={handleStartNewSession} currentSkill={currentSkill}/>}                
                {scenarios.length > 0 && scenarios.map((scenario, index) => (
                    page === `chat${index + 1}` && <ChatInterface key={index} currentSkill={currentSkill} />
                ))}
            </div>
        </div>
    );
}

export default App;
