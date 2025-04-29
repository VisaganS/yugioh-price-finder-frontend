import './styles/App.scss';

import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ResultsTable from './components/ResultsTable/ResultsTable';
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';
import { useFetchCards } from './hooks/useFetchCards';

export default function App() {
  const [query, setQuery] = useState('');
  const { results, loading, error, fetchCards } = useFetchCards();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) fetchCards(query);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>Yu-Gi-Oh! Card Price Finder</h1>
      </header>

      <SearchBar
        value={query}
        onChange={setQuery}
        onSearch={handleSearch}
      />

      {error && <div className="app__error">{error}</div>}

      <ResultsTable data={results} />

      <LoadingOverlay open={loading} />
    </div>
  );
}
