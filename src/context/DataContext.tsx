import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Product } from './CartContext';
import { products as localProducts } from '../data/products';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const localTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Graphic Designer',
    content: 'The instant delivery is no joke. I needed the Design Suite Premium for an urgent client project, and I had the keys within seconds of payment. Highly recommended!',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Engineer',
    content: 'I\'ve bought several developer IDE licenses from NexusSoft. The process is always smooth, and their support team is incredibly responsive when I had a question.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Video Editor',
    content: 'Best prices I could find for authentic software subscriptions. The customer dashboard makes it very easy to keep track of my licenses. Will buy again!',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
  }
];

interface DataContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Omit<Testimonial, 'id' | 'avatar'>) => Promise<void>;
  loading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, testimonialsRes] = await Promise.all([
          fetch(`${API_URL}/products`).catch(() => null),
          fetch(`${API_URL}/testimonials`).catch(() => null)
        ]);

        if (productsRes && productsRes.ok) {
          const data = await productsRes.json();
          // If DB is empty, fallback to local data so UI isn't empty
          setProducts(data.length > 0 ? data : localProducts);
        } else {
          setProducts(localProducts); // Fallback if backend is down
        }

        if (testimonialsRes && testimonialsRes.ok) {
          const data = await testimonialsRes.json();
          setTestimonials(data.length > 0 ? data : localTestimonials);
        } else {
          setTestimonials(localTestimonials); // Fallback if backend is down
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setProducts(localProducts);
        setTestimonials(localTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addProduct = async (product: Omit<Product, 'id'>) => {
    try {
      const res = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
      
      if (res.ok) {
        const newProduct = await res.json();
        setProducts(prev => [...prev, newProduct]);
      } else {
        throw new Error('Failed to add product to database');
      }
    } catch (error) {
      console.error('API Error, falling back to local state:', error);
      // Fallback for local testing if DB is down
      const newProduct = {
        ...product,
        id: `sub_${products.length + 1}_${Date.now()}`
      };
      setProducts(prev => [...prev, newProduct]);
    }
  };

  const addTestimonial = async (testimonial: Omit<Testimonial, 'id' | 'avatar'>) => {
    try {
      const res = await fetch(`${API_URL}/testimonials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testimonial)
      });
      
      if (res.ok) {
        const newTestimonial = await res.json();
        setTestimonials(prev => [...prev, newTestimonial]);
      } else {
        throw new Error('Failed to add testimonial to database');
      }
    } catch (error) {
      console.error('API Error, falling back to local state:', error);
      // Fallback for local testing if DB is down
      const newTestimonial = {
        ...testimonial,
        id: testimonials.length + 1,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name.replace(/\s+/g, '')}`
      };
      setTestimonials(prev => [...prev, newTestimonial]);
    }
  };

  return (
    <DataContext.Provider value={{ products, addProduct, testimonials, addTestimonial, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
