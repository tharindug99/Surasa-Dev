import React, { useState } from 'react';
import ContactMessageRow from '../components/ContactMessageRow';


const contactMessagesData = [
  {
    id: 1,
    email: 'user1@example.com',
    content: 'This is a message from user 1.',
    isRead: false
  },
  {
    id: 2,
    email: 'user2@example.com',
    content: 'This is a message from user 2.',
    isRead: true
  }
];

function ContactMsgs() {
  const [messages, setMessages] = useState(contactMessagesData);

  const handleReadToggle = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, isRead: !msg.isRead } : msg
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Email</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Message</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {messages.map(message => (
              <ContactMessageRow
                key={message.id}
                message={message}
                onReadToggle={handleReadToggle}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactMsgs;