import React from 'react';

const ChatWindow = () => {
    const chatWindowStyle = {
        backgroundColor: 'lightblue', // Change this to your desired color
        padding: '10px', // Add other styling properties as needed
        border: '1px solid #ccc',
        borderRadius: '8px',
        height: '300px',
        width:'400px', // Adjust the height as needed
        overflowY: 'relative', // Enable vertical scrolling if content exceeds the height
    };

    return (
        <div style={chatWindowStyle}>
        {/* Other chat components go here */}
        </div>
    );
};

export default ChatWindow;
