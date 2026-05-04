import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, CheckCircle2, Clock } from 'lucide-react';

const OrderTracking: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<null | 'found' | 'not-found'>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;
    
    setIsSearching(true);
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      // Dummy logic: if it starts with NEXUS, it's found
      if (orderId.toUpperCase().startsWith('NEXUS')) {
        setResult('found');
      } else {
        setResult('not-found');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Track Your Order
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600"
          >
            Enter your order ID below to check the status of your digital delivery.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 md:p-8 mb-8"
        >
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="e.g. NEXUS-123456"
                className="w-full bg-background border border-card-border rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-primary transition-colors font-mono uppercase"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching || !orderId.trim()}
              className="px-8 py-4 bg-primary text-slate-900 rounded-xl font-medium hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center justify-center min-w-[120px]"
            >
              {isSearching ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Track'
              )}
            </button>
          </form>
        </motion.div>

        {result === 'not-found' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl text-center text-red-400"
          >
            Order not found. Please check the ID and try again.
          </motion.div>
        )}

        {result === 'found' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card overflow-hidden"
          >
            <div className="p-6 border-b border-card-border bg-card/30 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Order ID</p>
                <p className="font-mono text-slate-900 font-bold">{orderId.toUpperCase()}</p>
              </div>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                <CheckCircle2 size={16} />
                Completed
              </div>
            </div>
            
            <div className="p-6 md:p-8 space-y-8">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-card-border" />
                
                <div className="relative z-10 flex items-start gap-6 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 border-4 border-background">
                    <Package size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium">Order Placed</h4>
                    <p className="text-sm text-slate-600 mt-1">We received your order and payment.</p>
                    <p className="text-xs text-slate-500 mt-2">Today, 10:00 AM</p>
                  </div>
                </div>

                <div className="relative z-10 flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 border-4 border-background">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-medium">Delivered</h4>
                    <p className="text-sm text-slate-600 mt-1">Software keys and instructions have been sent to your email.</p>
                    <p className="text-xs text-slate-500 mt-2">Today, 10:01 AM</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card-border/50 p-4 rounded-xl flex items-start gap-4">
                <Clock className="text-slate-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-slate-700">
                  Didn't receive your email? Check your spam folder or <a href="#" className="text-primary hover:underline">contact support</a>.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
