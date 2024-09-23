// src/components/DataFetcher.tsx
import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

interface DataFetcherProps {
  url: string;
}

export const DataFetcher: React.FC<DataFetcherProps> = ({ url }) => {
  const [data, loading, error] = useJsonFetch(url);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h3>Данные:</h3>
      <pre>{data.status}</pre>
    </div>
  );
};
