import React, { useState } from 'react';
import './ChatInterface.css';

const ChatInterface = ({ currentSkill, currentScenario }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { from: 'user', text: input };
            setMessages([...messages, userMessage]);
            setInput('');

            try {
                const response = await fetch('/api/chatbot-response');
                const data = await response.json();
                const botMessage = { from: 'robot', text: data.botResponse || "placeholder" };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            } catch (error) {
                console.error('Error fetching chatbot response:', error);
                const botMessage = { from: 'robot', text: "Failed to fetch response" };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="chat-interface">
            <h1>Learning Goal</h1>
            <p>
                Improve your <strong>{currentSkill} skills</strong> with Roberto by using some of the different strategies suggested below.
                When you feel like you've achieved the learning goal, click on the finish button in the lower left or revisit an old chat by using
                the menu on the left-hand side.
            </p>
            <div className="chat-box">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.from}`}>
                        {message.from === 'robot' && (
                            <div className="robot-name">
                                Roberto the Robot 🤖
                            </div>
                        )}
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="input-box">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type message here..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default ChatInterface;
