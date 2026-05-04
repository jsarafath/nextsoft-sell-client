import React from 'react';
import { motion } from 'framer-motion';
import { Search, CreditCard, Download } from 'lucide-react';

const steps = [
  {
    icon: <Search size={32} className="text-primary" />,
    title: '1. Browse Catalog',
    description: 'Explore our wide range of premium digital software and find exactly what you need.'
  },
  {
    icon: <CreditCard size={32} className="text-primary" />,
    title: '2. Secure Checkout',
    description: 'Pay safely using our encrypted payment gateway. Multiple payment methods supported.'
  },
  {
    icon: <Download size={32} className="text-primary" />,
    title: '3. Instant Access',
    description: 'Receive your license keys and download links immediately in your email.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            How It <span className="text-gradient">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Getting your premium software is fast, secure, and incredibly simple.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-blue-200 -z-10 -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-6 shadow-lg shadow-blue-500/10 border-2 border-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
