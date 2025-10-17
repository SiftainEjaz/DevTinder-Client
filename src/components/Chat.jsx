import React, { useState } from 'react'
import { useParams } from 'react-router'

function Chat() {

  const { toUserId } = useParams();
  const [messages, setMessages] = useState([{ text: "Hello World" }]);
  console.log(toUserId);

  return (
    <div className="w-full max-w-2xl mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col rounded-lg overflow-hidden">
      <h1 className="p-4 border-b border-gray-600 font-semibold">
        Chat
      </h1>

      <div className="flex-1 p-4 overflow-y-auto">
        {/* Messages will go here */}
        {messages.map((message, index) => {
          return <div key={index}>
            <div className="chat chat-start">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
            
          </div>
        })}
      </div>

      <div className="border-t border-gray-600 p-3">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border border-gray-400 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <button className="px-4 py-2 bg-green-800 text-white rounded-2xl hover:bg-green-900 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );






}

export default Chat
