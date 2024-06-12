import React, { useState } from 'react';
import DeliveryOrderRow from '../components/DeliveryOrderRow';

const deliveryOrdersData = [
  {
    id: 1,
    items: [
      { name: 'Burger', quantity: 3 },
      { name: 'Mojito', quantity: 1 },
      { name: 'Fried Rice', quantity: 2 }
    ],
    totalCost: '$20',
    deliveryAddress: '123 Main St, City, Country',
    contactNo: '123-456-7890'
  },
  {
    id: 2,
    items: [
      { name: 'Pizza', quantity: 1 },
      { name: 'Pasta', quantity: 2 }
    ],
    totalCost: '$15',
    deliveryAddress: '456 Elm St, City, Country',
    contactNo: '987-654-3210'
  }
];

function DeliveryOrders() {
  const [orders, setOrders] = useState(deliveryOrdersData);

  const handleAccept = (id) => {
    console.log(`Order ${id} accepted`);
  };

  const handleDecline = (id) => {
    console.log(`Order ${id} declined`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Order ID</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Item Names</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Total Cost</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Delivery Address</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Contact No</th>
              <th className="py-3 px-4 text-left uppercase font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {orders.map(order => (
              <DeliveryOrderRow
                key={order.id}
                order={order}
                onAccept={handleAccept}
                onDecline={handleDecline}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeliveryOrders;
