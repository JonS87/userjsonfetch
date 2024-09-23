// src/App.tsx
import React from 'react';
import { DataFetcher } from './components/DataFetcher';

const App: React.FC = () => {
  return (
    <>
      <h1>Пример использования кастомного хука useJsonFetch</h1>
      <DataFetcher url="http://localhost:7070/data" />
      <DataFetcher url="http://localhost:7070/error" />
      <DataFetcher url="http://localhost:7070/loading" />
    </>
  );
};

export default App;
