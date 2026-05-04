import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50 to-slate-50 text-slate-900 border-b border-slate-200">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(147,197,253,0.3)_0%,rgba(255,255,255,0)_70%)] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-200 shadow-sm mb-8"
        >
          <Crown size={16} className="text-blue-600" />
          <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Premium Digital Store</span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] text-slate-900 max-w-5xl"
        >
          Next-Gen Software for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600">
            Digital Creators
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl leading-relaxed font-light"
        >
          Instant access to premium software subscriptions, developer tools, and creative assets. Elevate your workflow today.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <Link
            to="/products"
            className="w-full sm:w-auto px-10 py-4 md:py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 group text-lg"
          >
            Explore Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#features"
            className="w-full sm:w-auto px-10 py-4 md:py-5 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-bold hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 text-lg"
          >
            <Sparkles size={20} />
            How it works
          </a>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-medium text-slate-500 mb-16"
        >
          <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Instant Delivery</div>
          <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Secure Payments</div>
          <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> 24/7 Support</div>
        </motion.div>

        {/* Floating Dashboard / Image Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring', damping: 20 }}
          className="w-full max-w-5xl relative mx-auto"
        >
          {/* Bottom fade out gradient so it blends into the next section */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent z-20 h-40 pointer-events-none" />
          
          <div className="p-2 md:p-4 bg-white/50 border border-slate-200 rounded-[2rem] shadow-2xl relative z-10">
            <img 
              src="/images/compressed/hero_illustration_1777894862105.webp" 
              alt="Digital Dashboard Presentation" 
              className="w-full h-auto max-h-[600px] object-cover object-top rounded-[1.5rem] border border-slate-100 bg-white"
            />
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Hero;
