import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart, type Product } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cart } = useCart();
  
  const isInCart = cart.some(item => item.id === product.id);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card flex flex-col overflow-hidden relative group"
    >
      {product.isPopular && (
        <div className="absolute top-4 right-4 bg-primary text-slate-900 text-xs font-bold px-3 py-1 rounded-full z-10 glow-effect">
          Popular
        </div>
      )}
      
      <div className="h-48 bg-card-border relative overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card-border to-background">
            <span className="text-slate-500 font-medium">{product.name}</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
        <p className="text-sm text-slate-600 mb-4 flex-1">{product.description}</p>
        
        <div className="space-y-2 mb-6">
          {product.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
              <Check size={14} className="text-primary flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-card-border">
          <span className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            disabled={isInCart}
            className={`p-3 rounded-xl transition-all flex items-center justify-center ${
              isInCart 
                ? 'bg-green-500/20 text-green-400 cursor-not-allowed'
                : 'bg-primary text-slate-900 hover:bg-primary/90 hover:glow-effect'
            }`}
          >
            {isInCart ? <Check size={20} /> : <ShoppingCart size={20} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
