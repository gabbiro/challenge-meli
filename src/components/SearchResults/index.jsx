import useFetchResults from '../../hooks/useFetchResults';
import SearchItem from '../SearchItem';
import Breadcrumb from '../Breadcrumb';
import Box from '../Box';
import './style.scss';

function SearchResults() {
  const [loading, results, categories, error] = useFetchResults();

  if (loading) return <Box text="Cargando..." />;
  if (error) return <Box text="Algo salió mal, inténtalo nuevamente" />;
  if (!results?.length)
    return <Box text="No hay resultados para tu búsqueda" />;
  return (
    <section className="search-results">
      <Breadcrumb categories={categories} />
      <ul className="search-results-list">
        {results?.map((res) => (
          <SearchItem key={res.id} item={res} />
        ))}
      </ul>
    </section>
  );
}

export default SearchResults;
