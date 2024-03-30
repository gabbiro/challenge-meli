import Breadcrumb from '../Breadcrumb';
import Box from '../Box';
import useFetchItemDetail from '../../hooks/useFetchItemDetail';
import getFormattedPrice from '../../utils/helpers';
import './style.scss';

function ItemDetail() {
  const [loading, item, categories, error] = useFetchItemDetail();

  if (loading) return <Box text="Cargando..." />;
  if (error) return <Box text="Este artículo no está disponible" />;
  return (
    <section className="item-container">
      <Breadcrumb categories={categories} />
      <div className="item-item-detail">
        <div className="item-left-container">
          <img
            className="item-item-image"
            src={item.picture}
            alt={item.title}
          />
          {item.description && (
            <div className="item-description">
              <h1>Descripción del producto</h1>
              <div>{item.description}</div>
            </div>
          )}
        </div>
        <div className="item-right-container">
          <div className="item-condition">
            <span>{item.condition === 'new' ? 'Nuevo' : 'Usado'} - </span>
            <span>{item.soldQuantity}</span>
          </div>
          <h2>{item.title}</h2>
          <div className="item-price">
            <span>{getFormattedPrice(item.price)}</span>
          </div>
          <button className="item-buy-button">Comprar</button>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
