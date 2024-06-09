import React from 'react';

function DeliveryOrderRow({ order, onAccept, onDecline }) {
  return (
    <tr className="border-b">
      <td className="py-3 px-4 text-left">{order.itemName}</td>
      <td className="py-3 px-4 text-left">{order.quantity}</td>
      <td className="py-3 px-4 text-left">{order.totalCost}</td>
      <td className="py-3 px-4 text-left">{order.deliveryAddress}</td>
      <td className="py-3 px-4 text-left">{order.contactNo}</td>
      <td className="py-3 px-4 text-left">
        <button
          className="bg-[#F0C903] hover:bg-[#d6b302] text-white font-bold py-1 px-2 rounded mr-2"
          onClick={() => onAccept(order.id)}
        >
          Accept
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => onDecline(order.id)}
        >
          Decline
        </button>
      </td>
    </tr>
  );
}

export default DeliveryOrderRow;