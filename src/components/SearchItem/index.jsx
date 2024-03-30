import { Link } from 'react-router-dom';
import shippingIcon from '../../assets/shipping.png';
import './style.scss';

const CustomLink = ({ id, children }) => (
  <Link
    to={`/items/${id}`}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    {children}
  </Link>
);

function SearchItem({ item }) {
  return (
    <li className="search-item">
      <CustomLink id={item.id}>
        <img
          className="search-item-image"
          src={item.picture}
          alt={item.title}
        />
      </CustomLink>
      <div className="search-item-right-container">
        <CustomLink id={item.id}>
          <div className="search-item-price">
            <span>
              {Number(item.price.amount).toLocaleString('es-AR', {
                style: 'currency',
                currency: item.price.currency,
              })}
            </span>
            {item.freeShipping && (
              <img
                className="search-item-shipping-icon"
                src={shippingIcon}
                alt="envio gratis"
              />
            )}
          </div>
          <div>{item.title}</div>
        </CustomLink>
        <div className="search-item-location">{item.location}</div>
      </div>
    </li>
  );
}

export default SearchItem;
