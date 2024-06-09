import React from 'react';

function ContactMessageRow({ message, onReadToggle }) {
  return (
    <tr className="border-b">
      <td className="py-3 px-4 text-left">{message.email}</td>
      <td className="py-3 px-4 text-left">{message.content}</td>
      <td className="py-3 px-4 text-left">
        <button
          className={`${
            message.isRead ? 'bg-[#F0C903] hover:bg-[#d6b302]' : 'bg-red-500 hover:bg-red-700'
          } text-white font-bold py-1 px-2 rounded`}
          onClick={() => onReadToggle(message.id)}
        >
          {message.isRead ? 'Read' : 'Not Read'}
        </button>
      </td>
    </tr>
  );
}

export default ContactMessageRow;