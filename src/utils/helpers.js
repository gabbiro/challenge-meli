const getFormattedPrice = (price) =>
  Number(price.amount).toLocaleString('es-AR', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: price.decimals,
  });

export default getFormattedPrice;
