import React, { useState } from "react";
import logo from '../assets/images/logo.png';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";



const ChatBot = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello! How may I assist you with our Medicare or Services?",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true);

    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: `Provide Gneral Answer
     `,
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch("http://localhost:5000/api/chat/openAI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from backend");
      }

      const data = await response.json();
      const chatGPTResponse = data.choices[0].message.content;

      setMessages([
        ...chatMessages,
        { message: chatGPTResponse, sender: "ChatGPT", direction: "incoming" },
      ]);
      setTyping(false);
    } catch (error) {
      console.error("Error fetching response from OpenAI API:", error);
      setTyping(false);
    }
  }

  return (
    <section>
     
      <div className="px-4 mx-auto max-w-screen-md">
        <div className="landing-page">
          {/* Left Side (Landing Page) */}
          <h2 className="heading text-center">
            Welcome to <span className="color-headingColor">Medicare</span>{" "}
            ChatBot!
          </h2>
          <p className='mb-6 lg:mb-10 font-light text-center text_para'>
            Our ChatBot is here to assist you with any questions related to our
            medicare services.
          </p>
          <img src={logo} className="mb-5" alt="Landing Img" />
        </div>
        <div className="chatbot-interface form_input mt-1">
          {/* Right Side (ChatBot Interface) */}
          <MainContainer >
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  typing ? (
                    <TypingIndicator content="ChatGPT is typing" />
                  ) : null
                }
              >
                {messages.map((message, i) => (
                  <Message
                    key={i}
                    model={message}
                    className={
                      message.sender === "ChatGPT"
                        ? "chatgpt-message"
                        : "user-message"
                    }
                  />
                ))}
              </MessageList>
              <MessageInput
                placeholder="Type your message here"
                onSend={handleSend}
                className="message-input form_input mt-1"
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
      {/* <ChatBox/> */}
   
    </section>
  );
};

export default ChatBot;