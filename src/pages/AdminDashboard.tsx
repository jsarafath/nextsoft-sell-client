import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { PlusCircle, Package, MessageSquareQuote } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const { addProduct, addTestimonial } = useData();
  const [activeTab, setActiveTab] = useState<'product' | 'review'>('product');

  // Product Form State
  const [pName, setPName] = useState('');
  const [pDesc, setPDesc] = useState('');
  const [pPrice, setPPrice] = useState('');
  const [pFeatures, setPFeatures] = useState('');
  const [pImage, setPImage] = useState('');

  // Review Form State
  const [rName, setRName] = useState('');
  const [rRole, setRRole] = useState('');
  const [rContent, setRContent] = useState('');
  const [rRating, setRRating] = useState('5');

  const [success, setSuccess] = useState('');

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addProduct({
      name: pName,
      description: pDesc,
      price: parseFloat(pPrice),
      features: pFeatures.split(',').map(f => f.trim()),
      image: pImage || undefined,
      isPopular: false
    });
    setSuccess('Product added successfully!');
    setPName(''); setPDesc(''); setPPrice(''); setPFeatures(''); setPImage('');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addTestimonial({
      name: rName,
      role: rRole,
      content: rContent,
      rating: parseInt(rRating)
    });
    setSuccess('Review added successfully!');
    setRName(''); setRRole(''); setRContent(''); setRRating('5');
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
          <p className="text-slate-600">Manage products and customer reviews (Saved to Database)</p>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('product')}
            className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${activeTab === 'product' ? 'bg-primary text-white shadow-lg shadow-blue-500/20' : 'bg-white text-slate-600 border border-blue-100 hover:bg-blue-50'}`}
          >
            <Package size={18} />
            Add Product
          </button>
          <button
            onClick={() => setActiveTab('review')}
            className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${activeTab === 'review' ? 'bg-primary text-white shadow-lg shadow-blue-500/20' : 'bg-white text-slate-600 border border-blue-100 hover:bg-blue-50'}`}
          >
            <MessageSquareQuote size={18} />
            Add Review
          </button>
        </div>

        {success && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="p-4 mb-8 bg-green-50 text-green-700 border border-green-200 rounded-xl flex items-center gap-2"
          >
            <PlusCircle size={20} />
            {success}
          </motion.div>
        )}

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          className="glass-card p-8 bg-white/70 border-blue-200"
        >
          {activeTab === 'product' ? (
            <form onSubmit={handleProductSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Product Name</label>
                  <input required value={pName} onChange={e => setPName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:border-primary transition-colors text-slate-900" placeholder="Software Title" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Price ($)</label>
                  <input required type="number" step="0.01" value={pPrice} onChange={e => setPPrice(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:border-primary transition-colors text-slate-900" placeholder="29.99" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Description</label>
                <textarea required rows={3} value={pDesc} onChange={e => setPDesc(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:border-primary transition-colors text-slate-900 resize-none" placeholder="Short description..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Features (Comma separated)</label>
                <input required value={pFeatures} onChange={e => setPFeatures(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:border-primary transition-colors text-slate-900" placeholder="Feature 1, Feature 2, Feature 3" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Image URL (Optional)</label>
                <input value={pImage} onChange={e => setPImage(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:border-primary transition-colors text-slate-900" placeholder="https://..." />
              </div>
              <button type="submit" className="px-8 py-3.5 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all">
                <PlusCircle size={20} /> Add Product
              </button>
            </form>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Customer Name</label>
                  <input required value={rName} onChange={e => setRName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:border-primary transition-colors text-slate-900" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Role/Company</label>
                  <input required value={rRole} onChange={e => setRRole(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:border-primary transition-colors text-slate-900" placeholder="CTO at TechCorp" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Rating</label>
                <select required value={rRating} onChange={e => setRRating(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:border-primary transition-colors text-slate-900">
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Review Content</label>
                <textarea required rows={4} value={rContent} onChange={e => setRContent(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-none focus:border-primary transition-colors text-slate-900 resize-none" placeholder="Great service..." />
              </div>
              <button type="submit" className="px-8 py-3.5 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all">
                <PlusCircle size={20} /> Add Review
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
