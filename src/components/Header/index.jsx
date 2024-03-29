import mlLogo from '/Logo_ML.png';
import SearchBox from '../SearchBox';
import './style.scss';

function Header() {
  return (
    <header className="header">
      <img src={mlLogo} className="header-logo" alt="Mercado Libre" />
      <SearchBox />
    </header>
  );
}

export default Header;
