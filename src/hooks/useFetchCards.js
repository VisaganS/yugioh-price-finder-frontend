import { useState } from 'react';
import { API_BASE } from '../config';

export function useFetchCards() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState(null);

  async function fetchCards(name) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/card/${name}`);
      if (!res.ok) throw new Error(res.statusText);
      setResults(await res.json());
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return { results, loading, error, fetchCards };
}
