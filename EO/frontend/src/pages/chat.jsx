import React, { useState } from "react";
import axios from "axios";
import './chat.css'

export default function Chat(){
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const newChat = [...chat, { sender: "user", text: message }];
        setChat(newChat);
        setMessage("");

        try {
            const response = await axios.post("http://localhost:5000/chat", { message });
            setChat([...newChat, { sender: "bot", text: response.data.reply }]);
        } catch (error) {
            console.error("Error:", error);
            setChat([...newChat, { sender: "bot", text: "Failed to get response from server." }]);
        }
    };

    return (
        <div className="container">
            <div className="chat-box">
                {chat.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}