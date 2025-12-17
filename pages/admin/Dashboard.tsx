import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, ShoppingBag, DollarSign, Package } from 'lucide-react';
import { storageService } from '../../services/storage';

const Dashboard: React.FC = () => {
  const orders = storageService.getOrders();
  const products = storageService.getProducts();
  const users = storageService.getUsers();

  const totalRevenue = orders.reduce((sum, o) => sum + (o.status !== 'cancelled' ? o.totalAmount : 0), 0);
  
  // Mock data for chart
  const data = [
    { name: 'Jan', sales: 400 },
    { name: 'Feb', sales: 300 },
    { name: 'Mar', sales: 600 },
    { name: 'Apr', sales: 800 },
    { name: 'May', sales: 500 },
  ];

  const StatCard = ({ title, value, icon, color }: any) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
      <div className={`p-4 rounded-full ${color} text-white`}>{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-800">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value={`$${totalRevenue.toFixed(0)}`} icon={<DollarSign size={24} />} color="bg-green-500" />
        <StatCard title="Total Orders" value={orders.length} icon={<ShoppingBag size={24} />} color="bg-blue-500" />
        <StatCard title="Total Products" value={products.length} icon={<Package size={24} />} color="bg-purple-500" />
        <StatCard title="Total Users" value={users.length} icon={<Users size={24} />} color="bg-orange-500" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96">
        <h3 className="text-lg font-bold mb-4">Sales Analytics</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;