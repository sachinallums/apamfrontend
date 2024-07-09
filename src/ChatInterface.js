import React, { useState, useEffect, useRef } from 'react';
import './ChatInterface.css';

const ChatInterface = ({ currentSkill, currentScenario, onNavigate }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [feedbackVisible, setFeedbackVisible] = useState(true); // State to handle feedback visibility
    const chatBoxRef = useRef(null);

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { from: 'user', text: input };
            setMessages([...messages, userMessage]);
            setInput('');

            try {
                const response = await fetch('/api/chatbot-response');
                const data = await response.json();
                const botMessage = { from: 'robot', text: data.botResponse || "placeholder" };

                // Introduce a delay before adding the bot's message
                setTimeout(() => {
                    setMessages((prevMessages) => [...prevMessages, botMessage]);
                }, 600);
            } catch (error) {
                console.error('Error fetching chatbot response:', error);
                const botMessage = { from: 'robot', text: "Failed to fetch response" };

                // Introduce a delay before adding the bot's message
                setTimeout(() => {
                    setMessages((prevMessages) => [...prevMessages, botMessage]);
                }, 600);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const handleBackToSelectSkills = () => {
        onNavigate('start');
    };

    const handleFinish = () => {
        const userConfirmed = window.confirm('Would you like to complete the simulation? You will be asked to fill out a google form about your experience.');
        if (userConfirmed) {
            window.open('https://forms.gle/dUgqouTzYBdy6jF67', '_blank');
        }
    };

    const toggleFeedbackVisibility = () => { // Function to toggle feedback visibility
        setFeedbackVisible(!feedbackVisible);
    };

    return (
        <div className="chat-interface">
            <button onClick={handleBackToSelectSkills} className="back-button">Back</button>
            <h1>Learning Goal</h1>
            <p>
                Improve your <strong>{currentSkill} skills</strong> with Roberto by using some of the different strategies suggested below.
                When you feel like you've achieved the learning goal, click on the finish button in the lower left or revisit an old chat by using
                the menu on the left-hand side.
            </p>
            <div className="chat-box" ref={chatBoxRef}>
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
            {feedbackVisible ? (
                <div className="feedback-container">
                    <button className="feedback-header" onClick={toggleFeedbackVisibility}>
                        Hide Suggestions
                    </button>
                    <div className="feedback-content">
                        Try using a strategy you haven’t used before like <strong>affirming</strong> or <strong>empathizing</strong>! Click on a strategy to learn more.
                    </div>
                </div>
            ) : (
                <div className="show-feedback-container">
                    <button onClick={toggleFeedbackVisibility} className="show-feedback-button">Show Suggestions</button>
                </div>
            )}
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
            <button onClick={handleFinish}>Finish!</button>
        </div>
    );
};

export default ChatInterface;
