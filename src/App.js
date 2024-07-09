import React, { useState } from 'react';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import ChatInterface from './ChatInterface';
import './App.css';
import StartPage from './StartPage';

const App = () => {
    const [page, setPage] = useState('start');
    const [currentSkill, setCurrentSkill] = useState({ name: 'active listening', scenarios: [] });
    const [scenarios, setScenarios] = useState([]);

    const handleNavigate = (page) => {
        setPage(page);
    }

    const handleSelectSkill = (skill) => {
        setCurrentSkill(skill);
        setScenarios(skill.scenarios);
    }

    const handleStartNewSession = () => {
        setPage('chat1');
    }

    // Define pages where sidebar should be hidden
    const pagesWithHiddenSidebar = ['start'];

    return (
        <div className="app">
            {!pagesWithHiddenSidebar.includes(page) && <Sidebar items={scenarios} onNavigate={handleNavigate} />}
            <div className="content">
                {page === 'start' && <StartPage onNavigate={handleNavigate} onSelectSkill={handleSelectSkill} />}
                {page === 'home' && <HomePage scenarios={scenarios} onStartNewSession={handleStartNewSession} currentSkill={currentSkill.name} onNavigate={handleNavigate} />}                
                {scenarios.length > 0 && scenarios.map((scenario, index) => (
                    page === `chat${index + 1}` && <ChatInterface onNavigate={handleNavigate} key={index} currentSkill={currentSkill.name} />
                ))}
            </div>
        </div>
    );
}

export default App;
