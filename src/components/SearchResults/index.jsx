import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchItem from '../SearchItem';
import './style.scss';

function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  const [loading, setLoading] = useState();
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query.trim()) navigate('/');
    setLoading(true);
    fetch(`/api/items?q=${query}`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Something went wrong');
      })
      .then((res) => setResults(res.items))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [query, navigate]);

  if (loading) return <>Cargando...</>;
  if (error) return <>Algo salió mal, inténtalo nuevamente</>;
  if (!results?.length) return <>No hay resultados para tu búsqueda</>;
  return (
    <section className="search-results">
      <ul className="search-results-list">
        {results?.map((res) => (
          <SearchItem key={res.id} item={res} />
        ))}
      </ul>
    </section>
  );
}

export default SearchResults;
