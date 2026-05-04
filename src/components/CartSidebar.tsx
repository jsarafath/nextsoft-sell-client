import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartSidebar: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-card-border z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-card-border flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-500">
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="glass-card p-4 flex items-center gap-4">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover bg-card" />
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-card-border flex items-center justify-center">
                        <span className="text-xs text-slate-500">No Img</span>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-slate-900 font-medium text-sm">{item.name}</h3>
                      <p className="text-primary font-bold mt-1">${item.price.toFixed(2)}</p>
                      <p className="text-xs text-slate-600 mt-1">Qty: {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-500 hover:text-red-400 transition-colors p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-card-border bg-card/30">
              <div className="flex items-center justify-between mb-6">
                <span className="text-slate-600">Total</span>
                <span className="text-2xl font-bold text-slate-900">${totalPrice.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center transition-all ${
                  cart.length > 0
                    ? 'bg-primary text-slate-900 hover:bg-primary/90 glow-effect'
                    : 'bg-card-border text-slate-500 cursor-not-allowed'
                }`}
                style={{ pointerEvents: cart.length > 0 ? 'auto' : 'none' }}
              >
                Proceed to Checkout
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
