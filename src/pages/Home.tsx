import React from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import ProductCard from '../components/ProductCard';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const { products } = useData();
  const featuredProducts = products.filter(p => p.isPopular).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBadges />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Subscriptions</h2>
              <p className="text-slate-600">Discover our most popular digital software tools.</p>
            </div>
            <Link 
              to="/products"
              className="text-primary hover:text-primary/80 flex items-center gap-2 font-medium transition-colors"
            >
              View all products
              <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;
