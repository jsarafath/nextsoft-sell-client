import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, HeadphonesIcon, Clock } from 'lucide-react';

const badges = [
  {
    icon: <Zap className="text-primary" size={24} />,
    title: 'Instant Delivery',
    description: 'Get your software keys immediately after purchase.',
  },
  {
    icon: <ShieldCheck className="text-primary" size={24} />,
    title: 'Secure & Verified',
    description: '100% genuine and safe digital products.',
  },
  {
    icon: <HeadphonesIcon className="text-primary" size={24} />,
    title: '24/7 Support',
    description: 'Our expert team is here to help you anytime.',
  },
  {
    icon: <Clock className="text-primary" size={24} />,
    title: 'Lifetime Access',
    description: 'Many products come with lifetime updates.',
  },
];

const TrustBadges: React.FC = () => {
  return (
    <section className="py-12 border-y border-card-border bg-card/20" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 glass-card hover:bg-card-border transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>
              <h3 className="text-slate-900 font-semibold mb-2">{badge.title}</h3>
              <p className="text-sm text-slate-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
