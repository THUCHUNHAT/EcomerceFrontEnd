import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { Product } from '../../types';
import { storageService } from '../../services/storage';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  // Form State
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '', price: 0, categoryId: '', brand: '', image: '', description: ''
  });

  const categories = storageService.getCategories();

  useEffect(() => {
    setProducts(storageService.getProducts());
  }, []);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure?')) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      storageService.setProducts(updated);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData(product);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setEditingProduct(null);
    setFormData({
      name: '', price: 0, categoryId: categories[0]?.id || '', brand: '', 
      image: 'https://picsum.photos/400/400', description: '', rating: 0, reviewCount: 0
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProduct) {
      // Update
      const updated = products.map(p => p.id === editingProduct.id ? { ...p, ...formData } as Product : p);
      setProducts(updated);
      storageService.setProducts(updated);
    } else {
      // Create
      const newProduct: Product = {
        ...formData,
        id: `p-${Date.now()}`,
        rating: 0,
        reviewCount: 0
      } as Product;
      const updated = [newProduct, ...products];
      setProducts(updated);
      storageService.setProducts(updated);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <button onClick={handleCreate} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus size={18} /> <span>Add Product</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 font-medium text-gray-500">Image</th>
              <th className="p-4 font-medium text-gray-500">Name</th>
              <th className="p-4 font-medium text-gray-500">Price</th>
              <th className="p-4 font-medium text-gray-500">Category</th>
              <th className="p-4 font-medium text-gray-500">Brand</th>
              <th className="p-4 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4"><img src={p.image} alt="" className="w-12 h-12 rounded object-cover" /></td>
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4">${p.price}</td>
                <td className="p-4">{categories.find(c => c.id === p.categoryId)?.name || p.categoryId}</td>
                <td className="p-4">{p.brand}</td>
                <td className="p-4 flex space-x-3">
                  <button onClick={() => handleEdit(p)} className="text-blue-500 hover:text-blue-700"><Edit2 size={18} /></button>
                  <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-full max-w-lg">
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-bold">{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
              <button onClick={() => setIsModalOpen(false)}><X /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                placeholder="Product Name" className="w-full border p-2 rounded" required
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="number" placeholder="Price" className="w-full border p-2 rounded" required
                  value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})}
                />
                 <input 
                  type="number" placeholder="Original Price (Promo)" className="w-full border p-2 rounded"
                  value={formData.originalPrice || ''} onChange={e => setFormData({...formData, originalPrice: Number(e.target.value)})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select 
                    className="w-full border p-2 rounded"
                    value={formData.categoryId} onChange={e => setFormData({...formData, categoryId: e.target.value})}
                >
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <input 
                  placeholder="Brand" className="w-full border p-2 rounded" required
                  value={formData.brand} onChange={e => setFormData({...formData, brand: e.target.value})}
                />
              </div>
              <input 
                placeholder="Image URL" className="w-full border p-2 rounded" required
                value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})}
              />
               <textarea 
                placeholder="Description" className="w-full border p-2 rounded" required rows={3}
                value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
              />
              <div className="flex items-center space-x-2">
                 <input 
                    type="checkbox" 
                    checked={formData.isPromo || false} 
                    onChange={e => setFormData({...formData, isPromo: e.target.checked})}
                 />
                 <label>On Promotion?</label>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;