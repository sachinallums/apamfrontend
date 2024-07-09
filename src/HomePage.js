import React from 'react';


const HomePage = ({ onStartNewSession, currentSkill, onNavigate, scenarios }) => {
    const handleBackToSelectSkills = () => {
        onNavigate('start');
    };

    return (
        <div className="home-page">
            <h1>Home Page Directions</h1>
            <p>
                You will be interacting with a chat bot for <strong>{scenarios.length}</strong> different simulations to practice your <strong>{currentSkill} skills</strong>.
                In each simulation, you will be trying to meet a certain learning goal defined on the top of the screen. If you'd like to pick another skill to practice,
                just click on the back button in the upper right hand corner.
            </p>
            <p>
                When you feel you have met the learning goal or are finished with the simulation, click on the finish button in the lower left-hand corner.
                This will take you to a form that will ask you to answer some questions about the specific simulation that you just completed.
                You will be able to look over your chat with the agent as a reference for filling out the form.
            </p>
            <p>
                When you are ready to begin, click the 'Start New Session' button below. This will wipe all of your previous chat history if you have
                chatted with an agent before, so only click this button if you are ready to begin the simulations again from the beginning.
            </p>
            <button onClick={handleBackToSelectSkills} className="back-button">Back</button>
            <button onClick={onStartNewSession}>Start New Session</button>

        </div>
    );
}

export default HomePage;
