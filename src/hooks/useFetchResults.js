import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function useFetchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  const [loading, setLoading] = useState();
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!query.trim()) navigate('/');
    setLoading(true);
    setError(false);
    fetch(`/api/items?q=${query}`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Something went wrong');
      })
      .then((res) => {
        setCategories(res.categories);
        setResults(res.items);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [query, navigate]);

  return [loading, results, categories, error];
}

export default useFetchResults;
