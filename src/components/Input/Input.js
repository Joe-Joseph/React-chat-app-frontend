import React from 'react';

import './Input.css';

const Input = ({ message, onMessageChange, onEnterPress, sendmessage }) => (
    <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={onMessageChange}
            onKeyPress={onEnterPress}
        />

        <button className="sendButton" onClick={(event) => sendmessage(event)}>Send</button>

    </form>
)

export default Input;
