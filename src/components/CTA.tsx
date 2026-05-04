import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow for CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[radial-gradient(circle,rgba(96,165,250,0.2)_0%,rgba(96,165,250,0)_70%)] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 text-center bg-white/70 border-blue-200 shadow-xl shadow-blue-500/10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to upgrade your workflow?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who trust NexusSoft for their daily digital tools and software subscriptions. 
            Get instant access and 24/7 priority support.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all glow-effect group"
            >
              Browse All Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <form className="w-full sm:w-auto relative flex items-center">
              <Mail className="absolute left-4 text-slate-400" size={20} />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-64 px-12 py-4 rounded-xl border border-blue-200 bg-white focus:outline-none focus:border-primary transition-colors text-slate-900"
              />
              <button 
                type="button"
                className="absolute right-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
