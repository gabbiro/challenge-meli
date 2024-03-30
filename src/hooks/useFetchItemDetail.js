import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function useFetchItemDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    fetch(`/api/items/${id}`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Something went wrong');
      })
      .then((res) => {
        setItem(res.item);
        setCategories(res.categories);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return [loading, item, categories, error];
}

export default useFetchItemDetail;
