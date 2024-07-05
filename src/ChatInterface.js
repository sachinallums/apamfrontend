// src/ChatInterface.js
import React, { useState } from 'react';
import './ChatInterface.css';

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { from: 'robot', text: 'Not good at all! Things are just bad' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { from: 'user', text: input };
            setMessages([...messages, userMessage]);
            setInput('');

            // Get response from OpenAI here
            const response = "I am not functioning right now because Sachin hasn't set up API calls yet, but that's a nice text.";
            const botMessage = { from: 'robot', text: response };

            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }
    };

    return (
        <div className="chat-interface">
            <h1>Learning Goal</h1>
            <p>
                Improve your <strong>active listening skills</strong> with Roberto by using some of the different strategies suggested below.
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
                    placeholder="Type message here..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default ChatInterface;
