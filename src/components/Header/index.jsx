import { Link } from 'react-router-dom';
import mlLogo from '/Logo_ML.png';
import SearchBox from '../SearchBox';
import './style.scss';

function Header() {
  return (
    <header className="header">
      <section className="header-container">
        <Link to="/" replace>
          <img src={mlLogo} className="header-logo" alt="Mercado Libre" />
        </Link>
        <SearchBox />
      </section>
    </header>
  );
}

export default Header;
