import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import searchIcon from '../../assets/search.png';
import './style.scss';

function SearchBox() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('search') || '';
  const [search, setSearch] = useState(searchParam);

  useEffect(() => setSearch(searchParam), [searchParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search?.trim()) navigate(`/items?search=${search}`);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search-input"
        name="search"
        placeholder="Nunca dejes de buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-button" type="submit">
        <img src={searchIcon} className="search-icon" alt="buscar" />
      </button>
    </form>
  );
}

export default SearchBox;
