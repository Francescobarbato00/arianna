import { useState, useEffect } from 'react';
import Image from 'next/image';

// Funzione per ottenere l'orario corrente in formato HH:MM
const getCurrentTime = () => {
  const date = new Date();
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]); // Rimosso il messaggio preimpostato
  const [newMessage, setNewMessage] = useState('');
  const [botTyping, setBotTyping] = useState(false); // Stato per simulare la scrittura del bot

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [...messages, { text: newMessage, sender: 'user', time: getCurrentTime() }];
      setMessages(updatedMessages);
      setNewMessage('');

      // Simula una risposta automatica con l'effetto "typing"
      setBotTyping(true);
      setTimeout(() => {
        simulateTypingEffect('Grazie per il tuo messaggio! Ti risponderemo a breve.');
      }, 1000);
    }
  };

  const simulateTypingEffect = (responseText) => {
    let index = 0;
    let displayedText = '';
    const typingInterval = setInterval(() => {
      if (index < responseText.length) {
        displayedText += responseText[index];
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          if (lastMessage && lastMessage.sender === 'bot' && lastMessage.typing) {
            // Se esiste già un messaggio "bot" in stato di scrittura, aggiorniamo solo il testo
            return [
              ...prevMessages.slice(0, -1),
              { ...lastMessage, text: displayedText },
            ];
          }
          // Aggiungiamo un nuovo messaggio "bot" con stato di scrittura
          return [...prevMessages, { text: displayedText, sender: 'bot', time: getCurrentTime(), typing: true }];
        });
        index++;
      } else {
        clearInterval(typingInterval);
        setBotTyping(false); // Fine della simulazione di scrittura
        setMessages((prevMessages) => {
          // Rimuoviamo il flag "typing" dal messaggio finale
          const updatedMessages = prevMessages.map((msg, i) =>
            i === prevMessages.length - 1 ? { ...msg, typing: false } : msg
          );
          return updatedMessages;
        });
      }
    }, 20); // Velocità di digitazione (più basso è il valore, più veloce sarà la scrittura)
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Pulsante flottante per aprire/chiudere la chat */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={toggleChat}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
        >
          <Image src="/chat.png" alt="Chat Icon" width={40} height={40} />
        </button>
      </div>

      {/* Finestra della chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-2xl rounded-xl p-4 z-50 transform transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h2 className="text-lg font-bold text-gray-800">Assistente Virtuale</h2>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
              &times;
            </button>
          </div>
          <div className="h-64 sm:h-72 md:h-80 overflow-y-auto custom-scrollbar bg-gray-50 rounded-lg p-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-3 rounded-lg text-sm max-w-xs ${
                  msg.sender === 'bot' ? 'bg-gray-200 text-left self-start' : 'bg-blue-500 text-white text-right self-end'
                } ${msg.sender === 'bot' ? 'ml-0' : 'ml-auto'}`}
                style={{
                  alignSelf: msg.sender === 'bot' ? 'flex-start' : 'flex-end',
                  borderRadius: msg.sender === 'bot' ? '15px 15px 15px 5px' : '15px 15px 5px 15px',
                }}
              >
                <p>{msg.text}</p>
                <span className="text-xs text-gray-500 mt-1 block">{msg.time}</span>
              </div>
            ))}
            {botTyping && (
              <div className="text-gray-500 text-sm mt-2 animate-pulse">Il bot sta scrivendo...</div>
            )}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow p-2 md:p-3 border rounded-l-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Scrivi un messaggio..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 md:p-3 rounded-r-lg focus:outline-none"
            >
              Invia
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
