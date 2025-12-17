import React, { useState, useEffect } from 'react';
import { Eye, CheckCircle, XCircle, Truck } from 'lucide-react';
import { Order, OrderStatus } from '../../types';
import { storageService } from '../../services/storage';

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(storageService.getOrders());
  }, []);

  const updateStatus = (id: string, status: OrderStatus) => {
    const updated = orders.map(o => o.id === id ? { ...o, status } : o);
    setOrders(updated);
    storageService.setOrders(updated);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 text-gray-500">Order ID</th>
              <th className="p-4 text-gray-500">Date</th>
              <th className="p-4 text-gray-500">Customer Address</th>
              <th className="p-4 text-gray-500">Total</th>
              <th className="p-4 text-gray-500">Status</th>
              <th className="p-4 text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-bold">{order.id}</td>
                <td className="p-4 text-sm">{new Date(order.createdAt).toLocaleDateString()}</td>
                <td className="p-4 text-sm max-w-xs truncate">{order.shippingAddress}</td>
                <td className="p-4 font-medium">${order.totalAmount}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                    order.status === 'delivered' ? 'bg-green-100 text-green-700' : 
                    order.status === 'cancelled' ? 'bg-red-100 text-red-700' : 
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 flex space-x-2">
                  {order.status !== 'cancelled' && order.status !== 'delivered' && (
                    <>
                        <button title="Ship" onClick={() => updateStatus(order.id, 'shipped')} className="p-1 text-blue-500 bg-blue-50 rounded hover:bg-blue-100"><Truck size={18} /></button>
                        <button title="Deliver" onClick={() => updateStatus(order.id, 'delivered')} className="p-1 text-green-500 bg-green-50 rounded hover:bg-green-100"><CheckCircle size={18} /></button>
                        <button title="Cancel" onClick={() => updateStatus(order.id, 'cancelled')} className="p-1 text-red-500 bg-red-50 rounded hover:bg-red-100"><XCircle size={18} /></button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {orders.length === 0 && <div className="p-8 text-center text-gray-500">No orders found</div>}
      </div>
    </div>
  );
};

export default Orders;