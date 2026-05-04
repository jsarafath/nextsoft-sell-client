import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Hexagon, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50 shadow-sm border-b border-slate-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="text-primary glow-effect rounded-full"
          >
            <Hexagon size={28} />
          </motion.div>
          <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-primary transition-colors">
            Nexus<span className="text-slate-600 font-light">Soft</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-slate-900 transition-colors">Products</Link>
          <Link to="/tracking" className="hover:text-slate-900 transition-colors">Track Order</Link>
        </div>

        <div className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="text-slate-900 hidden sm:inline-block">Hi, {user.name}</span>
              {user.role === 'admin' && (
                <Link to="/admin" className="text-primary hover:underline flex items-center gap-1">
                  <LayoutDashboard size={16} /> Admin
                </Link>
              )}
              <button onClick={logout} className="text-slate-500 hover:text-red-500 transition-colors" title="Logout">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
              <Link to="/login" className="text-slate-600 hover:text-primary transition-colors">Log in</Link>
              <Link to="/register" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm">Sign up</Link>
            </div>
          )}

          <div className="w-px h-6 bg-blue-200 hidden sm:block"></div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-slate-600 hover:text-primary transition-colors group"
          >
            <ShoppingCart size={24} className="group-hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center glow-effect"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
