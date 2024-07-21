import React, { useEffect } from 'react';

const ChatBot = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
        script.async = true;

        script.onload = () => {
            console.log('Dialogflow script loaded successfully.');
        };

        script.onerror = (e) => {
            console.error('Error loading Dialogflow script:', e);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <df-messenger
            intent="WELCOME"
            chat-title="EduBot"
            agent-id="ce466791-efa0-4cbf-bbf3-aa7af3a8cb32"
            language-code="en"
        ></df-messenger>
    );
};

export default ChatBot;
