import React from 'react';
import { Hexagon, ShieldCheck, Lock, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/95 text-white mt-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Hexagon size={24} className="text-primary" />
              <span className="font-bold text-lg text-white">
                Nexus<span className="text-slate-400 font-light">Soft</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              Premium digital software subscriptions and accounts. Instant delivery, 24/7 support, and guaranteed satisfaction.
            </p>
            <div className="flex gap-4 text-slate-500">
              <ShieldCheck size={20} />
              <Lock size={20} />
              <CreditCard size={20} />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} NexusSoft. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
