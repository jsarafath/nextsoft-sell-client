import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do I receive my software keys?',
    answer: 'Once your payment is successfully processed, your license keys and download instructions are immediately sent to the email address you provided during checkout. You can also view them on the Order Tracking page.'
  },
  {
    question: 'Are the licenses genuine and safe?',
    answer: 'Absolutely. We only source our digital products from official distributors and verified partners. All software keys are 100% genuine and come with a validity guarantee.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards, PayPal, and select cryptocurrency payments for your convenience. All transactions are secured with industry-standard encryption.'
  },
  {
    question: 'Can I get a refund if the key does not work?',
    answer: 'Yes, we have a comprehensive refund policy. If a key is proven to be defective or invalid upon purchase, we will provide a full replacement or refund within 7 days of purchase.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
        >
          Frequently Asked <span className="text-gradient">Questions</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600"
        >
          Got questions? We've got answers. If you need further help, our support team is available 24/7.
        </motion.p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden bg-white/50"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-semibold text-slate-900">{faq.question}</span>
              <ChevronDown 
                className={`text-blue-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 text-slate-600 border-t border-blue-100/50 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
