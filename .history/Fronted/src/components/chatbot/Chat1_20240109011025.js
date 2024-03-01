import React from 'react';
// import Config from './Config.js';
// import ReactDOM from 'react-dom/client';
// import  Chatbot  from 'react-chatbot-kit';
// import MessageParser from './MessageParser.jsx';
// import ActionProvider from './ActionProvider.jsx';
// import Login from "./Login.jsx"
import 'react-chatbot-kit/build/main.css';
import Apps from './Apps.jsx';
import TextToSpeech from "./TextToSpeech.jsx"
// import {useState} from 'react'
// import './App.css';
// import Apps from "./APICHATBOT/Apps.jsx";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";


const MyChatbot = () => {
    return (

        <>

        {/* const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render
            ( */}
            <React.StrictMode>
                <div class="container">
                    <div>
                    <h1 color="blue-violet" > LEGAL ASSISTANT</h1>
                    </div>
                {/* <h1 color="blue-violet" > LEGAL CHATBOT</h1> */}
                
                <div>

                

                <p class="CHATBOT">

                Hi there! Welcome to our <b>LEGAL</b> ASSISTANT. We're here to provide you with essential information about your <b>LAWS</b> and <b>RIGHTS</b> as a citizen.

                👋  We're here to help you understand and navigate your rights as a citizen. Whether you're curious about freedom of speech, privacy laws, or voting rights, or anything regarding Legal Rights,laws,News,etc.. we've got you covered.

                🤖 Feel free to ask questions, and our LEGAL ASSISTANT will provide you with valuable information. To get started, you can simply type keywords like "freedom of speech," "privacy," or "voting rights."or any thing regarding Legal Rights,laws,regulations,etc..

                🌐 Our goal is to empower you with knowledge, so you can make informed decisions and better advocate for your rights. If you ever need assistance or have a specific question, just type it in, and we'll do our best to assist you.

                📚 To explore specific topics, you can use keywords or ask questions like:<br/>
                <b>"Tell me about freedom of speech."</b> <br/>
                <b>"What are my privacy rights?"</b> <br/>
                <b>"Explain voting rights."</b> <br/>
                <b>"Tell me about workers' rights."</b> 
                 
                 Type your question  and we'll provide you with relevant information. Remember, knowledge is power! 💪


                </p>

                </div>

            
               

                        <Apps />
                        <TextToSpeech/>
                        {/* <Login/> */}
                </div>

                {/* <TextToSpeech/> */}
                
                {/* <Apps /> */}
            </React.StrictMode>
            {/* ); */}



    {/* <div className='chatbotdiv' align="center">
    <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
    </div> */}

    </>
    );
};

export default MyChatbot;