import React from 'react';

const StartPage = ({ onNavigate, onSelectSkill }) => {
    const skills = [
        { name: 'Active Listening', icon: '👂', scenarios: ['1', '2', '3'] },
        { name: 'Ambiguity Tolerance', icon: '❓', scenarios: ['1', '2'] },
        { name: 'Conflict Avoidance', icon: '↔️', scenarios: ['1', '2'] },
        { name: 'Conflict Resolution', icon: '🎯', scenarios: ['1', '2', '3'] },
        { name: 'Empathy', icon: '❤️', scenarios: ['1', '2', '3'] },
        { name: 'Cultural Competence', icon: '👥', scenarios: ['1', '2'] },
        { name: 'Advising and Instruction', icon: '👨‍🏫', scenarios: ['1', '2', '3'] },
        { name: 'Paraphrasing', icon: '🔄', scenarios: ['1', '2'] },
        { name: 'Negotiation', icon: '🤝', scenarios: ['1', '2', '3'] },
        { name: 'Debate', icon: '🗣️', scenarios: ['1'] },
        { name: 'Behavioral Counseling', icon: '🧠', scenarios: ['1', '2', '3', '4'] },
        { name: 'Assertive Communication', icon: '🗣️', scenarios: ['1', '2'] },
    ];

    const handleTileClick = (skill) => {
        onNavigate('home');
        onSelectSkill(skill);
    };

    return (
        <div className="root">
            <div className="title">Social Sprout!</div>
            <div className="subtitle">
                Select a social skill to learn more about it and train your abilities!
            </div>
            <div className="grid-container">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="tile"
                        onClick={() => handleTileClick(skill)}
                    >
                        <div className="icon">{skill.icon}</div>
                        <div>{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StartPage;
