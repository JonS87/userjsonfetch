import { useEffect, useState } from 'react';
import { FetchData } from '../types/types';

const useJsonFetch = (url: string, opts?: RequestInit) => {
  const [data, setData] = useState<FetchData>({status: ''});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, opts);
        
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Неизвестная ошибка');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, opts]);

  return [data, loading, error] as const;
};

export default useJsonFetch;
