import search from '../../assets/search.png';
import './style.scss';

function SearchBox() {
  return (
    <form className="search">
      <input className="search-input" placeholder="Nunca dejes de buscar" />
      <button className="search-button" type="submit">
        <img src={search} className="search-img" alt="buscar" />
      </button>
    </form>
  );
}

export default SearchBox;
