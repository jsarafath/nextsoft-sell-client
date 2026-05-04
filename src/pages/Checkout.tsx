import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ShieldCheck, CreditCard, Lock } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderPlaced(true);
      clearCart();
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-8 md:p-12 text-center max-w-lg w-full"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Order Successful!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for your purchase. Your digital software keys have been sent to your email address.
          </p>
          <div className="p-4 bg-card-border rounded-xl text-left mb-8">
            <p className="text-sm text-slate-500 mb-1">Order Tracking ID:</p>
            <p className="text-primary font-mono font-bold tracking-wider">NEXUS-{Math.floor(Math.random() * 1000000)}</p>
          </div>
          <a
            href="/"
            className="block w-full py-4 bg-primary text-slate-900 rounded-xl font-medium hover:bg-primary/90 glow-effect transition-all"
          >
            Return to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-12"
        >
          Secure Checkout
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="glass-card p-6 md:p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">1</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-600">First Name</label>
                    <input required type="text" className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-600">Last Name</label>
                    <input required type="text" className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm text-slate-600">Email Address (for delivery)</label>
                    <input required type="email" className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 md:p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">2</span>
                  Payment Details
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-600">Card Information</label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                      <input required type="text" className="w-full bg-background border border-card-border rounded-lg pl-12 pr-4 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors font-mono" placeholder="0000 0000 0000 0000" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-slate-600">Expiry Date</label>
                      <input required type="text" className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors font-mono" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-slate-600">CVC</label>
                      <input required type="text" className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors font-mono" placeholder="123" />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing || cart.length === 0}
                className="w-full py-4 bg-primary text-slate-900 rounded-xl font-medium hover:bg-primary/90 glow-effect transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Lock size={18} />
                    Pay ${totalPrice.toFixed(2)} Securely
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="glass-card p-6 sticky top-32">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                {cart.length === 0 ? (
                  <p className="text-slate-500 text-sm">Your cart is empty.</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 bg-card-border rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-[10px] text-slate-500">No img</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-slate-900 line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-slate-600 mt-1">Qty: {item.quantity}</p>
                        <p className="text-primary font-medium mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-card-border pt-4 space-y-3">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-slate-900 pt-3 border-t border-card-border">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
