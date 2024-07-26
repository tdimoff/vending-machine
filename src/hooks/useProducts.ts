import { useState, useEffect } from 'react';
import { IProduct } from '../interfaces/Product.interface';
import { PRODUCT_API_URL } from '../config';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(PRODUCT_API_URL);
        const data = await response.json();

        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error, setProducts };
};