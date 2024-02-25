import { useState, useEffect } from 'react';

export const useLoadMoreOnScroll = (fetchData: () => Promise<void>, threshold = 200): boolean => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + threshold >= document.documentElement.offsetHeight &&
        !isLoading
      ) {
        setIsLoading(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, threshold]);

  useEffect(() => {
    if (!isLoading) return;

    fetchData()
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [isLoading, fetchData]);

  return isLoading;
};
